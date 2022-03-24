export const ENDPOINT = "https://tc-todo-2022.herokuapp.com/todos";

export async function getTodos() {
  //devuelve el contenido del JSON de ese link?
  return fetch(ENDPOINT).then((response) => response.json());
}

//amb el metode POST creem un nou item
export async function postNewTodo(todo) {
  return fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify(todo),
  }).then((response) => response.json());
}

//amb el metode POST actualitza si esta completat o no i retorna el el json actualitzat
export async function postUpdateTodo(todo) {
  //modificar URL, ENDPOINT es una variable
  return fetch(ENDPOINT + "/" + todo.id, {
    method: "POST",
    body: JSON.stringify(todo),
  }).then((response) => response.json());
}

export async function canviarTodo(todo) {
  //modificar URL, ENDPOINT es una variable
  return fetch(ENDPOINT + "/" + todo.id, {
    method: "POST",
    body: JSON.stringify({ title: todo.title }),
  }).then((response) => response.json());
}

export async function eliminarTodo(id) {
  console.log("eliminarid", id);
  //modificar URL, ENDPOINT es una variable
  return fetch(ENDPOINT + "/" + id, {
    method: "DELETE",
  }).then((response) => response.json());
}
