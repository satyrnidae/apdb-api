import { IAppConfiguration } from '../module';

/**
 * A service which provides access to the main configuration settings.
 */
export interface IConfigurationService {
  get<E extends keyof IAppConfiguration>(key: E): Promise<IAppConfiguration[E]>;
}
