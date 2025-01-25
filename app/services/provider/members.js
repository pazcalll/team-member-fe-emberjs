import Service from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class ProviderMembersService extends Service {
  @tracked data = [];
}
