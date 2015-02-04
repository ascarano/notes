import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['note'],

  actions: {
    deleteNote: function(note) {
      this.sendAction('deleteNote', note);
    }
  }
});
