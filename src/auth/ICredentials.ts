export default interface ICredentials {
  // see https://github.com/inrupt/solid-server-ts/issues/5
  identity: string; // for instance webid claimed
  validations: string[]; // for instance [ 'https://oidc.example.com/' ] if authenticated, [] if not
}
