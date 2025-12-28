export interface Approval {
  /**
   * Post-workflow only. wfSigner is an array with specific JSON format objects in it.
   *
   * ```
   * [
   *   {
   *     "stepIndex": "0",
   *     "approver": "approver@example.com",
   *     "stepName": "START"
   *   }
   * ]
   * ```
   * Note that wfSigner should satisfy the approval you set in design mode. Say, if there is only one candidate "HR00@gmail.com" in step 2 in design mode, you should give a json with approver: HR00@gmail.com and stepIndex: 1 .
   */
  create(wfSigner: string): void;

  /**
   * Post-workflow only. Cancel the approval in the entry.
   */
  cancel(): void;
}
