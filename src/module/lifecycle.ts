import { Initializeable } from "../utils";

/**
 * Main app lifecycle interface
 */
export interface Lifecycle extends Initializeable {

    /**
     * The main run method
     */
    run(): Promise<any>;
}
