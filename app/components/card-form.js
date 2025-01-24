import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class CardForm extends Component {
  @tracked action = this.args?.action;
  @tracked formFields = this.args ? this.args.formFields : [];
  @tracked submitWording = this.args ? this.args.submitWording : "Submit";
}
