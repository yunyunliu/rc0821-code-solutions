/* exported todos */

var todos = []; // todos get rendered from this list -- everytime the page reloads todos gets
// set back to empty array
const previousTodosJSON = localStorage.getItem('javascript-local-storage');
// todos get saved to local storage and the data persists; however the todos in local storage are
// not getting rendered to page after reload
// to fix this; when rendering todolist to page, check localStorage for anything stored
// at the key js-local-storage
// if there is something there; parse it back into JS
// and set that as the new value of todos, which will be used to render the todo list

if (previousTodosJSON) {
  todos = JSON.parse(previousTodosJSON);
}
function handleUnload(e) {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);

  // console.dir(e)
}

window.addEventListener('beforeunload', e => handleUnload(e));
