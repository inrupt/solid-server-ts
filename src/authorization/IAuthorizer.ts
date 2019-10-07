import IResourceIdentifier from '../ldp/IResourceIdentifier';
import Credentials from '../authentication/ICredentials';
import PermissionSet from '../permissions/PermissionSet';

/**
 * Determines the permissions of an agent.
 */
export default interface IAuthorizer {
  /**
   * Verifies whether the agent has the required permissions on the given target.
   */
  ensurePermissions(
    agent: Credentials,
    target: IResourceIdentifier,
    requiredPermissions: PermissionSet,
  ): Promise<boolean>;
}
