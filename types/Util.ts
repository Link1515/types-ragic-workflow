export interface Util {
  /**
   * Calls an URL with GET method.
   */
  getURL(urlstring: string): string;

  /**
   * Calls an URL with POST method.
   */
  postURL(urlstring: string, postBody: string): string;

  /**
   * Calls an URL with DELETE method.
   */
  deleteURL(urlstring: string): string;

  /**
   * Calls an URL with PUT method.
   */
  putURL(urlstring: string, putBody: string): string;

  /**
   * Downloads the file returned by fileUrl to the upload folder in the database.
   *
   * Return value of the method: The filename of the downloaded file.
   */
  downloadFile(fileUrl: string, postBody?: string): string;

  /**
   * Sets an HTTP header that will be used in subsequent URL calls.
   */
  setHeader(name: string, value: string): void;

  /**
   * Ignore SSL certificate validation for your current HTTP request.
   */
  ignoreSSL(): void;

  /**
   * Removes an HTTP header from being used in subsequent URL calls.
   */
  removeHeader(name: string): void;

  /**
   * Records a string text log message in the workflow log that you can find in the database maintenance page.
   */
  logWorkflowError(text: string): void;

  /**
   * Downloads a file from the source URL, uploads it to the destination URL, and returns the filename.
   */
  postFile(sourceFileUrl: string, destinationUrl: string): void;
}
