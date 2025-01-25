import { module, test } from "qunit";
import { setupTest } from "team-management/tests/helpers";

module("Unit | Service | card-form-fields", function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test("it exists", function (assert) {
    let service = this.owner.lookup("service:card-form-fields");
    assert.ok(service);
  });
});
