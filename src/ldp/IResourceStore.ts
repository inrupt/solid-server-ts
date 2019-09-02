import Patch from './IPatch';
import IRepresentation from './IRepresentation';
import IRepresentationPreferences from './IRepresentationPreferences';
import Conditions from './Conditions';
import IResourceIdentifier from './IResourceIdentifier';

export default interface IResourceStore {
  /**
   * Obtains a representation of the given resource.
   *
   * @param identifier - The identifier of the resource
   *
   * @returns - A representation of the resource
   */
  getRepresentation(identifier: IResourceIdentifier,
                    representationPreferences: IRepresentationPreferences,
                    conditions: Conditions): Promise<IRepresentation>;

  /**
   * Adds a resource to the container.
   *
   * @param container - The identifier of the container
   * @param representation - A representation of the resource
   *
   * @returns - The identifier of the appended resource
   */
  addResource(container: IResourceIdentifier,
              representation: IRepresentation,
              conditions: Conditions): Promise<IResourceIdentifier>;

  /**
   * Sets or replaces the representation of a resource.
   *
   * @param identifier - The identifier of the resource
   * @param representation - A representation of the resource
   */
  setRepresentation(identifier: IResourceIdentifier,
                    representation: IRepresentation,
                    conditions: Conditions): Promise<void>;

  /**
   * Deletes the given resource.
   *
   * @param identifier - The identifier of the resource
   * @param representation - A representation of the resource
   */
  deleteResource(identifier: IResourceIdentifier,
                 conditions: Conditions): Promise<void>;

  /**
   * Modifies the given resource.
   *
   * @param identifier - The identifier of the resource
   * @param patch - The patch to be applied to the resource
   */
  modifyResource(identifier: IResourceIdentifier, patch: Patch,
                 conditions: Conditions): Promise<void>;
}
