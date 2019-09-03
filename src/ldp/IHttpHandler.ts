import * as http from 'http';

export default interface IHttpHandler {
  canHandle: (httpReq: http.IncomingMessage) => Promise<boolean>;
  handle: (httpReq: http.IncomingMessage, httpRes: http.ServerResponse) => void;
  // ...
}
