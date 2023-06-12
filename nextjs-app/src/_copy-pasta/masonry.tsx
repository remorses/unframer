import { addPropertyControls, ControlType } from "framer"
import React from "react"

///////////////////////////

// Code from Nikolay Goncharuk on GitHub:
// https://github.com/GoncharukBro/react-smart-masonry/blob/master/src/Masonry.tsx
// https://github.com/GoncharukBro/react-smart-masonry/blob/master/src/useResize.ts
//
// Modified by Isaac Roberts (twitter.com/madebyisaacr)
//
// Copyright (c) 2021 Nikolay Goncharuk
// MIT License

import {
    useState,
    useLayoutEffect,
    useEffect,
    useMemo,
    useRef,
    Children,
    forwardRef,
    isValidElement,
} from "react"

type Breakpoints = { [key: string]: number } | undefined

function getCurrentBreakpoints(breakpoints: Breakpoints, width: number) {
    const normalizedBreakpoints =
        breakpoints && Object.entries(breakpoints).sort((a, b) => b[1] - a[1])
    return normalizedBreakpoints
        ?.filter((item) => item[1] <= width)
        .map((item) => item[0])
}

function getState(breakpoints: Breakpoints, width: number) {
    return {
        width,
        currentBreakpoints: getCurrentBreakpoints(breakpoints, width),
    }
}

