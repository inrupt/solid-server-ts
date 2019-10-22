import PermissionSet from '../../permissions/PermissionSet';
import IOperation from './IOperation';
import ResponseDescription from '../ResponseDescription';
import IRepresentation from '../IRepresentation';
import IResourceIdentifier from '../IResourceIdentifier';
import IRepresentationPreferences from '../IRepresentationPreferences';
import IResourceStore from '../../storage/IResourceStore';
import IParsedRequestBody from '../IParsedRequestBody';

/**
 * Base class for LDP operations.
 */
export default abstract class LdpOperation implements IOperation {
  public target: IResourceIdentifier;
  public requestBody?: IRepresentation;
  public preferences: IRepresentationPreferences;

  protected store: IResourceStore;

  constructor({ store, target, body, preferences }: {
    store: IResourceStore,
    target: IResourceIdentifier,
    body?: IRepresentation,
    preferences: IRepresentationPreferences,
  }) {
    this.store = store;
    this.target = target;
    this.requestBody = body;
    this.preferences = preferences;
  }

  get body(): IRepresentation | undefined { return this.requestBody }

  set body(body: IRepresentation | undefined) { this.requestBody = body }

  get parsedBody(): IParsedRequestBody | undefined { return this.parsedBody }

  set parsedBody(parsedBody: IParsedRequestBody | undefined) { this.parsedBody = parsedBody }

  get acceptsBody(): boolean { return false }

  get acceptsParsedBody(): boolean { return false }

  get requiredPermissions(): PermissionSet { return PermissionSet.READ_ONLY; }

  public async execute(): Promise<ResponseDescription> {
    return new ResponseDescription();
  }
}
