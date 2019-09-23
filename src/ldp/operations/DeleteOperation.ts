import LdpOperation from './LdpOperation';
import ResourceStore from '../IResourceStore';
import ResourceIdentifier from '../IResourceIdentifier';
import PermissionSet from '../../permissions/PermissionSet';
import Conditions from '../Conditions';
import IRepresentationPreferences from '../IRepresentationPreferences';
import ResponseDescription from '../../http/ResponseDescription';

/**
 * Performs an LDP DELETE operation.
 */
export default class DeleteOperation extends LdpOperation {
  constructor(settings:
              { store: ResourceStore,
                target: ResourceIdentifier,
                preferences: IRepresentationPreferences,
              }) {
    super(settings);
  }

  get requiredPermissions(): PermissionSet { return PermissionSet.WRITE_ONLY; }

  public async execute(): Promise<ResponseDescription> {
    await this.store.deleteResource(this.target, {} as Conditions);
    return new ResponseDescription();
  }
}
