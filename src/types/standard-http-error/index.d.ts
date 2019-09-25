declare module 'standard-http-error' {
  class HttpError extends Error {
    constructor(status: number, properties?: object);

    // the following list is not intended to be complete,
    // we'll add to it as needed.
    static BAD_REQUEST: number;
    static UNAUTHORIZED: number;
    static FORBIDDEN: number;
    static METHOD_NOT_ALLOWED: number;
    static UNSUPPORTED_MEDIA_TYPE: number;
  }
  export = HttpError;
}
