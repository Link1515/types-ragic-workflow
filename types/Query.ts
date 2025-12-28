import type { Entry } from './Entry';

export interface Query {
  /**
   * Get first entry when iterate over the query
   */
  getAPIResult(): Entry;

  /**
   * Retrieve the records from the query. Use the next() method to get the next record, and with a while loop, you can retrieve the records one by one.
   */
  getAPIResultsFull(): Results<Entry>;

  /**
   * Get array of entries of the query.
   */
  getAPIResultList(): Entry[];

  /**
   * Get entry by node ID.
   */
  getAPIEntry(rootNodeId: number): Entry;

  /**
   * Retrieve the key field id of the sheet this query is on.
   */
  getKeyFieldId(): number;

  /**
   * Get the field id of a specified name. If there is more than one field of the same name, the first independent field id will be returned.
   */
  getFieldIdByName(fieldName: string): number;

  /**
   * Insert a new entry to the query, and the method returns the new entry.
   */
  insertAPIEntry(): Entry;

  /**
   * Filtering entries by specified condition.
   */
  addFilter(fieldId: number, operand: string, value: string): void;

  /**
   * Set if ignore the fixed filter from target sheet.
   */
  setIfIgnoreFixedFilter(ifIgnoreFixedFilter: boolean): void;

  /**
   * Sort entries of the query by specified field field id and order direction, parameter orderDir is set to 1 if sort ascending, set to 2 if sort descending, set to 3 if secondary sort ascending, and set to 4 if secondary sort descending.
   */
  setOrder(orderField: number, orderDir: number): void;

  /**
   * Delete entry by node ID.
   */
  deleteEntry(nodeId: number): void;

  /**
   * Delete entry by node ID to recycle bin.
   */
  deleteEntryToRecycleBin(nodeId: number): void;

  /**
   * By default ScriptAPIQuery returns 1000 records per query, you can use setLimitSize to change the number of records returned per query.
   *
   * However, we do not recommend returning too many records per query because it may take too much memory and have bad performance implications. We recommend using the next method setLimitFrom to do paging instead.
   */
  setLimitSize(limitSize: number): void;

  /**
   * This method is for paging through all the records on a ScriptAPIQuery. Setting a limitFrom will tell ScriptAPIQuery to start returning records from an offset so that you can page through all the records of ScriptAPIQuery because ScriptAPIQuery returns 1000 records per query by default. You should check for the next page if the number of records returned equals the returned list size.
   */
  setLimitFrom(limitFrom: number): void;

  /**
   * When set to false, the query will retrieve the user's email for select user fields instead of the user's user name.
   */
  setGetUserNameAsSelectUserValue(b: boolean): void;

  /**
   * Sets the field value retrieval mode. When enabled (true), field values retrieved via the API will return the nodeId of the linked record, instead of the displayed value. When disabled (false), the API will return the actual displayed value of the field (such as text, number, or date).
   */
  setFieldValueModeAsNodeIdOnly(enabled: boolean): void;

  /**
   * Configures how field values are retrieved when loading default values.
   *
   * If you find that field default values do not behave the same as on the form page, or are not displayed as expected when calling loadAllDefaultValues or loadDefaultValue, you can use this method to change how field values are evaluated.
   *
   * When enabled (true), field values retrieved through the API will include both the related record’s nodeId and the display value. During default value loading, the system can then determine whether a field should load its default value based on the presence of a nodeId, rather than relying on whether the field’s display value is empty or whether data has already been saved.
   *
   * When disabled (false), only the actual field value (such as text, numbers, or dates) is returned when retrieving field values.
   */
  setFieldValueModeAsNodeIdAndValue(enabled: boolean): void;
}

interface Results<T> {
  next(): T | null;
}
