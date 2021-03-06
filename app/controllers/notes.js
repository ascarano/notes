import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    newNote: function() {
      var body = this.get('noteCopy');
      var title = this.get('noteTitle');

      if (!body){
        // alert('Please add text to create note');
        this.get('flashes').danger('Please add content');
        return;
      }
      var note = this.store.createRecord('note', {
        body: body,
        title: title
      });
      this.set('noteCopy', '');
      this.set('noteTitle', '');
      note.save();
    },

    deleteNote: function(note) {
      note.destroyRecord();
      this.get('flashes').danger('Note Delted Successfully!');
    }
  }
});
