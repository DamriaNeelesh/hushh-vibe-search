(function (m, a, z, e) {
  var s, t;
  try {
    t = m.sessionStorage.getItem("maze-us");
  } catch (err) {}

  if (!t) {
    t = new Date().getTime();
    try {
      m.sessionStorage.setItem("maze-us", t);
    } catch (err) {}
  }

  s = a.createElement("script");
  s.src = z + "?apiKey=" + e;
  s.async = true;
  a.getElementsByTagName("head")[0].appendChild(s);
  m.mazeUniversalSnippetApiKey = e;
})(
  window,
  document,
  "https://snippet.maze.co/maze-universal-loader.js",
  "f977b26b-7e1e-48b4-98f1-a3891a4a6943"
);