const mapPackages = JSON.parse(process.env.UNFRAMER_MAP_PACKAGES || '{}')

export async function resolve(specifier, context, defaultResolve) {
    if (mapPackages[specifier]) {
        return {
            url: mapPackages[specifier],
            // format: 'module', // Specify that unframer is an ES module
            shortCircuit: true, // Signal that we're intentionally not calling next hook
        }
    }


    return defaultResolve(specifier, context, defaultResolve)
}
