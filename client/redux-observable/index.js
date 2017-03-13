import store from "./store.js";
import * as epics from "./epics.js";

const fetchButton  = document.getElementById("fetch");
const cancelButton = document.getElementById("cancel");
const state        = document.getElementById("state");

cancelButton.setAttribute("disabled", "true");

fetchButton.addEventListener("click", (e) => {
  store.dispatch(epics.fetchData());
});

cancelButton.addEventListener("click", (e) => {
  store.dispatch(epics.fetchDataAbort());
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
