/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v{{VERSION}}
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "test-lib";
import * as SharedStruct from "./SharedStruct";
import * as SharedUnion from "./SharedUnion";
import * as __CONSTANTS__ from "./constants";
export const serviceName: string = "SharedService";
export const annotations: thrift.IThriftAnnotations = {};
export const methodAnnotations: thrift.IMethodAnnotations = {
    getStruct: {
        annotations: {},
        fieldAnnotations: {}
    },
    getUnion: {
        annotations: {},
        fieldAnnotations: {}
    },
    getEnum: {
        annotations: {},
        fieldAnnotations: {}
    }
};
export const methodNames: Array<string> = ["getStruct", "getUnion", "getEnum"];
export interface IGetStruct__Args {
    __name: "GetStruct__Args";
    key: number;
}
export interface IGetStruct__ArgsArgs {
    key: number;
}
export const GetStruct__ArgsCodec: thrift.IStructCodec<IGetStruct__ArgsArgs, IGetStruct__Args> = {
    encode(args: IGetStruct__ArgsArgs, output: thrift.TProtocol): void {
        const obj = {
            key: args.key
        };
        output.writeStructBegin("GetStruct__Args");
        if (obj.key != null) {
            output.writeFieldBegin("key", thrift.TType.I32, 1);
            output.writeI32(obj.key);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[key] is unset!");
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IGetStruct__Args {
        let _args: any = {};
        input.readStructBegin();
        while (true) {
            const ret: thrift.IThriftField = input.readFieldBegin();
            const fieldType: thrift.TType = ret.fieldType;
            const fieldId: number = ret.fieldId;
            if (fieldType === thrift.TType.STOP) {
                break;
            }
            switch (fieldId) {
                case 1:
                    if (fieldType === thrift.TType.I32) {
                        const value_1: number = input.readI32();
                        _args.key = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        if (_args.key !== undefined) {
            return {
                __name: "GetStruct__Args",
                key: _args.key
            };
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read GetStruct__Args from input");
        }
    }
};
export class GetStruct__Args extends thrift.StructLike implements IGetStruct__Args {
    public key: number;
    public readonly __name = "GetStruct__Args";
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IGetStruct__ArgsArgs) {
        super();
        if (args.key != null) {
            const value_2: number = args.key;
            this.key = value_2;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[key] is unset!");
        }
    }
    public static read(input: thrift.TProtocol): GetStruct__Args {
        return new GetStruct__Args(GetStruct__ArgsCodec.decode(input));
    }
    public static write(args: IGetStruct__ArgsArgs, output: thrift.TProtocol): void {
        return GetStruct__ArgsCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return GetStruct__ArgsCodec.encode(this, output);
    }
}
export interface IGetUnion__Args {
    __name: "GetUnion__Args";
    index: number;
}
export interface IGetUnion__ArgsArgs {
    index: number;
}
export const GetUnion__ArgsCodec: thrift.IStructCodec<IGetUnion__ArgsArgs, IGetUnion__Args> = {
    encode(args: IGetUnion__ArgsArgs, output: thrift.TProtocol): void {
        const obj = {
            index: args.index
        };
        output.writeStructBegin("GetUnion__Args");
        if (obj.index != null) {
            output.writeFieldBegin("index", thrift.TType.I32, 1);
            output.writeI32(obj.index);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[index] is unset!");
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IGetUnion__Args {
        let _args: any = {};
        input.readStructBegin();
        while (true) {
            const ret: thrift.IThriftField = input.readFieldBegin();
            const fieldType: thrift.TType = ret.fieldType;
            const fieldId: number = ret.fieldId;
            if (fieldType === thrift.TType.STOP) {
                break;
            }
            switch (fieldId) {
                case 1:
                    if (fieldType === thrift.TType.I32) {
                        const value_3: number = input.readI32();
                        _args.index = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        if (_args.index !== undefined) {
            return {
                __name: "GetUnion__Args",
                index: _args.index
            };
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read GetUnion__Args from input");
        }
    }
};
export class GetUnion__Args extends thrift.StructLike implements IGetUnion__Args {
    public index: number;
    public readonly __name = "GetUnion__Args";
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IGetUnion__ArgsArgs) {
        super();
        if (args.index != null) {
            const value_4: number = args.index;
            this.index = value_4;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[index] is unset!");
        }
    }
    public static read(input: thrift.TProtocol): GetUnion__Args {
        return new GetUnion__Args(GetUnion__ArgsCodec.decode(input));
    }
    public static write(args: IGetUnion__ArgsArgs, output: thrift.TProtocol): void {
        return GetUnion__ArgsCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return GetUnion__ArgsCodec.encode(this, output);
    }
}
export interface IGetEnum__Args {
    __name: "GetEnum__Args";
}
export interface IGetEnum__ArgsArgs {
}
export const GetEnum__ArgsCodec: thrift.IStructCodec<IGetEnum__ArgsArgs, IGetEnum__Args> = {
    encode(args: IGetEnum__ArgsArgs, output: thrift.TProtocol): void {
        output.writeStructBegin("GetEnum__Args");
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IGetEnum__Args {
        input.readStructBegin();
        while (true) {
            const ret: thrift.IThriftField = input.readFieldBegin();
            const fieldType: thrift.TType = ret.fieldType;
            const fieldId: number = ret.fieldId;
            if (fieldType === thrift.TType.STOP) {
                break;
            }
            switch (fieldId) {
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        return {
            __name: "GetEnum__Args"
        };
    }
};
export class GetEnum__Args extends thrift.StructLike implements IGetEnum__Args {
    public readonly __name = "GetEnum__Args";
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IGetEnum__ArgsArgs = {}) {
        super();
    }
    public static read(input: thrift.TProtocol): GetEnum__Args {
        return new GetEnum__Args(GetEnum__ArgsCodec.decode(input));
    }
    public static write(args: IGetEnum__ArgsArgs, output: thrift.TProtocol): void {
        return GetEnum__ArgsCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return GetEnum__ArgsCodec.encode(this, output);
    }
}
export interface IGetStruct__Result {
    __name: "GetStruct__Result";
    success?: SharedStruct.ISharedStruct;
}
export interface IGetStruct__ResultArgs {
    success?: SharedStruct.ISharedStructArgs;
}
export const GetStruct__ResultCodec: thrift.IStructCodec<IGetStruct__ResultArgs, IGetStruct__Result> = {
    encode(args: IGetStruct__ResultArgs, output: thrift.TProtocol): void {
        const obj = {
            success: args.success
        };
        output.writeStructBegin("GetStruct__Result");
        if (obj.success != null) {
            output.writeFieldBegin("success", thrift.TType.STRUCT, 0);
            SharedStruct.SharedStructCodec.encode(obj.success, output);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IGetStruct__Result {
        let _args: any = {};
        input.readStructBegin();
        while (true) {
            const ret: thrift.IThriftField = input.readFieldBegin();
            const fieldType: thrift.TType = ret.fieldType;
            const fieldId: number = ret.fieldId;
            if (fieldType === thrift.TType.STOP) {
                break;
            }
            switch (fieldId) {
                case 0:
                    if (fieldType === thrift.TType.STRUCT) {
                        const value_5: SharedStruct.ISharedStruct = SharedStruct.SharedStructCodec.decode(input);
                        _args.success = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        return {
            __name: "GetStruct__Result",
            success: _args.success
        };
    }
};
export class GetStruct__Result extends thrift.StructLike implements IGetStruct__Result {
    public success?: SharedStruct.ISharedStruct;
    public readonly __name = "GetStruct__Result";
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IGetStruct__ResultArgs = {}) {
        super();
        if (args.success != null) {
            const value_6: SharedStruct.ISharedStruct = new SharedStruct.SharedStruct(args.success);
            this.success = value_6;
        }
    }
    public static read(input: thrift.TProtocol): GetStruct__Result {
        return new GetStruct__Result(GetStruct__ResultCodec.decode(input));
    }
    public static write(args: IGetStruct__ResultArgs, output: thrift.TProtocol): void {
        return GetStruct__ResultCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return GetStruct__ResultCodec.encode(this, output);
    }
}
export interface IGetUnion__Result {
    __name: "GetUnion__Result";
    success?: SharedUnion.SharedUnion;
}
export interface IGetUnion__ResultArgs {
    success?: SharedUnion.SharedUnionArgs;
}
export const GetUnion__ResultCodec: thrift.IStructCodec<IGetUnion__ResultArgs, IGetUnion__Result> = {
    encode(args: IGetUnion__ResultArgs, output: thrift.TProtocol): void {
        const obj = {
            success: args.success
        };
        output.writeStructBegin("GetUnion__Result");
        if (obj.success != null) {
            output.writeFieldBegin("success", thrift.TType.STRUCT, 0);
            SharedUnion.SharedUnionCodec.encode(obj.success, output);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IGetUnion__Result {
        let _args: any = {};
        input.readStructBegin();
        while (true) {
            const ret: thrift.IThriftField = input.readFieldBegin();
            const fieldType: thrift.TType = ret.fieldType;
            const fieldId: number = ret.fieldId;
            if (fieldType === thrift.TType.STOP) {
                break;
            }
            switch (fieldId) {
                case 0:
                    if (fieldType === thrift.TType.STRUCT) {
                        const value_7: SharedUnion.SharedUnion = SharedUnion.SharedUnionCodec.decode(input);
                        _args.success = value_7;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        return {
            __name: "GetUnion__Result",
            success: _args.success
        };
    }
};
export class GetUnion__Result extends thrift.StructLike implements IGetUnion__Result {
    public success?: SharedUnion.SharedUnion;
    public readonly __name = "GetUnion__Result";
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IGetUnion__ResultArgs = {}) {
        super();
        if (args.success != null) {
            const value_8: SharedUnion.SharedUnion = SharedUnion.SharedUnionCodec.create(args.success);
            this.success = value_8;
        }
    }
    public static read(input: thrift.TProtocol): GetUnion__Result {
        return new GetUnion__Result(GetUnion__ResultCodec.decode(input));
    }
    public static write(args: IGetUnion__ResultArgs, output: thrift.TProtocol): void {
        return GetUnion__ResultCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return GetUnion__ResultCodec.encode(this, output);
    }
}
export interface IGetEnum__Result {
    __name: "GetEnum__Result";
    success?: __CONSTANTS__.SharedEnum;
}
export interface IGetEnum__ResultArgs {
    success?: __CONSTANTS__.SharedEnum;
}
export const GetEnum__ResultCodec: thrift.IStructCodec<IGetEnum__ResultArgs, IGetEnum__Result> = {
    encode(args: IGetEnum__ResultArgs, output: thrift.TProtocol): void {
        const obj = {
            success: args.success
        };
        output.writeStructBegin("GetEnum__Result");
        if (obj.success != null) {
            output.writeFieldBegin("success", thrift.TType.I32, 0);
            output.writeI32(obj.success);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IGetEnum__Result {
        let _args: any = {};
        input.readStructBegin();
        while (true) {
            const ret: thrift.IThriftField = input.readFieldBegin();
            const fieldType: thrift.TType = ret.fieldType;
            const fieldId: number = ret.fieldId;
            if (fieldType === thrift.TType.STOP) {
                break;
            }
            switch (fieldId) {
                case 0:
                    if (fieldType === thrift.TType.I32) {
                        const value_9: __CONSTANTS__.SharedEnum = input.readI32();
                        _args.success = value_9;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        return {
            __name: "GetEnum__Result",
            success: _args.success
        };
    }
};
export class GetEnum__Result extends thrift.StructLike implements IGetEnum__Result {
    public success?: __CONSTANTS__.SharedEnum;
    public readonly __name = "GetEnum__Result";
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IGetEnum__ResultArgs = {}) {
        super();
        if (args.success != null) {
            const value_10: __CONSTANTS__.SharedEnum = args.success;
            this.success = value_10;
        }
    }
    public static read(input: thrift.TProtocol): GetEnum__Result {
        return new GetEnum__Result(GetEnum__ResultCodec.decode(input));
    }
    public static write(args: IGetEnum__ResultArgs, output: thrift.TProtocol): void {
        return GetEnum__ResultCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return GetEnum__ResultCodec.encode(this, output);
    }
}
export class Client<Context = any> extends thrift.ThriftClient<Context> {
    public static readonly serviceName: string = serviceName;
    public static readonly annotations: thrift.IThriftAnnotations = annotations;
    public static readonly methodAnnotations: thrift.IMethodAnnotations = methodAnnotations;
    public static readonly methodNames: Array<string> = methodNames;
    public readonly _serviceName: string = serviceName;
    public readonly _annotations: thrift.IThriftAnnotations = annotations;
    public readonly _methodAnnotations: thrift.IMethodAnnotations = methodAnnotations;
    public readonly _methodNames: Array<string> = methodNames;
    public getStruct(key: number, context?: Context): Promise<SharedStruct.ISharedStruct> {
        const writer: thrift.TTransport = new this.transport();
        const output: thrift.TProtocol = new this.protocol(writer);
        output.writeMessageBegin("getStruct", thrift.MessageType.CALL, this.incrementRequestId());
        const args: IGetStruct__ArgsArgs = { key };
        GetStruct__ArgsCodec.encode(args, output);
        output.writeMessageEnd();
        return this.connection.send(writer.flush(), context).then((data: Buffer) => {
            const reader: thrift.TTransport = this.transport.receiver(data);
            const input: thrift.TProtocol = new this.protocol(reader);
            try {
                const { fieldName: fieldName, messageType: messageType }: thrift.IThriftMessage = input.readMessageBegin();
                if (fieldName === "getStruct") {
                    if (messageType === thrift.MessageType.EXCEPTION) {
                        const err: thrift.TApplicationException = thrift.TApplicationExceptionCodec.decode(input);
                        input.readMessageEnd();
                        return Promise.reject(err);
                    }
                    else {
                        const result: IGetStruct__Result = GetStruct__ResultCodec.decode(input);
                        input.readMessageEnd();
                        if (result.success != null) {
                            return Promise.resolve(result.success);
                        }
                        else {
                            return Promise.reject(new thrift.TApplicationException(thrift.TApplicationExceptionType.UNKNOWN, "getStruct failed: unknown result"));
                        }
                    }
                }
                else {
                    return Promise.reject(new thrift.TApplicationException(thrift.TApplicationExceptionType.WRONG_METHOD_NAME, "Received a response to an unknown RPC function: " + fieldName));
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
        });
    }
    public getUnion(index: number, context?: Context): Promise<SharedUnion.SharedUnion> {
        const writer: thrift.TTransport = new this.transport();
        const output: thrift.TProtocol = new this.protocol(writer);
        output.writeMessageBegin("getUnion", thrift.MessageType.CALL, this.incrementRequestId());
        const args: IGetUnion__ArgsArgs = { index };
        GetUnion__ArgsCodec.encode(args, output);
        output.writeMessageEnd();
        return this.connection.send(writer.flush(), context).then((data: Buffer) => {
            const reader: thrift.TTransport = this.transport.receiver(data);
            const input: thrift.TProtocol = new this.protocol(reader);
            try {
                const { fieldName: fieldName, messageType: messageType }: thrift.IThriftMessage = input.readMessageBegin();
                if (fieldName === "getUnion") {
                    if (messageType === thrift.MessageType.EXCEPTION) {
                        const err: thrift.TApplicationException = thrift.TApplicationExceptionCodec.decode(input);
                        input.readMessageEnd();
                        return Promise.reject(err);
                    }
                    else {
                        const result: IGetUnion__Result = GetUnion__ResultCodec.decode(input);
                        input.readMessageEnd();
                        if (result.success != null) {
                            return Promise.resolve(result.success);
                        }
                        else {
                            return Promise.reject(new thrift.TApplicationException(thrift.TApplicationExceptionType.UNKNOWN, "getUnion failed: unknown result"));
                        }
                    }
                }
                else {
                    return Promise.reject(new thrift.TApplicationException(thrift.TApplicationExceptionType.WRONG_METHOD_NAME, "Received a response to an unknown RPC function: " + fieldName));
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
        });
    }
    public getEnum(context?: Context): Promise<__CONSTANTS__.SharedEnum> {
        const writer: thrift.TTransport = new this.transport();
        const output: thrift.TProtocol = new this.protocol(writer);
        output.writeMessageBegin("getEnum", thrift.MessageType.CALL, this.incrementRequestId());
        const args: IGetEnum__ArgsArgs = {};
        GetEnum__ArgsCodec.encode(args, output);
        output.writeMessageEnd();
        return this.connection.send(writer.flush(), context).then((data: Buffer) => {
            const reader: thrift.TTransport = this.transport.receiver(data);
            const input: thrift.TProtocol = new this.protocol(reader);
            try {
                const { fieldName: fieldName, messageType: messageType }: thrift.IThriftMessage = input.readMessageBegin();
                if (fieldName === "getEnum") {
                    if (messageType === thrift.MessageType.EXCEPTION) {
                        const err: thrift.TApplicationException = thrift.TApplicationExceptionCodec.decode(input);
                        input.readMessageEnd();
                        return Promise.reject(err);
                    }
                    else {
                        const result: IGetEnum__Result = GetEnum__ResultCodec.decode(input);
                        input.readMessageEnd();
                        if (result.success != null) {
                            return Promise.resolve(result.success);
                        }
                        else {
                            return Promise.reject(new thrift.TApplicationException(thrift.TApplicationExceptionType.UNKNOWN, "getEnum failed: unknown result"));
                        }
                    }
                }
                else {
                    return Promise.reject(new thrift.TApplicationException(thrift.TApplicationExceptionType.WRONG_METHOD_NAME, "Received a response to an unknown RPC function: " + fieldName));
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
        });
    }
}
export interface IHandler<Context = any> {
    getStruct(key: number, context?: Context): SharedStruct.ISharedStructArgs | Promise<SharedStruct.ISharedStructArgs>;
    getUnion(index: number, context?: Context): SharedUnion.SharedUnionArgs | Promise<SharedUnion.SharedUnionArgs>;
    getEnum(context?: Context): __CONSTANTS__.SharedEnum | Promise<__CONSTANTS__.SharedEnum>;
}
export class Processor<Context = any> extends thrift.ThriftProcessor<Context, IHandler<Context>> {
    protected readonly _handler: IHandler<Context>;
    public static readonly serviceName: string = serviceName;
    public static readonly annotations: thrift.IThriftAnnotations = annotations;
    public static readonly methodAnnotations: thrift.IMethodAnnotations = methodAnnotations;
    public static readonly methodNames: Array<string> = methodNames;
    public readonly _serviceName: string = serviceName;
    public readonly _annotations: thrift.IThriftAnnotations = annotations;
    public readonly _methodAnnotations: thrift.IMethodAnnotations = methodAnnotations;
    public readonly _methodNames: Array<string> = methodNames;
    constructor(handler: IHandler<Context>) {
        super();
        this._handler = handler;
    }
    public process(input: thrift.TProtocol, output: thrift.TProtocol, context: Context): Promise<Buffer> {
        return new Promise<Buffer>((resolve, reject): void => {
            const metadata: thrift.IThriftMessage = input.readMessageBegin();
            const fieldName: string = metadata.fieldName;
            const requestId: number = metadata.requestId;
            const methodName: string = "process_" + fieldName;
            switch (methodName) {
                case "process_getStruct": {
                    resolve(this.process_getStruct(requestId, input, output, context));
                    break;
                }
                case "process_getUnion": {
                    resolve(this.process_getUnion(requestId, input, output, context));
                    break;
                }
                case "process_getEnum": {
                    resolve(this.process_getEnum(requestId, input, output, context));
                    break;
                }
                default: {
                    input.skip(thrift.TType.STRUCT);
                    input.readMessageEnd();
                    const errMessage = "Unknown function " + fieldName;
                    const err = new thrift.TApplicationException(thrift.TApplicationExceptionType.UNKNOWN_METHOD, errMessage);
                    output.writeMessageBegin(fieldName, thrift.MessageType.EXCEPTION, requestId);
                    thrift.TApplicationExceptionCodec.encode(err, output);
                    output.writeMessageEnd();
                    resolve(output.flush());
                    break;
                }
            }
        });
    }
    public process_getStruct(requestId: number, input: thrift.TProtocol, output: thrift.TProtocol, context: Context): Promise<Buffer> {
        return new Promise<SharedStruct.ISharedStructArgs>((resolve, reject): void => {
            try {
                const args: IGetStruct__Args = GetStruct__ArgsCodec.decode(input);
                input.readMessageEnd();
                resolve(this._handler.getStruct(args.key, context));
            }
            catch (err) {
                reject(err);
            }
        }).then((data: SharedStruct.ISharedStructArgs): Buffer => {
            const result: IGetStruct__ResultArgs = { success: data };
            output.writeMessageBegin("getStruct", thrift.MessageType.REPLY, requestId);
            GetStruct__ResultCodec.encode(result, output);
            output.writeMessageEnd();
            return output.flush();
        }).catch((err: Error): Buffer => {
            const result: thrift.TApplicationException = new thrift.TApplicationException(thrift.TApplicationExceptionType.UNKNOWN, err.message);
            output.writeMessageBegin("getStruct", thrift.MessageType.EXCEPTION, requestId);
            thrift.TApplicationExceptionCodec.encode(result, output);
            output.writeMessageEnd();
            return output.flush();
        });
    }
    public process_getUnion(requestId: number, input: thrift.TProtocol, output: thrift.TProtocol, context: Context): Promise<Buffer> {
        return new Promise<SharedUnion.SharedUnionArgs>((resolve, reject): void => {
            try {
                const args: IGetUnion__Args = GetUnion__ArgsCodec.decode(input);
                input.readMessageEnd();
                resolve(this._handler.getUnion(args.index, context));
            }
            catch (err) {
                reject(err);
            }
        }).then((data: SharedUnion.SharedUnionArgs): Buffer => {
            const result: IGetUnion__ResultArgs = { success: data };
            output.writeMessageBegin("getUnion", thrift.MessageType.REPLY, requestId);
            GetUnion__ResultCodec.encode(result, output);
            output.writeMessageEnd();
            return output.flush();
        }).catch((err: Error): Buffer => {
            const result: thrift.TApplicationException = new thrift.TApplicationException(thrift.TApplicationExceptionType.UNKNOWN, err.message);
            output.writeMessageBegin("getUnion", thrift.MessageType.EXCEPTION, requestId);
            thrift.TApplicationExceptionCodec.encode(result, output);
            output.writeMessageEnd();
            return output.flush();
        });
    }
    public process_getEnum(requestId: number, input: thrift.TProtocol, output: thrift.TProtocol, context: Context): Promise<Buffer> {
        return new Promise<__CONSTANTS__.SharedEnum>((resolve, reject): void => {
            try {
                input.readMessageEnd();
                resolve(this._handler.getEnum(context));
            }
            catch (err) {
                reject(err);
            }
        }).then((data: __CONSTANTS__.SharedEnum): Buffer => {
            const result: IGetEnum__ResultArgs = { success: data };
            output.writeMessageBegin("getEnum", thrift.MessageType.REPLY, requestId);
            GetEnum__ResultCodec.encode(result, output);
            output.writeMessageEnd();
            return output.flush();
        }).catch((err: Error): Buffer => {
            const result: thrift.TApplicationException = new thrift.TApplicationException(thrift.TApplicationExceptionType.UNKNOWN, err.message);
            output.writeMessageBegin("getEnum", thrift.MessageType.EXCEPTION, requestId);
            thrift.TApplicationExceptionCodec.encode(result, output);
            output.writeMessageEnd();
            return output.flush();
        });
    }
}
