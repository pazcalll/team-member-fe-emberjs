import { setupTest } from 'team-management/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | team', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('team', {});
    assert.ok(model, 'model exists');
  });
});
