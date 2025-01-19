import { setupTest } from 'team-management/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Transform | team', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const transform = this.owner.lookup('transform:team');
    assert.ok(transform, 'transform exists');
  });
});
