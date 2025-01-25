import Service, { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class TeamService extends Service {
  @service apiResponse;

  @action
  async getTeams() {
    let teams = await fetch("http://localhost:3000/api/teams");
    return await this.apiResponse.handler(teams);
  }

  async getTeam(teamId) {
    let team = await fetch(`http://localhost:3000/api/teams/${teamId}`);
    return await this.apiResponse.handler(team);
  }

  @action
  async getTeamMembers(teamId) {
    let members = await fetch(
      `http://localhost:3000/api/teams/${teamId}/members`,
    );
    return await this.apiResponse.handler(members);
  }
}
