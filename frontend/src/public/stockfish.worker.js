
self.importScripts('/stockfish.js');
const engine = Stockfish();
engine.onmessage = (event) => {
  self.postMessage(event.data);
};

self.onmessage = (e) => {
    console.log(e.data);
  engine.postMessage(e.data);
};
