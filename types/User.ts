export interface User {
  /**
   * Get user's email address.
   */
  getEmail(): string;

  /**
   * Get user's full name.
   */
  getUserName(): string;

  /**
   * Returns if the user is in this group with the name of groupName.
   */
  isInGroup(groupName: string): boolean;
}
