import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";

export default class CardForm extends Component {
  @tracked action = this.args?.action;
  @tracked submitWording = this.args?.submitWording ?? "Submit";
  @service cardFormFields;
}
