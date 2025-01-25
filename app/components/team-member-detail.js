import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import toastr from "toastr";
import "toastr/build/toastr.css";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class TeamMemberDetail extends Component {
  @tracked team;
  @service("provider/members") members;
  @service("card-form-fields") memberInEdit;
  @service("member") member;

  @service router;

  constructor() {
    super(...arguments);
    this.team = this.args?.team;
    this.members.data = this.args?.members;
  }

  @action
  async deleteMember(member) {
    try {
      await this.member.deleteMember(member);
      const getMembers = await this.member.getMembers(this.team);
      this.members.data = getMembers;
      toastr.success("Member deleted successfully");
    } catch (error) {
      toastr.error(error);
    }
  }

  @action
  async updateMember(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const member = {
      name: formData.get("name"),
      role: formData.get("role"),
    };
    const response = await fetch(
      `http://localhost:3000/api/teams/${this.team.id}/members/${this.memberInEdit.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(member),
      },
    );

    if (!response.ok) {
      toastr.error("Failed to edit member");
    } else {
      const data = await response.json();
      this.members.data = this.members.data.map((member) =>
        member.id === this.memberInEdit.id ? data : member,
      );
      toastr.success("Member edited successfully");
    }
  }

  @action
  editMember(member) {
    this.memberInEdit.updateFormFields([
      {
        label: "Name",
        type: "text",
        placeholder: "Name",
        name: "name",
        value: member.name,
      },
      {
        label: "Role",
        type: "text",
        placeholder: "Role",
        name: "role",
        value: member.role,
      },
    ]);
  }
}
