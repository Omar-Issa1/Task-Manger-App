export class customAPIError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}
export const createCustomError = (msg, status) => {
  return new customAPIError(msg, status);
};
