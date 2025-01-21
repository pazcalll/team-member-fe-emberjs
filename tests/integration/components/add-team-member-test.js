import { module, test } from "qunit";
import { setupRenderingTest } from "team-management/tests/helpers";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | add-team-member", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<AddTeamMember />`);

    assert.dom().hasText("");

    // Template block usage:
    await render(hbs`
      <AddTeamMember>
        template block text
      </AddTeamMember>
    `);

    assert.dom().hasText("template block text");
  });
});
