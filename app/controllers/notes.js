import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    newNote: function() {
      var body = this.get('noteCopy');
      var title = this.get('noteTitle');

      if (!body){
        alert('Please add text to create note');
        return;
      }
      var note = this.store.createRecord('note', {
        body: body,
        title: title
      });
      this.set('noteCopy', '');
      this.set('noteTitle', '');
      note.save();
    }
  }
});
