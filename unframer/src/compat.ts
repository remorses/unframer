export function propCamelCaseJustLikeFramer(str?: string) {
    if (!str) {
        return ''
    }
    // Handle consecutive uppercase letters followed by lowercase, this is a bug in Framer, makes it match Framer
    str = str.replace(/([A-Z]{2,})([a-z])/g, (_, upper, lower) => {
        return upper + lower.toUpperCase()
    })
    // Remove spaces (e.g. "Foo Bar" -> "fooBar")
    str = str.replace(/\s+(.)/g, (_, c) => c.toUpperCase())
    // Convert dashes to camelCase (e.g. foo-bar -> fooBar)
    str = str.replace(/-([\w])/g, (g) => g[1].toUpperCase())
    // Convert underscores to camelCase (e.g. foo_bar -> fooBar)
    str = str.replace(/_([a-z])/g, (g) => g[1].toUpperCase())

    // Ensure first character is lowercase
    str = str[0].toLowerCase() + str.slice(1)
    // Add underscore prefix if starts with number
    if (/^\d/.test(str)) {
        str = '_' + str
    }
    return str
}
