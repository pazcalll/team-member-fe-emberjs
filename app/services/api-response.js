import Service from "@ember/service";
import { action } from "@ember/object";

export default class ApiResponseService extends Service {
  @action
  async handler(apiResponse /*, named*/) {
    let response;

    if (apiResponse.ok) response = await apiResponse.json();
    else this.errorHandler(await apiResponse.json());

    return response;
  }

  @action
  errorHandler(apiResponse /*, named*/) {
    throw Error(apiResponse?.error?.message ?? "Action failed");
  }
}
