import { IncomingHttpHeaders } from 'http';
import { Readable } from 'stream';
import ParsedRequestBody from './IParsedRequestBody';

/**
 * Parser of an HTTP request body.
 */
export default interface IRequestBodyParser {
  /**
   * Determines whether this parser supports
   * a body accompanied by the given headers.
   */
  supports(headers: IncomingHttpHeaders): boolean;

  /**
   * Parses the given HTTP request body.
   */
  parse(body: Readable, headers: IncomingHttpHeaders): Promise<ParsedRequestBody>;
}
