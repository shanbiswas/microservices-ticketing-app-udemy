/**
 * Subclassing errors are explained in Udemy lecture :- Section 7
 */

import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = 'Error connecting to DB';
  constructor() {
    super('Error connecting to Database');

    // only bcz we are extending a built-in class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [
      { message: this.reason }
    ]
  }
}

