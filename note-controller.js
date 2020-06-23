let element = document.getElementById("app");

(function () {
  let noteList = new NoteList();
  noteList.addNote("Favourite drink: seltzer");
  let noteListView = new NoteListView(noteList);
  console.log(noteListView.returnHtml());
  element.innerHTML = noteListView.returnHtml();
})();
