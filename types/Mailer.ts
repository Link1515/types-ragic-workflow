export interface Mailer {
  /**
   * Compose an e-mail message for sending out. The to and cc parameter can contain multiple e-mail addresses. They just need to be separated by commas.
   */
  compose(to: string, cc: string, from: string, fromPersonal: string, subject: string, content: string): void;

  /**
   * Send out the message that was just composed.
   */
  send(): void;

  /**
   * Send out the message that was just composed asynchronously. Note that sendAsync can only be called once per script execution.
   */
  sendAsync(): void;

  /**
   * Attach a file to the message. The URL should be a full URL with https://
   */
  attach(url: string): void;

  /**
   * Set the BCC (blind carbon copy) recipients. You can specify multiple BCC recipients by separating the email addresses with commas.
   */
  setBcc(email: string): void;

  /**
   * Set if the content should not be converted to HTML. Set this to true when your content is already in HTML.
   */
  setSendRaw(b: boolean): void;

  /**
   * Send a mobile app notification to this user if the user has installed a Ragic iOS app or Android app.
   *
   * The user will be redirected to the specified record when clicking on this notification. "pathToForm" should be in the format "/forms/1", not including the account name, including the tab folder and sheet index.
   */
  sendAppNotification(email: string, message: string, pathToForm?: string, nodeId?: number): void;
}
