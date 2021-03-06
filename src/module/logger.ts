import { LogLevel } from '@satyrnidae/apdb-utils';

const DATE_FORMAT = new Intl.DateTimeFormat('en');

/**
 * Logging utility class which formats and writes to the output.
 */
export class Logger {

  constructor(private identifier: string,
              private logLevel: keyof typeof LogLevel = "info") { }

  public getId(): string {
    return this.identifier;
  }

  public setLogLevel(logLevel: keyof typeof LogLevel): void {
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

  private write(level: keyof typeof LogLevel, ...data: any[]): void {
    if (this.shouldLog(level)) {
      console.log(`[${new Date().toISOString()}] [${level.toUpperCase()}] [${this.identifier}] ${data}`);

      if (level === 'trace') {
        const stack: string = new Error().stack;
        console.log(`${stack}`);
      }
    }
  }

  private shouldLog(level: keyof typeof LogLevel): boolean {
    return LogLevel[this.logLevel] <= LogLevel[level];
  }
}
