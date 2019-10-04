import ResourceStore from '../../storage/IResourceStore';
import ResourceIdentifier from '../IResourceIdentifier';
import IRepresentationPreferences from '../IRepresentationPreferences';
import LdpOperation from './LdpOperation';
import PermissionSet from '../../permissions/PermissionSet';

/**
 * Performs an LDP GET operation.
 */
export default class GetOperation extends LdpOperation {
  constructor(settings:
              { store: ResourceStore,
                target: ResourceIdentifier,
                preferences: IRepresentationPreferences }) {
    super(settings);
  }

  get requiredPermissions(): PermissionSet { return PermissionSet.READ_ONLY; }
}
