import Component from "@glimmer/component";
import { action } from "@ember/object";
import toastr from "toastr";
import "toastr/build/toastr.css";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";

export default class TeamMemberHeader extends Component {
  @tracked team = this.args?.team;

  @service router;

  @action
  goToMainPage() {
    this.router.transitionTo("home");
  }

  @action
  async addMember(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const member = {
      name: formData.get("name"),
      role: formData.get("role"),
      teamId: this.team.id,
    };
    const response = await fetch(
      `http://localhost:3000/api/teams/${this.team.id}/members`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(member),
      },
    );

    if (!response.ok) {
      toastr.error("Failed to add member");
    } else {
      event.target.reset();
      const data = await response.json();
      this.members = [...this.members, data];
      toastr.success("Member added successfully");
    }
  }
}
