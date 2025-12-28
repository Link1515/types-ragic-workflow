export interface Response {
  /**
   * Gets the status of the response. Either SUCCESS, WARN, CONFIRM, INVALID, ERROR.
   */
  getStatus(): Status;

  /**
   * Sets the status of the response. Either SUCCESS, WARN, CONFIRM, INVALID, ERROR.
   */
  setStatus(status: Status): void;

  /**
   * Sets a message for display when script executed. This function can be called several times and all messages that have been set will show at the same time.
   */
  setMessage(plainMessage: string): void;

  /**
   * Returns the number of messages that has been set.
   */
  numOfMessages(): number;

  /**
   * Installed sheet scope only. Redirects the user to the URL specified after saving the edit.
   */
  setOpenURL(url: string): void;

  /**
   * Configure whether the browser opens a new tab when opening an URL. Defaults to true.
   */
  setOpenURLInNewTab(b: boolean): void;
}

type Status = 'SUCCESS' | 'WARN' | 'CONFIRM' | 'INVALID' | 'ERROR';
