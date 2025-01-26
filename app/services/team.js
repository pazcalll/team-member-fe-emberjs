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

  @action
  async createTeam(team) {
    let newTeam = await fetch("http://localhost:3000/api/teams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(team),
    });
    return await this.apiResponse.handler(newTeam);
  }

  @action
  async removeTeam(team) {
    fetch(`http://localhost:3000/api/teams/${team.id}/members`, {
      method: "DELETE",
    });
    let response = null;

    response = await fetch(`http://localhost:3000/api/teams/${team.id}`, {
      method: "DELETE",
    });

    return await this.apiResponse.handler(response);
  }

  @action
  async updateTeam(teamId, data) {
    let response = await fetch(`http://localhost:3000/api/teams/${teamId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await this.apiResponse.handler(response);
  }
}
