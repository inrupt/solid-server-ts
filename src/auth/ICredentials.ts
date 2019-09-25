export default interface ICredentials {
  // see https://github.com/inrupt/solid-server-ts/issues/5
  identity: string; // for instance webid claimed
  validations: Array<any>; // for instance [ true ] if authenticated, [] if not
}
