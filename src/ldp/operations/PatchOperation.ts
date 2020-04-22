import ResourceStore from '../../storage/IResourceStore';
import IResourceIdentifier from '../IResourceIdentifier';
import LdpOperation from './LdpOperation';
import IRepresentationPreferences from '../IRepresentationPreferences';
import IPatch from '../IPatch';
import { IResponseDescription } from '../../exports';
import { ResultType } from '../IResponseDescription';

/**
 * Performs an LDP PATCH operation.
 */
export default class PatchOperation extends LdpOperation {
  constructor(settings:
              { store: ResourceStore,
                target: IResourceIdentifier,
                body: IPatch,
                preferences: IRepresentationPreferences }) {
    super(settings);
  }

  // TODO: implement
  public async execute(): Promise<IResponseDescription> {
    // await this.store.modifyResource(this.target, this.requestBody as IPatch, {} as Conditions);
    // return this.target;
    return {
      isContainer: false,
      resultType: ResultType.NotFound
    }
  }
}
