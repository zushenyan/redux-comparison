import store from "./store.js";
import * as sagas from "./sagas.js";

const fetchButton  = document.getElementById("fetch");
const cancelButton = document.getElementById("cancel");
const state        = document.getElementById("state");

cancelButton.setAttribute("disabled", "true");

fetchButton.addEventListener("click", (e) => {
  store.dispatch(sagas.fetchData());
});

cancelButton.addEventListener("click", (e) => {
  store.dispatch(sagas.fetchDataAbort());
});

store.subscribe(() => {
  const { fetchState } = store.getState();

  if(fetchState === "loading"){
    fetchButton.setAttribute("disabled", true);
    cancelButton.removeAttribute("disabled");
  }
  else {
    fetchButton.removeAttribute("disabled");
    cancelButton.setAttribute("disabled", true);
  }

  state.innerHTML = fetchState;
});
