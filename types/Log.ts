export interface Log {
  /**
   * Display the console block
   */
  setToConsole(b: boolean): void;

  /**
   * Print a message to the console
   */
  println(message: string): void;
}
