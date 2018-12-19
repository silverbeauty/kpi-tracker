import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  session: service(),
  model() {
    return this.store.createRecord("user");
  },
  actions: {
    async signup() {
      const user = this.controller.model;
      await user.save();
      await this.get("session").authenticate(
        "authenticator:oauth2",
        user.email,
        user.password
      );
      this.transitionTo("dashboard");
    }
  }
});
