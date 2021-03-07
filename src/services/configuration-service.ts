/**
 * A service which provides access to the main configuration settings.
 */
export interface IConfigurationService<T> {
  get<E extends keyof T>(key: E): Promise<T[E]>;

  loadConfig(): Promise<T>;
}
