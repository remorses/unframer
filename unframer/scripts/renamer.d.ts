import type { Scope } from '@babel/traverse';
import * as t from '@babel/types';
import { NodePath } from '@babel/core';
export default class BatchRenamer {
    constructor(scope: Scope, map: Map<string, string>);
    map: Map<string, string>;
    scope: Scope;
    maybeConvertFromExportDeclaration(parentDeclar: NodePath): void;
    maybeConvertFromClassFunctionExpression(path: NodePath): NodePath<t.Node>;
    rename(): void;
}
//# sourceMappingURL=renamer.d.ts.map