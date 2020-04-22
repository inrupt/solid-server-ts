import ResourceStore from '../../storage/IResourceStore';
import ResourceIdentifier from '../IResourceIdentifier';
import Representation from '../IRepresentation';
import LdpOperation from './LdpOperation';
import IRepresentationPreferences from '../IRepresentationPreferences';
import PermissionSet from '../../permissions/PermissionSet';
import { IResponseDescription } from '../../exports';
import { ResultType } from '../IResponseDescription';

/**
 * Performs an LDP PUT operation.
 */
export default class PutOperation extends LdpOperation {
  constructor(settings:
              { store: ResourceStore,
                target: ResourceIdentifier,
                body: Representation,
                preferences: IRepresentationPreferences }) {
    super(settings);
  }

  get requiredPermissions(): PermissionSet { return PermissionSet.WRITE_ONLY; }

  public async execute(): Promise<IResponseDescription> {
    // await this.store.setRepresentation(this.target, this.requestBody as Representation, {} as Conditions);
    // return this.target;
    return {
      isContainer: false,
      resultType: ResultType.NotFound
    }
  }
}
