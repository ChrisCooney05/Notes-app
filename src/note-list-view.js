(function (exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype.returnHtml = function () {
    let notes = this.noteList.returnNote();
    notes.forEach(function (note) {
      return `<ul><li><div>${note.returnText()}</div></li>`;
    });
  };

  exports.NoteListView = NoteListView;
})(this);
