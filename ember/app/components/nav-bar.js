import Component from "@ember/component";
import { inject } from "@ember/service";

export default Component.extend({
  session: inject(),
  currentSession: inject(),
  actions: {
    async logout() {
      await this.session.invalidate();
    }
  }
});
