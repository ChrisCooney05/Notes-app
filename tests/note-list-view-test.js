function constructsClassWithAnInstanceOfNoteList() {
  let noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  expect.isTrue(noteListView.noteList instanceof NoteList);
}
constructsClassWithAnInstanceOfNoteList();

function createsAHtmlStringWhenMethodIsCalled() {
  let noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  expect.isTrue(
    noteListView.returnHtml() ===
      "<ul><li><div>Favourite food: pesto</div></li>"
  );
}
createsAHtmlStringWhenMethodIsCalled();
