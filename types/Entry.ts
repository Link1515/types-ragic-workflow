export interface Entry {
  /**
   * Get value of the field by field id. Subtable fields not included.
   */
  getFieldValue(fieldId: number): string;

  /**
   * Get the field id of a specified name. If there is more than one field of the same name, the first independent field id will be returned.
   */
  getFieldIdByName(fieldName: string): number;

  /**
   * Retrieve the key field id of this sheet.
   */
  getKeyFieldId(): number;

  /**
   * Get value of the field by field name. Subtable fields not included. If there is more than one field of the same name, the first field value will be returned.
   */
  getFieldValueByName(fieldName: string): string;

  /**
   * Get all the field values from a multiple select field as an array. Subtable fields not included.
   */
  getFieldValues(fieldId: number): string[];

  /**
   * Get root node ID of the entry.
   */
  getRootNodeId(): number;

  /**
   * Get root field id of the entry.
   */
  getRootfieldId(): number;

  /**
   * Get the size of the subtable, specified by the root field id of the subtable.
   */
  getSubtableSize(subtableRootfieldId: number): number;

  /**
   * Get the root node ID of the subtable, specified by its root field id and row number in the subtable.
   */
  getSubtableRootNodeId(subtableRootfieldId: number, rowNumber: number): number;

  /**
   * Get a JSON representation of the whole record.
   */
  getJSON(): string;

  /**
   * Set value to specified field. For subtable fields, you need to use setSubtableFieldValue();
   *
   * Set value to a field which is a multiple select field, parameter appendValue need to be true.
   */
  setFieldValue(fieldId: number, value: string, appendValue?: boolean): void;

  /**
   * For file upload or graphics field only. A file of the fileName you provided and the fileContent you provided will be created as a file upload and saved to the specified field. For subtable fields, you need to use setSubtableFieldFile();
   *
   * To avoid overwriting the original file in the file field, parameter appendValue need to be true.
   */
  setFieldFile(fieldId: number, fileName: string, fileContent: string, appendValue?: boolean): void;

  /**
   * Set value to subtable field, you can get parameter subtableRootNodeId by method getSubtableRootNodeId.
   *
   * Set value to subtable field which is a multiple select field, parameter appendValue need to be true.
   */
  setSubtableFieldValue(fieldId: number, subtableRootNodeId: number, value: string, appendValue?: boolean): void;

  /**
   * For file upload or graphics field in subtable only. A file of the fileName you provided and the fileContent you provided will be created as a file upload and saved to the specified field.
   *
   * To avoid overwriting the original file in the file field, parameter appendValue need to be true.
   */
  setSubtableFieldFile(fieldId: number, subtableRootNodeId: number, fileName: string, fileContent: string, appendValue?: boolean): void;

  /**
   * Delete the subtable row by its root field id and row number in the subtable.
   */
  deleteSubtableRowByRowNumber(subtableRootfieldId: number, rowNumber: number): void;

  /**
   * Delete every row in specified subtable.
   */
  deleteSubtableRowAll(subtableRootfieldId: number): void;

  /**
   * Delete subtable row by root field id and the root node ID of subtable.
   */
  deleteSubtableRow(subtableRootfieldId: number, subtableRootNodeId: number): void;

  /**
   * Load all loaded fields for every Link and Load configuration in the entry.
   */
  loadAllLinkAndLoad(): void;

  /**
   * Load all loaded fields for a specific Link and Load configuration in the entry.
   */
  loadLinkAndLoad(linkFieldId: number): void;

  /**
   * Load a single loaded field in the entry.
   */
  loadLinkAndLoadField(loadFieldId: number): void;

  /**
   * Recalculate every field that contains formula in the entry.
   */
  recalculateAllFormulas(): void;

  /**
   * Recalculate formula of specified field.
   *
   * Note: If two or more fields share the same fieldId, please use recalculateFormula(int fieldId, String cellName) instead.
   */
  recalculateFormula(fieldId: number): void;

  /**
   * Recalculates formula of a specified field using with cellName parameter determining the field’s cell location (such as A1, C2, H21, etc). This method is used on sheets with two or more fields with the same fieldId.
   */
  recalculateFormula(fieldId: number, cellName: string): void;

  /**
   * Load value of every field that is set with a default value, parameter user is predefined.
   */
  // TODO 補 User 型別
  loadAllDefaultValues(user: Object): void;

  /**
   * Load default value of specified field, parameter user is predefined.
   */
  // TODO 補 User 型別
  loadDefaultValue(fieldId: number, user: Object): void;

  /**
   * Lock the entry.
   */
  lock(): void;

  /**
   * Unlock the entry.
   */
  unlock(): void;

  /**
   * Check if the entry is locked.
   */
  isLocked(): boolean;

  /**
   * Save the entry.
   */
  save(): void;

  /**
   * Set if the entry need to create history.
   */
  setCreateHistory(createHistory: boolean): void;

  /**
   * Whether the entry is set to create history.
   */
  isCreateHistory(): boolean;

  /**
   * Set if executing the workflow (pre-workflow and post-workflow) of the entry is needed.
   */
  setIfExecuteWorkflow(executeWorkflow: boolean): void;

  /**
   * Set if checking not empty fields would be ignored.
   */
  setIgnoreEmptyCheck(ignoreEmptyCheck: boolean): void;

  /**
   * If this sheet is created by a subtable of another sheet, or is referenced by another sheet, which means, this sheet has the parent sheet, then you can call this method to set if you want to recalculate the parent sheet or not.
   */
  setRecalParentFormula(recalParentFormula: boolean): void;

  /**
   * Loaded values syncing will be triggered on the other sheet if that sheet links to this sheet, the source sheet. You should always add this method to the source sheet to trigger syncing on the other sheet, and make sure that “Keep loaded value sync with source” is enabled in the corresponding Link and Load configuration (please refer to this documentation).This method is only supported for action buttons. If you need to sync Link and Load fields in a post workflow, you can directly retrieve the entry that needs to be updated and use loadAllLinkAndLoad.
   */
  setIfDoLnls(b: boolean): void;

  /**
   * Checks whether the current field value retrieval mode is set to nodeId only.
   */
  isFieldValueModeIsNodeIdOnly(): boolean;
}
