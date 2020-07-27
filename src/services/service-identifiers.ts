/**
 * Symbols for all of the services which are available from the IOC container.
 */
const ServiceIdentifiers = {
    /**
     * Symbol for the configuration service
     */
    Configuration: Symbol.for('apdb-api/configuration-service'),

    /**
     * Symbol for the client service
     */
    Client: Symbol.for('apdb-api/client-service'),

    /**
     * Symbol for the command service
     */
    Command: Symbol.for('apdb-api/command-service'),

    /**
     * Symbol for the data service
     */
    Data: Symbol.for('apdb-api/data-service'),

    /**
     * Symbol for the event service
     */
    Event: Symbol.for('apdb-api/event-service'),

    /**
     * Symbol for the logging service
     */
    Logging: Symbol.for('apdb-api/logging-service'),

    /**
     * Symbol for the module service
     */
    Module: Symbol.for('apdb-api/module-service')
};

export { ServiceIdentifiers };
