import Service from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class ProviderTeamsService extends Service {
  @tracked data = [];
}
