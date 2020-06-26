import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class ApplicationController extends Controller {
  @service intl;

  appName = "Ember Twiddle";

  @action
  changeLocale(locale) {
    console.log("Locale: ", locale);
    this.intl.setLocale(locale);
  }
}
