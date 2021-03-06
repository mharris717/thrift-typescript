import * as ts from 'typescript'

import {
    Annotation,
    Annotations,
    FieldDefinition,
    FunctionDefinition,
    ServiceDefinition,
    SyntaxType,
} from '@creditkarma/thrift-parser'

import { IRenderState, IResolveContext } from '../../../types'

import { COMMON_IDENTIFIERS } from '../identifiers'

import {
    collectAllMethods,
    serviceInheritanceChain,
} from '../../shared/service'

import {
    createArrayType,
    createNumberType,
    createStringType,
} from '../../shared/types'

export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export function createStructArgsName(
    def: FunctionDefinition | FieldDefinition,
): string {
    return `${capitalize(def.name.value)}__Args`
}

export function createStructResultName(
    def: FunctionDefinition | FieldDefinition,
): string {
    return `${capitalize(def.name.value)}__Result`
}

export function renderServiceName(
    service: ServiceDefinition,
): ts.VariableStatement {
    return ts.createVariableStatement(
        [ts.createToken(ts.SyntaxKind.ExportKeyword)],
        ts.createVariableDeclarationList(
            [
                ts.createVariableDeclaration(
                    COMMON_IDENTIFIERS.serviceName,
                    createStringType(),
                    ts.createLiteral(service.name.value),
                ),
            ],
            ts.NodeFlags.Const,
        ),
    )
}

export function renderServiceNameProperty(): ts.PropertyDeclaration {
    return ts.createProperty(
        undefined,
        [
            ts.createToken(ts.SyntaxKind.PublicKeyword),
            ts.createToken(ts.SyntaxKind.ReadonlyKeyword),
        ],
        COMMON_IDENTIFIERS._serviceName,
        undefined,
        createStringType(),
        COMMON_IDENTIFIERS.serviceName,
    )
}

export function renderServiceNameStaticProperty(): ts.PropertyDeclaration {
    return ts.createProperty(
        undefined,
        [
            ts.createToken(ts.SyntaxKind.PublicKeyword),
            ts.createToken(ts.SyntaxKind.StaticKeyword),
            ts.createToken(ts.SyntaxKind.ReadonlyKeyword),
        ],
        COMMON_IDENTIFIERS.serviceName,
        undefined,
        createStringType(),
        COMMON_IDENTIFIERS.serviceName,
    )
}

export function renderMethodNames(
    service: ServiceDefinition,
    state: IRenderState,
): ts.VariableStatement {
    return ts.createVariableStatement(
        [ts.createToken(ts.SyntaxKind.ExportKeyword)],
        ts.createVariableDeclarationList(
            [
                ts.createVariableDeclaration(
                    COMMON_IDENTIFIERS.methodNames,
                    createArrayType(createStringType()),
                    ts.createArrayLiteral([
                        ...collectAllMethods(service, state).map(
                            (next: FunctionDefinition) => {
                                return ts.createLiteral(next.name.value)
                            },
                        ),
                    ]),
                ),
            ],
            ts.NodeFlags.Const,
        ),
    )
}

export function renderMethodNamesProperty(): ts.PropertyDeclaration {
    return ts.createProperty(
        undefined,
        [
            ts.createToken(ts.SyntaxKind.PublicKeyword),
            ts.createToken(ts.SyntaxKind.ReadonlyKeyword),
        ],
        COMMON_IDENTIFIERS._methodNames,
        undefined,
        createArrayType(createStringType()),
        COMMON_IDENTIFIERS.methodNames,
    )
}

export function renderMethodNamesStaticProperty(): ts.PropertyDeclaration {
    return ts.createProperty(
        undefined,
        [
            ts.createToken(ts.SyntaxKind.PublicKeyword),
            ts.createToken(ts.SyntaxKind.StaticKeyword),
            ts.createToken(ts.SyntaxKind.ReadonlyKeyword),
        ],
        COMMON_IDENTIFIERS.methodNames,
        undefined,
        createArrayType(createStringType()),
        COMMON_IDENTIFIERS.methodNames,
    )
}

const methodParamMapType: ts.TypeLiteralNode = ts.createTypeLiteralNode([
    ts.createIndexSignature(
        undefined,
        undefined,
        [
            ts.createParameter(
                undefined,
                undefined,
                undefined,
                COMMON_IDENTIFIERS.methodName,
                undefined,
                createStringType(),
            ),
        ],
        createNumberType(),
    ),
])

export function renderMethodParameters(
    service: ServiceDefinition,
    state: IRenderState,
): ts.VariableStatement {
    return ts.createVariableStatement(
        [ts.createToken(ts.SyntaxKind.ExportKeyword)],
        ts.createVariableDeclarationList(
            [
                ts.createVariableDeclaration(
                    COMMON_IDENTIFIERS.methodParameters,
                    methodParamMapType,
                    ts.createObjectLiteral(
                        [
                            ...collectAllMethods(service, state).map(
                                (next: FunctionDefinition) => {
                                    return ts.createPropertyAssignment(
                                        next.name.value,
                                        ts.createLiteral(
                                            next.fields.length + 1, // including context
                                        ),
                                    )
                                },
                            ),
                        ],
                        true,
                    ),
                ),
            ],
            ts.NodeFlags.Const,
        ),
    )
}

export function renderMethodParametersProperty(): ts.PropertyDeclaration {
    return ts.createProperty(
        undefined,
        [
            ts.createToken(ts.SyntaxKind.PublicKeyword),
            ts.createToken(ts.SyntaxKind.ReadonlyKeyword),
        ],
        COMMON_IDENTIFIERS._methodParameters,
        ts.createToken(ts.SyntaxKind.QuestionToken),
        methodParamMapType,
        COMMON_IDENTIFIERS.methodParameters,
    )
}

function getRawAnnotations(
    service: ServiceDefinition,
    context: IResolveContext,
): Array<Annotation> {
    const baseAnnotations: Array<Annotation> = service.annotations
        ? service.annotations.annotations
        : []
    return serviceInheritanceChain(service, context).reduce(
        (acc: Array<Annotation>, next: ServiceDefinition) => {
            if (next.annotations) {
                return [...acc, ...next.annotations.annotations]
            } else {
                return acc
            }
        },
        baseAnnotations,
    )
}

export function collectAllAnnotations(
    service: ServiceDefinition,
    state: IRenderState,
): Annotations {
    const temp: Map<string, Annotation> = new Map()
    const rawAnnotations: Array<Annotation> = getRawAnnotations(service, {
        currentNamespace: state.currentNamespace,
        namespaceMap: state.project.namespaces,
    })

    for (const annotation of rawAnnotations) {
        temp.set(annotation.name.value, annotation)
    }

    return {
        type: SyntaxType.Annotations,
        loc: service.loc,
        annotations: Array.from(temp.values()),
    }
}
