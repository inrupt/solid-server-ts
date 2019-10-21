import LdpOperation from './LdpOperation';
import ResourceStore from '../../storage/IResourceStore';
import ResourceIdentifier from '../IResourceIdentifier';
import PermissionSet from '../../permissions/PermissionSet';
import IRepresentationPreferences from '../IRepresentationPreferences';
import IResponseDescription, { ResultType } from '../IResponseDescription';

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

  // TODO: Implement
  async execute(): Promise<IResponseDescription> {
    return {
      isContainer: false,
      resultType: ResultType.NotFound
    }
  }
}
