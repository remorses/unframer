export async function resolve(specifier, context, defaultResolve) {
    if (specifier === 'unframer') {
        return {
            url: process.env.UNFRAMER_RUNTIME_PATH,
            format: 'module', // Specify that unframer is an ES module
            shortCircuit: true, // Signal that we're intentionally not calling next hook
        }
    }
    return defaultResolve(specifier, context, defaultResolve)
}
