(function (exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype.returnHtml = function () {
    return "<ul><li><div>Favourite food: pesto</div></li>";
  };

  exports.NoteListView = NoteListView;
})(this);
