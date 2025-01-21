import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import toastr from "toastr";
import "toastr/build/toastr.css";
import { action } from "@ember/object";

export default class TeamMemberDetail extends Component {
  @tracked team = this.args.team;
  @tracked members = this.args.members;

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
          "Accept": "application/json",
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

  @action
  async deleteMember(memberId) {
    const response = await fetch(
      `http://localhost:3000/api/teams/${this.team.id}/members/${memberId}`,
      {
        method: "DELETE",
      },
    );

    if (!response.ok) {
      toastr.error("Failed to delete member");
    } else {
      this.members = this.members.filter((member) => member.id !== memberId);
      toastr.success("Member deleted successfully");
    }
  }
}
