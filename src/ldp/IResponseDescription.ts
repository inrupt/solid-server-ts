import { IRepresentation } from '../exports';

export enum ResultType {
  CouldNotParse,
  AccessDenied,
  PreconditionFailed,
  PreconditionRequired,
  NotModified,
  NotFound,
  QuotaExceeded,
  OkayWithBody,
  OkayWithoutBody,
  Created,
  MethodNotAllowed,
  InternalServerError,
}

export default interface IResponseDescription {
  resourcesChanged?: URL[];
  resultType: ResultType;
  resourceData?: IRepresentation;
  createdLocation?: URL;
  isContainer: boolean;
}
