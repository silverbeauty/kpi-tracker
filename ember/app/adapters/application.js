import DS from "ember-data";
import { underscore } from "@ember/string";
import { pluralize } from "ember-inflector";
import ENV from "../config/environment";
import DataAdapterMixin from "ember-simple-auth/mixins/data-adapter-mixin";
import { isPresent } from "@ember/utils";

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: "authorizer:oauth2",
  namespace: ENV.apiNamespace,
  host: ENV.serverURL,
  pathForType(type) {
    let underscored = underscore(type);
    return pluralize(underscored);
  },
  findRecord(store, type, id, snapshot) {
    // This is to include extra params with findRecord
    if (snapshot.adapterOptions && snapshot.adapterOptions.extra_params) {
      let url = this.buildURL(type.modelName, id, snapshot, "findRecord");
      const extraParams = snapshot.adapterOptions.extra_params;
      return this.ajax(url, "GET", { data: extraParams });
    } else {
      return this._super(...arguments);
    }
  },
  handleResponse(status, headers, payload, requestData) {
    const total = headers["total"] || headers["Total"];
    const perPage = headers["per-page"] || headers["Per-Page"];
    let pages = null;

    if (isPresent(total) && isPresent(perPage)) {
      pages = Math.ceil(total / perPage);
    }

    const meta = {
      total: total,
      perPage: perPage,
      pages: pages
    };

    payload.meta = meta;

    return this._super(status, headers, payload, requestData);
  }
});
