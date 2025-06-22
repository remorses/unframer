this project is a cli called unframer that download Framer website builder components as React component files.

when summarizing changes at the end of the message be super short, a few words and in bullet points, use bold text to highlight important keywords. use markdown.

# package manager: pnpm with workspace

This project uses pnpm workspaces to manage dependencies. Important scripts are in the root package.json or various packages package.json

try to run commands inside the package folder that you are working on. for example you should never run `pnpm test` from the root

# typescript

Try to use object arguments for new typescript functions if the function would accept more than one argument, this way you can use the object as a sort of named argument feature, where order of arguments does not matter and it's easier to discover parameters.

do not add useless comments if the code is self descriptive. only add comments if requested or if this was a change that i asked for, meaning it is not obvious code and needs some inline documentation.

try to use early returns and breaks, try nesting code as little as possible, follow the go best practice of if statements: avoid else, nest as little as possible, use top level ifs. minimize nesting.

after any change to typescript code ALWAYS run the `pnpm typecheck` script of that package, or if there is no typecheck script run `pnpm tsc` yourself

# testing

do not write new test files unless asked. do not write tests if there is not already a test or describe block for that function or module.

tests should validate complex and non obvious logic, if a test looks like a placeholder, do not add it.

Use vitest to run tests. Tests should be run from the current package directory and not root, try using the test script instead of vitest directly. Additional vitest flags can be added at the end, like --run to disable watch mode or -u to update snapshots.

To understand how the code you are writing works you should add inline snapshots in the test files with expect().toMatchInlineSnapshot(), then run the test with `pnpm test -u --run` or `pnpm vitest -u --run` to update the snapshot in the file, then read the file again to inspect the result. If the result is not expected, update the code and repeat until the snapshot matches your expectations. Never write the inline snapshots in test files yourself. Just leave them empty and run `pnpm test -u --run` to update them.

> Always call `pnpm vitest` or `pnpm test` with `--run` or they will hang forever waiting for changes!

Never test client React components. Only server code that runs on the server.

Most tests should be simple calls to functions with some expect calls, no mocks. Test files should be called same as the file where the tested function is being exported from.

Tests should strive to be as simple as possible, the best test is a simple `.toMatchInlineSnapshot()` call. These can be easily evaluated reading the test file after the run passing the -u option. You can clearly see from the inline snapshot if the function behaves as expected or not.

Try to use only describe and test in your tests. Do not use beforeAll, before, etc if not strictly required.

NEVER write tests for React components or React hooks. NEVER write tests for React components. You will be fired if you do.

Sometimes tests work directly on database data, using prisma. To run these tests you have to use the package.json script, which will call `doppler run -- vitest` or similar. Never run doppler cli yourself as you could delete or update production data. Tests generally use a staging database instead.

Never write tests yourself that call prisma or interact with database or emails. For these asks the user to write them for you.

## checking

after a change you have to run `pnpm typecheck` or `pnpm tsc` to make sure the typescript code compiles

To test changes in the framer exporting logic you have to first run `pnpm --filter unframer build`  then try running `pnpm --filter nextjs-app framer-simplicity` to generate the framer components. You can then read contents in the framer-simplicity to make sure they are right. notice these components can be very big.

## logging

notice that the unframer folder uses a logger, when using the .debug method logs are only visible when passing `--debug` to the unframer cli, for example `pnpm --filter nextjs-app framer-simplicity --debug`
