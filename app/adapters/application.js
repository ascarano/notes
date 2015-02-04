import DS from "ember-data";

// export default DS.LSAdapter.extend({});

export default DS.ActiveModelAdapter.extend({
  host: 'http://localhost:3000'
});
