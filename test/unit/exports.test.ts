import {
  Conditions,
  PermissionSet,
} from '../../src/exports';

describe('exports', () => {
  it('includes a Conditions class', () => {
    expect(Conditions).toBeDefined();
  });
  it('includes a PermissionSet interface', () => {
    expect(PermissionSet).toBeDefined();
  });
});
