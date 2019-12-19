declare module 'xmlhttprequest';

type EventHandlerFunction = (...args: any[]) => void;

type ReadDirOptions = {
    encoding: BufferEncoding;
    withFileTypes?: false;
} | 'ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'latin1' | 'binary' | 'hex';

type ReadFileOptions = {
    encoding?: string;
    flag?: string
};

type Reject = (reason?: any) => void;

type RepositoryTarget<T> = string | Function | (new () => T) | import('typeorm').EntitySchema<T>;

type Resolve<T> = (value?: T | PromiseLike<T>) => void;

type UnionArray<T> = T | T[];
