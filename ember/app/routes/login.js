import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  session: service(),
  actions: {
    login(email, password) {
      this.get("session")
        .authenticate("authenticator:oauth2", email, password)
        .then(() => this.transitionTo("dashboard"))
        .catch(() => {
          this.controller.set("errorMessage", "Invalid login.");
        });
    }
  }
});
