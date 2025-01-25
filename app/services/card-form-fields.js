import Service from "@ember/service";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class CardFormFieldsService extends Service {
  @tracked data;
  @tracked formFields = [];

  @action
  getFormFields() {
    return this.formFields;
  }

  @action
  updateFormFields(fields) {
    this.formFields = [...fields];
  }

  @action
  updateData(data) {
    this.data = data;
  }
}
