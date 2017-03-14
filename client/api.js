export const fetchData = ({onLoadStart, onLoad, onProgress, onError, onAbort}) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("loadStart", onLoadStart);
  xhr.addEventListener("load", (e) => {
    const firstChar = e.target.status.toString()[0];
    if(firstChar === "4" || firstChar === "5") { onError(e); }
    else { onLoad(e); }
  });
  xhr.addEventListener("progress", onProgress);
  xhr.addEventListener("error", onError);
  xhr.addEventListener("abort", onAbort);
  xhr.open("GET", `${window.location.origin}/api`);
  return xhr;
};
