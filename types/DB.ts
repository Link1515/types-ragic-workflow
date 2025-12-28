export interface DB {
  /**
   * Retrieves the database name.
   */
  getApname(): string;

  /**
   * Retrieves the path of the form.
   */
  getPath(): string;

  /**
   * Retrieves the sheet index of the form.
   */
  getSheetIndex(): number;

  /**
   * Deletes records older than the specified number of days. For example, if today is 2025/07/10 and daysOld is 1, it will delete records created before 2025/07/09 00:00:00. This method deletes up to 500 records.
   *
   * If hasTime is true, the comparison is based on the current time of execution. For example, if the execution time is 2025/07/10 21:00:00 and daysOld is 1, it will delete records created before 2025/07/09 21:00:00.
   */
  deleteOldRecords(pathToForm: string, daysOld: number, hasTime?: boolean): void;

  /**
   * Recalculates fields for all records in the specified form.
   *
   * - If only `pathToForm` is provided, recalculates **all fields** for all records.
   * - If `fieldIds` are provided (from the 2nd argument onwards), recalculates **only the specified fields** for all records. Multiple FieldIds can be passed as comma-separated arguments.
   */
  recalculateAll(pathToForm: string, ...fieldIds: number[]): void;

  /**
   * Synchronizes all Link and Load fields in the specified form.
   */
  loadLinkAndLoadAll(pathToForm: string): void;

  /**
   * Set to True to display the execution time in the "Sheet Workflow Formula Recalculation Execution Time Log" which records the time taken to recalculate a form using the db.recalculateAll() formula..
   */
  setLogRecalcCostTime(b: boolean): void;
}
