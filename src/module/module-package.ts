const APDB_MODULE: unique symbol = Symbol('apdb-module');

export interface IModulePackage {
  dependencies: any;
  peerDependencies: any;
  optionalDependencies: any;
  devDependencies: any;
  [APDB_MODULE]: IModulePackageDetails;
  author: string,
  contributors: string[],
  main: string,
  description: string,
  homepage: string,

  version: string
}

export interface IModulePackageDetails {
  name: string;
  id: string;
  dependsOn: string[];
}
