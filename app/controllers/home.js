import Controller from "@ember/controller";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";
import toastr from "toastr";

export default class HomeController extends Controller {
  @service("team") teamRequest;
  @service("member") memberRequest;
  @service("card-form-fields") cardFormFields;
  @tracked teams = this.model.teams;

  addFormFields = [
    {
      label: "Name",
      name: "name",
      placeholder: "Enter team name",
      value: "",
    },
    {
      label: "Description",
      name: "description",
      placeholder: "Enter team description",
      value: "",
    },
  ];

  constructor() {
    super(...arguments);
    this.cardFormFields.updateFormFields(this.addFormFields);
  }

  @action
  async addTeam(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const team = {
      name: formData.get("name"),
      description: formData.get("description"),
    };

    try {
      await this.teamRequest.createTeam(team);
      this.teams = await this.teamRequest.getTeams();
      toastr.success("Team added successfully");
      event.target.reset();
    } catch (error) {
      console.log(error);
      toastr.error(error);
    }
  }

  @action
  async removeTeam(team) {
    try {
      // Remove related members
      await this.teamRequest.removeTeam(team);
      this.teams = await this.teamRequest.getTeams();
      toastr.success("Team deleted successfully");
    } catch (error) {
      console.log(error);
      toastr.error(error);
    }
  }

  @action
  resetForm() {
    this.cardFormFields.updateFormFields(this.addFormFields);
  }
}
