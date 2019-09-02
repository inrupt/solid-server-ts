import ResourceStore from '../IResourceStore';
import ResourceIdentifier from '../IResourceIdentifier';
import LdpOperation from './LdpOperation';
import IRepresentationPreferences from '../IRepresentationPreferences';
import PermissionSet from '../../permissions/PermissionSet';

/**
 * Performs an LDP HEAD operation.
 */
export default class HeadOperation extends LdpOperation {
  constructor(settings:
              { store: ResourceStore,
                target: ResourceIdentifier,
                preferences: IRepresentationPreferences }) {
    super(settings);
  }

  get requiredPermissions(): PermissionSet { return PermissionSet.READ_ONLY; }
}
