import MethodExtractor from '../../../src/ldp/MethodExtractor';

import { createRequest } from 'node-mocks-http';

describe('A MethodExtractor instance', () => {
  let extractor: MethodExtractor;
  beforeAll(() => { extractor = new MethodExtractor(); });

  it('defaults to GET', () => {
    const request: any = createRequest();
    // see https://github.com/howardabrams/node-mocks-http/pull/195
    request.method = undefined;
    expect(extractor.extract(request)).toEqual('GET');
  });

  it('extracts the method from the method property', () => {
    const request = createRequest({ method: 'POST' });
    expect(extractor.extract(request)).toEqual('POST');
  });
});
