import IResourceIdentifier from '../IResourceIdentifier';
import IRepresentation from '../IRepresentation';
import PermissionSet from '../../permissions/PermissionSet';
import ResponseDescription from '../ResponseDescription';
import IRepresentationPreferences from '../IRepresentationPreferences';

/**
 * Interface for operations.
 */
export default interface IOperation {
  target: IResourceIdentifier;
  requestBody?: IRepresentation;
  preferences: IRepresentationPreferences;
  requiredPermissions: PermissionSet;
  execute: () => Promise<ResponseDescription>;
}
