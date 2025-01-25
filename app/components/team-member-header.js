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

  constructor() {
    super(...arguments);
    this.memberForm.updateFormFields([
      {
        label: "Name",
        name: "name",
        placeholder: "Enter member name",
      },
      {
        label: "Role",
        name: "role",
        placeholder: "Enter member role",
      },
    ]);
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
    } catch (error) {
      toastr.error(error);
    }
  }
}
