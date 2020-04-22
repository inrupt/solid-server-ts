import ResourceStore from '../../storage/IResourceStore';
import ResourceIdentifier from '../IResourceIdentifier';
import Representation from '../IRepresentation';
import IRepresentationPreferences from '../IRepresentationPreferences';
import LdpOperation from './LdpOperation';
import PermissionSet from '../../permissions/PermissionSet';
import { IResponseDescription } from '../../exports';
import { ResultType } from '../IResponseDescription';

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

  // TODO: Implement
  public async execute(): Promise<IResponseDescription> {
    // return this.store.addResource(this.target, this.requestBody as Representation, {} as Conditions);
    return {
      isContainer: false,
      resultType: ResultType.NotFound
    }
  }
}
