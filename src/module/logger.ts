import { LogLevel } from '@satyrnidae/apdb-utils';

export class Logger {
  constructor(private identifier: string,
              private logLevel: LogLevel = "info") { }

  static logLevelValue(level: LogLevel): number {
    return  level === "trace" ? 0 :
            level === "debug" ? 1 :
            level === "info"  ? 2 :
            level === "warn"  ? 3 :
            level === "error" ? 4 :
                               -1;
  }

  public getId(): string {
    return this.identifier;
  }

  public setLogLevel(logLevel: LogLevel): void {
    this.logLevel = logLevel;
  }

  public debug(...data: any[]): void {
    this.write("debug", ...data);
  }

  public info(...data: any[]): void {
    this.write("info", ...data);
  }

  public warn(...data: any[]): void {
    this.write("warn", data);
  }

  public error(...data: any[]): void {
    this.write("error", ...data);
  }

  public trace(...data: any[]): void {
    this.write("trace", ...data);
  }

  private write(level: LogLevel, ...data: any[]): void {
    if (this.shouldLog(level)) {
      console[level](`[${this.identifier}] [${level.toUpperCase()}] ${data}`);
    }
  }

  private shouldLog(level: LogLevel): boolean {
    return Logger.logLevelValue(this.logLevel) <= Logger.logLevelValue(level);
  }
}
