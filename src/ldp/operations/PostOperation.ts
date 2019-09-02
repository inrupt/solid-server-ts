import ResourceStore from '../IResourceStore';
import ResourceIdentifier from '../IResourceIdentifier';
import Representation from '../IRepresentation';
import Conditions from '../Conditions';
import IRepresentationPreferences from '../IRepresentationPreferences';
import LdpOperation from './LdpOperation';
import PermissionSet from '../../permissions/PermissionSet';

/**
 * Performs an LDP POST operation.
 */
export default class PostOperation extends LdpOperation {
  constructor(settings:
              { store: ResourceStore,
                target: ResourceIdentifier,
                body: Representation,
                preferences: IRepresentationPreferences }) {
    super(settings);
  }

  get requiredPermissions(): PermissionSet { return PermissionSet.APPEND_ONLY; }

  public async execute(): Promise<ResourceIdentifier> {
    return this.store.addResource(this.target, this.requestBody as Representation, {} as Conditions);
  }
}
