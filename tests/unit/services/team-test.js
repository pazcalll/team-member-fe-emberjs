import { module, test } from "qunit";
import { setupTest } from "team-management/tests/helpers";

module("Unit | Service | team", function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test("it exists", function (assert) {
    let service = this.owner.lookup("service:team");
    assert.ok(service);
  });
});
