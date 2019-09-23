import Representation from './IRepresentation';
import IRepresentation from './IRepresentation';

/**
 * A patch describes modifications to a resource.
 */
export default interface IPatch extends IRepresentation  {
  apply(representation: Representation): void;
}
