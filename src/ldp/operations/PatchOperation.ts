import ResourceStore from '../IResourceStore';
import ResourceIdentifier from '../IResourceIdentifier';
import Conditions from '../Conditions';
import LdpOperation from './LdpOperation';
import IRepresentationPreferences from '../IRepresentationPreferences';
import IPatch from '../IPatch';

/**
 * Performs an LDP PATCH operation.
 */
export default class PatchOperation extends LdpOperation {
  constructor(settings:
              { store: ResourceStore,
                target: ResourceIdentifier,
                body: IPatch,
                preferences: IRepresentationPreferences }) {
    super(settings);
  }

  public async execute(): Promise<ResourceIdentifier> {
    await this.store.modifyResource(this.target, this.requestBody as IPatch, {} as Conditions);
    return this.target;
  }
}
