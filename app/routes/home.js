import Route from "@ember/routing/route";

export default class HomeRoute extends Route {
  async model() {
    const response = await fetch("http://localhost:3000/api/teams").then(
      (response) => response.json(),
    );
    return {
      teams: response,
    };
  }
}
