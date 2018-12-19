import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";
//import {hash} from 'rsvp';

export default Route.extend(AuthenticatedRouteMixin, {
    model() {
        return hash(
          {
            categories: this.store.findAll('category'),
            users: this.store.findAll('user'),
            tasks: this.store.findAll('task')
          });
        }
});
