import { action } from "@ember/object";
import Route from "@ember/routing/route";
import toastr from "toastr";
import "toastr/build/toastr.css";

export default class TeamDetailsRoute extends Route {
  async model(params) {
    let team = await fetch(`http://localhost:3000/api/teams/${params.id}`);
    if (team.ok) team = await team.json();

    let members = await fetch(
      `http://localhost:3000/api/teams/${params.id}/members`,
    );
    if (members.ok) members = await members.json();

    return {
      team: team,
      members: members,
    };
  }
}
