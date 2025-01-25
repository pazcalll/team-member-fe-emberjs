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
  async getMembers(team) {
    let members = await fetch(
      `http://localhost:3000/api/teams/${team.id}/members`,
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
  async updateMember(memberId, member) {
    const updateMemberResponse = await fetch(
      `http://localhost:3000/api/members/${memberId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(member),
      },
    );

    return await this.apiResponse.handler(updateMemberResponse);
  }

  @action
  async deleteMember(member) {
    const response = await fetch(
      `http://localhost:3000/api/members/${member.id}`,
      {
        method: "DELETE",
      },
    );

    return await this.apiResponse.handler(response);
  }
}
