import Component from "@glimmer/component";
import { action } from "@ember/object";
import toastr from "toastr";
import "toastr/build/toastr.css";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";

export default class TeamMemberHeader extends Component {
  @tracked team = this.args?.team;

  @service router;
  @service("card-form-fields") memberForm;
  @service("member") member;
  @service("provider/members") members;

  addFormFields = [
    {
      label: "Name",
      name: "name",
      placeholder: "Enter member name",
      value: "",
    },
    {
      label: "Role",
      name: "role",
      placeholder: "Enter member role",
      value: "",
    },
  ];

  constructor() {
    super(...arguments);
    this.memberForm.updateFormFields(this.addFormFields);
  }

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

    try {
      await this.member.createMember(member);
      const getMembers = await this.member.getMembers(this.team);
      this.members.data = getMembers;
      toastr.success("Member added successfully");
      event.target.reset();
    } catch (error) {
      toastr.error(error);
    }
  }

  @action
  async resetForm() {
    this.memberForm.updateData(null);
    this.memberForm.updateFormFields(this.addFormFields);
  }
}
