import { Logger } from "../module";

export interface ILoggingService {

  getLogger(loggerId: string): Logger;

}
