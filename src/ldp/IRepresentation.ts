import * as Stream from 'stream';
import IRepresentationMetadata from './IRepresentationMetadata';

/**
 * A representation of a resource.
 */
export default interface IRepresentation {
  data: Stream.Readable;
  metadata: IRepresentationMetadata;
}
