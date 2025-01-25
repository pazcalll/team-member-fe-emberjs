import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { inject } from "@ember/service";

export default class ModalForm extends Component {
  @tracked id = this.args?.id ?? "modal";
  @tracked title = this.args?.title ?? "Modal";

  @inject cardFormFields;
}
