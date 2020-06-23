function constructsClassWithAnInstanceOfNoteList() {
  let noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  expect.isTrue(noteListView.noteList instanceof NoteList);
}
constructsClassWithAnInstanceOfNoteList();

function createsAHtmlStringWhenMethodIsCalled() {
  let noteList = new NoteList();
  noteList.addNote("Hello There");
  var noteListView = new NoteListView(noteList);
  expect.isTrue(
    console.log(noteListView.returnHtml())
    noteListView.returnHtml() === "<ul><li><div>Hello There</div></li>"
  );
}
createsAHtmlStringWhenMethodIsCalled();
