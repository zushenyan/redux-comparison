import {fetchData} from "./api.js";

fetchData({
  onSuccess: data => {
    console.log(data);
  },
  onError: error => {
    console.log(error);
  },
  onProgress: data => {
    console.log(data);
  },
  onAbort: event => {
    console.log(event);
  }
}).send();
