import Route from '@ember/routing/route';

export default class TeamDetailsRoute extends Route {
  async model(params) {
    const team = await fetch(`http://localhost:3000/api/teams/${params.id}`).then((response) => response.json());
    const members = await fetch(`http://localhost:3000/api/teams/${params.id}/members`).then((response) => response.json());
    return {
      team: team,
      members: members
    };
  }
}
