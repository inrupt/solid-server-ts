import PermissionSet from '../../permissions/PermissionSet';
import IOperation from './IOperation';
import ResponseDescription from '../ResponseDescription';
import IRepresentation from '../IRepresentation';
import IResourceIdentifier from '../IResourceIdentifier';
import IRepresentationPreferences from '../IRepresentationPreferences';
import IResourceStore from '../../storage/IResourceStore';

/**
 * Base class for LDP operations.
 */
export default abstract class LdpOperation implements IOperation {
  public target: IResourceIdentifier;
  public requestBody?: IRepresentation;
  public preferences: IRepresentationPreferences;

  protected store: IResourceStore;

  constructor({ store, target, body, preferences }: {
    store: IResourceStore,
    target: IResourceIdentifier,
    body?: IRepresentation,
    preferences: IRepresentationPreferences,
  }) {
    this.store = store;
    this.target = target;
    this.requestBody = body;
    this.preferences = preferences;
  }

  get requiredPermissions(): PermissionSet { return PermissionSet.READ_ONLY; }

  public async execute(): Promise<ResponseDescription> {
    return new ResponseDescription();
  }
}
