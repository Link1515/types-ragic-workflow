export interface Account {
  /**
   * Get the full name of a user specified by the e-mail address.
   */
  getUserName(email: string): string;

  /**
   * Get the email address for the specified user name.
   */
  getUserEmail(userName: string): string;

  /**
   * Purge all account-related cache when the script and reloads the page finishes executing.
   */
  reset(): void;

  /**
   * Get time zone offset of this account in milliseconds.
   */
  getTimeZoneOffset(): number;

  /**
   * Get time zone offset of this account in hours.
   */
  getTimeZoneOffsetInHours(): number;
}
