import { setupTest } from "team-management/tests/helpers";
import { module, test } from "qunit";

module("Unit | Model | member", function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test("it exists", function (assert) {
    const store = this.owner.lookup("service:store");
    const model = store.createRecord("member", {});
    assert.ok(model, "model exists");
  });
});
