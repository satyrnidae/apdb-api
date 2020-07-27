export type ReadDirOptions = {
  encoding: BufferEncoding;
  withFileTypes?: false;
} | 'ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'latin1' | 'binary' | 'hex';

export type ReadFileOptions = {
  encoding?: string;
  flag?: string
};

export type EventHandlerFunction = (...args: any[]) => void;

export type Reject = (reason?: any) => void;

export type RepositoryTarget<T> = string | Function | (new () => T) | import('typeorm').EntitySchema<T>;

export type Resolve<T> = (value?: T | PromiseLike<T>) => void;

export type OneOrMany<T> = T | T[];
