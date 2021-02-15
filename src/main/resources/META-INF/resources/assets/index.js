const wsProto = (window.location.protocol === "https:") ? "wss:" : "ws:";
const wsBase = `${wsProto}//${window.location.hostname}:${window.location.port}`;

const helloWS = new WebSocket(`${wsBase}/hellos`);

helloWS.onmessage = function(event) {
    const li = document.createElement("li");
    li.innerHTML = `hello, ${event.data}`;
    document.getElementById("hellos").appendChild(li);
}
