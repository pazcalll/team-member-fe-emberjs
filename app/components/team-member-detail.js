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
    try {
      await this.member.updateMember(this.memberInEdit.data.id, member);
      const getMembers = await this.member.getMembers(this.team);
      this.members.data = getMembers;
      toastr.success("Member updated successfully");
    } catch (error) {
      toastr.error(error);
    }
  }

  @action
  editMember(member) {
    this.memberInEdit.updateData(member);
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
