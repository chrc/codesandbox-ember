import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class ApplicationRoute extends Route {
  @service intl;

  async beforeModel() {
    super.beforeModel(...arguments);

    const locale = "fr-fr";
    this.intl.setLocale(locale);
  }
}
