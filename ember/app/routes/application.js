import Route from "@ember/routing/route";
import { inject } from "@ember/service";
import ApplicationRouteMixin from "ember-simple-auth/mixins/application-route-mixin";

export default Route.extend(ApplicationRouteMixin, {
  routeAfterAuthentication: "dashboard",
  session: inject(),
  currentSession: inject(),
  // routeAfterAuthentication: null, // Don't trigger transition after authenticate()
  beforeModel() {
    return this._loadCurrentUser();
  },
  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser();
  },
  _loadCurrentUser() {
    return this.get("currentSession").load();
  },
  actions: {
    logout() {
      this.get("session").invalidate();
      this.get("currentSession").nullify();
    }
  }
});
