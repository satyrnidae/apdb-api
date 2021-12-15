import { OneOrMany } from "@satyrnidae/apdb-utils";
import { PermissionResolvable } from "discord.js";

const APDB_MODULE: unique symbol = Symbol('apdb-module');

type Person = string | {
  name: string,
  email?: string,
  url?: string
};

type Funding = OneOrMany<string | { type: string, url: string }>;

type Bugs = {
  url?: string,
  email?: string
}

export interface IModulePackage {
  name: string;
  dependencies: any;
  peerDependencies: any;
  optionalDependencies: any;
  devDependencies: any;
  [APDB_MODULE]: IModulePackageDetails;
  author?: Person,
  contributors?: Person[],
  main: string,
  description: string,
  homepage: string,
  version: string,
  bugs?: Bugs,
  funding?: Funding
}

export interface IModulePackageDetails {
  name: string;
  id: string;
  thumbnail?: string;
  dependsOn: string[];
  permissions: PermissionResolvable;
}
