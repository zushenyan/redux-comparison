export const fetchData = ({onSuccess, onError, onAbort, onProgress}) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", onSuccess);
  xhr.addEventListener("progress", onProgress);
  xhr.addEventListener("error", onError);
  xhr.addEventListener("abort", onAbort);
  xhr.open("GET", `${window.location.origin}/api`);
  return xhr;
};
