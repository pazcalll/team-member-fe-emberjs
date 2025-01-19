import { setupTest } from 'team-management/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Adapter | team', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const adapter = this.owner.lookup('adapter:team');
    assert.ok(adapter, 'adapter exists');
  });
});
