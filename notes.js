(function () {
  var field = document.getElementById("notesField");
  if (!field) return;

  var glyphs = ["\u266A", "\u266B", "\u266C", "\u2669"];
  var colors = [
    getComputedStyle(document.documentElement).getPropertyValue("--blue").trim(),
    getComputedStyle(document.documentElement).getPropertyValue("--pink").trim(),
    getComputedStyle(document.documentElement).getPropertyValue("--green").trim(),
    getComputedStyle(document.documentElement).getPropertyValue("--amber").trim()
  ];

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var count = reduceMotion ? 8 : 26;

  for (var i = 0; i < count; i++) {
    spawnNote(true);
  }

  function spawnNote(initial) {
    var note = document.createElement("span");
    note.className = "note";
    note.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];

    var size = 14 + Math.random() * 26;
    var left = Math.random() * 100;
    var duration = 9 + Math.random() * 10;
    var delay = initial ? Math.random() * duration : 0;
    var drift = (Math.random() - 0.5) * 220;
    var spin = (Math.random() - 0.5) * 90;

    note.style.left = left + "vw";
    note.style.fontSize = size + "px";
    note.style.color = colors[Math.floor(Math.random() * colors.length)];
    note.style.animationDuration = duration + "s";
    note.style.animationDelay = "-" + delay + "s";
    note.style.setProperty("--drift", drift + "px");
    note.style.setProperty("--spin", spin + "deg");

    field.appendChild(note);
  }
})();
