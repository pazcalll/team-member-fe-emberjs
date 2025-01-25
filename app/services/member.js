import Service, { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class MemberService extends Service {
  @service apiResponse;

  @action
  async createMember(member) {
    const response = await fetch(
      `http://localhost:3000/api/teams/${member.teamId}/members`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(member),
      },
    );

    return await this.apiResponse.handler(response);
  }

  @action
  async getMembers(teamId) {
    let members = await fetch(
      `http://localhost:3000/api/teams/${teamId}/members`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      },
    );
    return await this.apiResponse.handler(members);
  }

  @action
  async updateMember(member) {
    const updateMemberResponse = await fetch(
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

    return await this.apiResponse.handler(updateMemberResponse);
  }
}
