import ENV from "../config/environment";
import DS from "ember-data";

// export default DS.LSAdapter.extend({});

export default DS.ActiveModelAdapter.extend({
  host: ENV.adapterURL || ENV.ADAPTER_URL
});
