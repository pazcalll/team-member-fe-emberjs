import Route from "@ember/routing/route";
import toastr from "toastr";
import "toastr/build/toastr.css";
import { inject as service } from "@ember/service";

export default class TeamDetailsRoute extends Route {
  @service team;

  async model(params) {
    let team;
    let teamMembers;
    try {
      team = await this.team.getTeam(params.team_id);
      teamMembers = await this.team.getTeamMembers(params.team_id);
    } catch (error) {
      toastr.error(error);
    }

    return {
      team: team,
      members: teamMembers,
    };
  }
}
