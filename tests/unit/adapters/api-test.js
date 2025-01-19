import { setupTest } from 'team-management/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Adapter | api', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const adapter = this.owner.lookup('adapter:api');
    assert.ok(adapter, 'adapter exists');
  });
});
