import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class HomeRoute extends Route {
  @service("team") teamRequest;

  async model() {
    const response = await this.teamRequest.getTeams();

    return {
      teams: response,
    };
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.teams = model.teams;
  }
}
