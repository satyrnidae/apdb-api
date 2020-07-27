import { Command } from './command';
import { EventHandler } from './event-handler';
import { ModuleInfo } from './module-info';
import { Initializeable } from '../utils';

/**
 * The base class for a module implementation.
 */
export abstract class Module implements Initializeable {
    /**
     * A list of commands which are provided by this module.
     */
    public readonly commands: Command[];

    /**
     * A list of events which should be registered to this module.
     */
    public readonly events: EventHandler[];

    /**
     * @param moduleInfo The parsed information from the associated module info file.
     */
    constructor(public readonly moduleInfo: ModuleInfo) { }

    public abstract async preInitialize() : Promise<void>;

    public abstract async initialize() : Promise<void>;

    public abstract async postInitialize() : Promise<void>;

    /**
     * Registers any dependencies to the IOC container
     */
    public abstract async registerDependencies(): Promise<void>;
}
