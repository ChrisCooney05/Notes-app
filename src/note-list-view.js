(function (exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype.returnHtml = function () {
    this.noteList.returnNote().forEach(function (note) {
      console.log(`<ul><li><div>${note.returnText()}</div></li>`);
    });
  };

  exports.NoteListView = NoteListView;
})(this);
