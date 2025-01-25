import { module, test } from "qunit";
import { setupTest } from "team-management/tests/helpers";

module("Unit | Service | provider/teams", function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test("it exists", function (assert) {
    let service = this.owner.lookup("service:provider/teams");
    assert.ok(service);
  });
});
