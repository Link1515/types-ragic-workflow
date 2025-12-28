import type { Entry } from './Entry';

export interface Param {
  /**
   * Post-workflow only. Returns the record that was just created or updated.
   */
  getUpdatedEntry(): Entry;

  /**
   * Returns the node ID (int) of given field after new value being written.
   */
  getNewNodeId(fieldId: number): number;

  /**
   * Returns the node ID (int) of given field before new value being written.
   */
  getOldNodeId(fieldId: number): number;

  /**
   * Returns the value of given field after new value being written.
   */
  getNewValue(fieldId: number): string;

  /**
   * Returns the value of given field before new value being written.
   */
  getOldValue(fieldId: number): string;

  /**
   * Similar to getNewValue, but can access multiple values at the same time, which is useful when dealing with multiple-selection fields.
   */
  getNewValues(fieldId: number): string[];

  /**
   * Similar to getOldValue, but can access multiple values at the same time, which is useful when dealing with multiple-selection fields.
   */
  getOldValues(fieldId: number): string[];

  /**
   * Returns a list of params that can manipulate each record in the subtable.
   */
  getSubtableEntry(fieldId: number): SubtableEntryList;

  /**
   * Return if the entry is newly created.
   */
  isCreateNew(): boolean;
}

interface SubtableEntryList {
  toArray(): Param[];
}
