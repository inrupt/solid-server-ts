import ResourceStore from '../../storage/IResourceStore';
import ResourceIdentifier from '../IResourceIdentifier';
import IRepresentationPreferences from '../IRepresentationPreferences';
import LdpOperation from './LdpOperation';
import { IResponseDescription } from '../../exports';
import { ResultType } from '../IResponseDescription';

/**
 * Performs an LDP OPTIONS operation.
 */
export default class OptionsOperation extends LdpOperation {
  constructor(settings:
              { store: ResourceStore,
                target: ResourceIdentifier,
                preferences: IRepresentationPreferences }) {
    super(settings);
  }

  // TODO: Implement
  async execute(): Promise<IResponseDescription> {
    return {
      isContainer: false,
      resultType: ResultType.NotFound
    }
  }
}