function useResize(breakpoints: Breakpoints) {
    const [state, setState] = useState(
        () => getState(breakpoints, 0) //global.innerWidth)
    )

    useEffect(() => {
        const handleResize = () => {
            setState(getState(breakpoints, window.innerWidth))
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [breakpoints])

    return state
}

function getCurrentParam<T, B extends { [key: string]: T } = any>(
    breakpoints: string[] | undefined,
    param: T | B,
    defaultValue: T
) {
    if (typeof param === "object") {
        const breakpoint = breakpoints?.find(
            (item) => (param as B)[item] !== undefined
        )
        return breakpoint !== undefined
            ? (param as B)[breakpoint] ?? defaultValue
            : defaultValue
    }
    return param
}

const DEFAULT_COLUMNS = 1
const DEFAULT_GAP = 0

type Element<T> = { element: T; index: number }

export interface MasonryProps<B = unknown>
    extends React.HTMLAttributes<HTMLDivElement> {
    breakpoints?: B
    columns?: number | { [P in keyof B]?: number }
    gap?: string | number | { [P in keyof B]?: string | number }
    reverse?: boolean
    autoArrange?: boolean
}

function MasonryComponent<B extends { [key: string]: number }>(
    {
        breakpoints,
        columns = DEFAULT_COLUMNS,
        gap = DEFAULT_GAP,
        reverse = false,
        autoArrange = false,
        children,
        style,
        ...otherProps
    }: MasonryProps<B>,
    forwardedRef?: React.Ref<HTMLDivElement>
) {
    const { currentBreakpoints } = useResize(breakpoints)

    const elements = useRef<Element<HTMLDivElement>[]>([])

    const [arrange, setArrange] = useState(false)

    const [currentColumns, setCurrentColumns] = useState(() => {
        return getCurrentParam<number>(
            currentBreakpoints,
            columns,
            DEFAULT_COLUMNS
        )
    })
    const [currentGap, setCurrentGap] = useState(() => {
        return getCurrentParam<string | number>(
            currentBreakpoints,
            gap,
            DEFAULT_GAP
        )
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useLayoutEffect(() => {
        if (autoArrange && !arrange) setArrange(true)

        return () => {
            if (autoArrange && arrange) setArrange(false)
        }
    })

    useEffect(() => {
        const param = getCurrentParam<number>(
            currentBreakpoints,
            columns,
            DEFAULT_COLUMNS
        )
        setCurrentColumns(param)
    }, [columns, currentBreakpoints])

    useEffect(() => {
        const param = getCurrentParam<string | number>(
            currentBreakpoints,
            gap,
            DEFAULT_GAP
        )
        setCurrentGap(param)
    }, [gap, currentBreakpoints])

    const layout = useMemo(() => {
        if (currentColumns < 1) return []

        const arrayOfChildren = Children.toArray(children)
        if (reverse) arrayOfChildren.reverse()

        const newLayout = Array.from({ length: currentColumns }, () => {
            return [] as Element<JSX.Element>[]
        })

        const columnHeights = newLayout.map(() => 0)

        const getcolumnIndex = (index: number) => {
            if (autoArrange && arrange && elements.current.length > 0) {
                const columnIndex = columnHeights.findIndex((item) => {
                    return item === Math.min(...columnHeights)
                })
                const element = elements.current.find(
                    (item) => item.index === index
                )
                const elementHeight =
                    element?.element.getBoundingClientRect().height
                columnHeights[columnIndex] += elementHeight || 0

                return columnIndex
            }
            return index % currentColumns
        }

        arrayOfChildren.forEach((child, index) => {
            if (child && isValidElement(child)) {
                newLayout[getcolumnIndex(index)].push({ element: child, index })
            }
        })

        return newLayout
    }, [arrange, autoArrange, children, currentColumns, reverse])

    const temporaryElements = [] as Element<HTMLDivElement>[]

    const addElement = (index: number) => (element: HTMLDivElement | null) => {
        if (element !== null) {
            temporaryElements.push({ element, index })
            elements.current = temporaryElements
        }
    }

    return (
        <div
            ref={forwardedRef}
            style={{ display: "flex", gap: currentGap, ...style }}
            {...otherProps}
        >
            {layout.map((column, columnIndex) => (
                <div
                    key={columnIndex}
                    style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: currentGap,
                    }}
                >
                    {column.map((item, itemIndex) => (
                        <div key={itemIndex} ref={addElement(item.index)}>
                            {item.element}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

const Masonry = forwardRef(MasonryComponent) as <
    B extends { [key: string]: number }
>(
    // eslint-disable-next-line no-unused-vars
    props: MasonryProps<B> & React.RefAttributes<HTMLDivElement>
) => JSX.Element

///////////////////////////

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight auto
 * @framerDisableUnlink
 */
export default function MasonryLayout(props) {
    let layers = []
    if (props.columnWidth == "fill") {
        for (let i = 0; i < props.layers.length; i++) {
            let layer = props.layers[i]
            if (!layer.props.style) {
                layer.props.style = {}
            }
            layer.props.style.width = "100%"
            layers.push(layer)
        }
    } else {
        layers = props.layers
    }

    if (props.columns == 1) {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: props.gap,
                }}
            >
                {layers}
            </div>
        )
    } else {
        return (
            <Masonry
                columns={props.columns}
                gap={props.gap}
                autoArrange={props.autoArrange}
                reverse={props.reverse}
            >
                {layers}
            </Masonry>
        )
    }
}

MasonryLayout.displayName = "Masonry Layout"

MasonryLayout.defaultProps = {
    layers: [],
    columns: 3,
    columnWidth: "fit",
    autoArrange: true,
    reverse: false,
    gap: 10,
}

addPropertyControls(MasonryLayout, {
    layers: {
        type: ControlType.Array,
        control: {
            type: ControlType.ComponentInstance,
        },
    },
    columns: {
        type: ControlType.Number,
        defaultValue: MasonryLayout.defaultProps.columns,
        min: 1,
        step: 1,
        displayStepper: true,
        hidden(props) {
            return props.direction == "h"
        },
    },
    columnWidth: {
        type: ControlType.Enum,
        defaultValue: MasonryLayout.defaultProps.columnWidth,
        options: ["fit", "fill"],
        optionTitles: ["Fit", "Fill"],
        displaySegmentedControl: true,
    },
    autoArrange: {
        type: ControlType.Boolean,
        defaultValue: MasonryLayout.defaultProps.autoArrange,
        description: "Arranges each layer into the shortest column.",
    },
    reverse: {
        type: ControlType.Boolean,
        defaultValue: MasonryLayout.defaultProps.reverse,
    },
    gap: {
        type: ControlType.Number,
        defaultValue: MasonryLayout.defaultProps.gap,
        min: 0,
    },
})
