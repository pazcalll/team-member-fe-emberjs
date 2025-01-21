import { module, test } from "qunit";
import { setupTest } from "team-management/tests/helpers";

module("Unit | Service | team-detail-service", function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test("it exists", function (assert) {
    let service = this.owner.lookup("service:team-detail-service");
    assert.ok(service);
  });
});
