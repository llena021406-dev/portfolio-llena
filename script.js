
const PORTFOLIO = {
  name: "Allen.",
  role: "College Student.",
  bio: "I am a 4th year college student at STI College Rosario. I build websites and draw for fun. I also dabble in game development namely Godot and Unity.",
  social: [
    { label: "GitHub",   url: "https://github.com/llena021406-dev" },
    { label: "Email",    url: "mailto:allenlazaro60@gmail.com" }
  ],
  skills: {
    "Game dev": ["GDScript", "Unity C#"],
    "Front end": ["JavaScript", "Tailwind CSS", "CSS", "Kotlin"],
    "Back end": ["SQL", "Mongo DB", "Python", "Java", "SAP", "AWS"],
    "Others": ["PLC Programming", "Video editing", "2D Animation", "Digital & Traditional Art", "Spreadsheet"]
  },
  /* Book pages */
  projects: [
    { title: "MTCGS Enrollment and Finance", tag: "Web app", year: "2026", url: "https://mtcgsv1.vercel.app/", image: "", color: "#0f3b2f", accent: "#6ee7b7",
      summary: "Multi-branch enrollment and financial management for Mother Theresa Group of Schools. It has role-based sign-in, payment recording with printable official receipts, and an AI timetable generator.",
      stack: ["HTML", "CSS", "JavaScript"], links: [] },
    { title: "LyfStyle", tag: "Web app", year: "2026", url: "https://lyfstyle.vercel.app/", image: "", color: "#5a2108", accent: "#fdba74",
      summary: "A personal fitness tracker. It turns your stats and goal into a calorie target and plan, then tracks food, water, steps, training, weight progress and reminders.",
      stack: ["HTML", "CSS", "JavaScript"], links: [] },
    { title: "Anoxia", tag: "Unity Game", year: "tba", url: "", image: "./imgs/Anoxia.png", color: "#06262e", accent: "#5eead4",
      summary: "Anoxia is an upcoming survival horror game I am developing that puts players in the role of a submarine crew member trapped inside an abandoned deep-sea laboratory.",
      stack: ["C#"], links: [] }
  ],
  /* Artwork slider */
  art: [
    { title: "Mai & Shino", medium: "Digital", year: "2026", image: "./imgs/New board.jpg", description: "2 adventurers stopping by for lunch." },
    { title: "Eve", medium: "Digital", year: "2026", image: "./imgs/art.png", description: "She's clearly looking down on you." },
    { title: "Mary", medium: "Traditional", year: "2025", image: "./imgs/Mary.jpg", description: "A gyaru with glasses." },
    { title: "[Touhou] Remilia", medium: "Traditional", year: "2025", image: "./imgs/Remilia.jpg", description: "Remilia sleeping." },
    { title: "Random Elf", medium: "Traditional", year: "2025", image: "./imgs/elf.jpg", description: "Sleepy?." },
    { title: "[Mushoku Tensei] Sylphiette", medium: "Traditional", year: "2026", image: "./imgs/Sylphie.jpg", description: "Sylphiette but with a wolf cut." },
    { title: "[Arknights] Mudrock", medium: "Traditional", year: "2025", image: "./imgs/Mudrock.jpg", description: "The juggernaut." },
    { title: "Cutesy", medium: "Traditional", year: "2025", image: "./imgs/Lolita fashione.jpg", description: "Bear bear." },
    { title: "Mira", medium: "Traditional", year: "2025", image: "./imgs/Mira.jpg", description: "She survived but at what cost?." },
    { title: "Bored", medium: "Traditional", year: "2025", image: "./imgs/Bored.jpg", description: "I guess she's bored." },
    { title: "Swim", medium: "Traditional", year: "2024", image: "./imgs/lake.png", description: "Swimming in the lake." }
  ],
  experience: [
    { title: "Work immersion", org: "PIMES Corp.", period: "2022", points: ["Programming machines using PLC.", "Crimping and soldering."], }
  ],
  education: [
    { title: "BS Information Technology", org: "STI College Rosario", period: "2022", points: ["Capstone: AI-based class scheduling."] }
  ],
  /* Competitions and achievements. win: true highlights it in gold. */
  achievements: [
    { title: "Codefest", category: "Mobile app coding competition", result: "Participated twice", win: false,
      description: "Took part twice in the university’s mobile app coding competition." },
    { title: "Penitence", category: "Short film competition", result: "Champion", win: true,
      description: "Entered the university short film competition with the film “Penitence” and won as Champion." }
  ],
  files: [
    { label: "Resume", path: "./imgs/Resume with Cover Leter.pdf" }
  ]
};


const $ = (s, r = document) => r.querySelector(s);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const D = PORTFOLIO;
const calm = matchMedia("(prefers-reduced-motion: reduce)");
const isLive = u => /^https?:\/\//i.test(u || "");              // "#" or "" means there is no live site
const PALETTE = [["#0f3b2f", "#6ee7b7"], ["#5a2108", "#fdba74"], ["#06262e", "#5eead4"], ["#3b0f2e", "#f9a8d4"], ["#1e1b4b", "#a5b4fc"], ["#3f2d06", "#fcd34d"], ["#0c2a4d", "#7dd3fc"], ["#2d1b4e", "#d8b4fe"], ["#14352c", "#86efac"], ["#4a1020", "#fda4af"]];
const themeOf = key => {                                       // [page color, accent]; set color/accent on a project to choose your own
  if (key === "files") return ["#16224f", "#93c5fd"];
  const d = D.projects[key], f = PALETTE[key % PALETTE.length];
  return [d.color || f[0], d.accent || f[1]];
};
document.title = D.name.replace(/\.$/, "") + " | Portfolio";

/* ---- Fill page ---- */
$("#navName").textContent = $("#heroName").textContent = D.name;
$("#heroRole").textContent = D.role;
$("#copy").textContent = "\u00A9 " + new Date().getFullYear() + " " + D.name;
$("#social").innerHTML = D.social.map(s => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`).join("");
$("#aboutGrid").innerHTML =
  `<div class="panel"><h3>About</h3><p>${esc(D.bio)}</p></div>` +
  `<div class="panel"><h3>Technical skills</h3>${Object.entries(D.skills).map(([k, v]) =>
    `<h4>${esc(k)}</h4><div class="chips">${v.map(x => `<span>${esc(x)}</span>`).join("")}</div>`).join("")}</div>`;
const entry = e => `<h4>${esc(e.title)} <span>${esc(e.org)}, ${esc(e.period)}</span></h4><ul>${e.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul>`;
$("#expGrid").innerHTML =
  `<div class="panel"><h3>Experience</h3>${D.experience.map(entry).join("")}</div>` +
  `<div class="panel"><h3>Education</h3>${D.education.map(entry).join("")}</div>`;
const trophy = `<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M7 4h10v4a5 5 0 0 1-10 0V4zM5 5H3v2a4 4 0 0 0 4 4M19 5h2v2a4 4 0 0 1-4 4M12 13v4m-4 3h8m-6-3h4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
$("#achGrid").innerHTML = D.achievements.map(a => `<div class="panel ach${a.win ? " win" : ""}"><div class="achhead">${trophy}<span>${esc(a.category)}</span><b class="badge${a.win ? " win" : ""}">${esc(a.result)}</b></div><h3>${esc(a.title)}</h3><p>${esc(a.description)}</p></div>`).join("");

const placeholder = i => { const h = (i * 47 + 190) % 360;
  return "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="hsl(${h} 70% 42%)"/><stop offset="1" stop-color="hsl(${h + 60} 70% 22%)"/></linearGradient></defs><rect width="1600" height="900" fill="url(#g)"/><g stroke="#fff" stroke-opacity=".3" fill="none" stroke-width="3"><circle cx="420" cy="450" r="260"/><circle cx="1180" cy="450" r="170"/><path d="M0 450H1600"/></g></svg>`); };
const track = $("#track");
track.innerHTML = D.art.map((a, i) =>
  `<figure class="slide" tabindex="0" data-i="${i}"><img draggable="false" alt="${esc(a.title)}" src="${esc(a.image || placeholder(i))}" onerror="this.onerror=null;this.src=placeholder(${i})"><figcaption>${esc(a.title)}<small>${esc(a.medium)} \u00B7 ${esc(a.year)}</small></figcaption></figure>`).join("");

/* ---- Hero: glitchy character field with a hidden ASCII "Portfolio" ---- */
const CH = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", RAMP = " .:-=+*#%@", WORD = "Portfolio";
const card = $("#card"), field = $("#field"), cv = $("#glitch"), ctx = cv.getContext("2d"), darkMq = matchMedia("(prefers-color-scheme: dark)");
let cols = 0, rows = 0, cw = 8, chh = 15, fs = 13, dpr = 1, glyph = [], bg = [], seen = new Float32Array(0);
let mx = -1e4, my = -1e4, raf = 0, dirty = true;

function buildField() {
  const r = field.getBoundingClientRect();
  if (!r.width || !r.height) return;
  dpr = Math.min(devicePixelRatio || 1, 2);
  cv.width = Math.round(r.width * dpr); cv.height = Math.round(r.height * dpr);
  fs = r.width < 640 ? 10 : 13;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.font = `${fs}px ui-monospace, Menlo, Consolas, monospace`;
  cw = ctx.measureText("M").width; chh = fs * 1.2;
  cols = Math.floor(r.width / cw); rows = Math.floor(r.height / chh);
  // Draw the word into a bitmap with one pixel per character cell, then turn its coverage into ASCII characters.
  const o = document.createElement("canvas"); o.width = cols; o.height = rows;
  const c = o.getContext("2d", { willReadFrequently: true }), k = cw / chh;       // cells are taller than wide
  c.setTransform(1, 0, 0, k, 0, 0);
  c.font = "900 100px 'Arial Black', Impact, Helvetica, sans-serif";
  const size = Math.min(100 * cols * 0.9 / c.measureText(WORD).width, rows * chh * 0.62 / (0.72 * cw));
  c.font = `900 ${size}px 'Arial Black', Impact, Helvetica, sans-serif`;
  c.textAlign = "center"; c.textBaseline = "middle"; c.fillStyle = "#000";
  c.fillText(WORD, cols / 2, rows / (2 * k));
  const px = c.getImageData(0, 0, cols, rows).data;
  glyph = Array.from({ length: cols * rows }, (_, i) => { const a = px[i * 4 + 3] / 255; return a > 0.12 ? RAMP[Math.min(9, Math.ceil(a * 9))] : ""; });
  seen = new Float32Array(cols * rows);
  dirty = true;
}
function fieldColors() {                                           // sea blue at the cursor, aqua green, then faint white
  const dk = true;
  const A = dk ? [30, 144, 255, .5] : [0, 110, 200, .55], B = dk ? [46, 230, 182, .45] : [0, 190, 150, .5], F = dk ? [255, 255, 255, .12] : [10, 18, 32, .13];
  const mix = (a, b, u) => a.map((v, i) => v + (b[i] - v) * u), pal = [];
  for (let s = 0; s <= 24; s++) { const t = s / 24, q = t < .45 ? mix(A, B, t / .45) : mix(B, F, (t - .45) / .55); pal.push(`rgba(${q[0] | 0},${q[1] | 0},${q[2] | 0},${q[3].toFixed(2)})`); }
  return { pal, ink: dk ? "236,248,255" : "10,18,32" };
}
function drawField() {
  raf = 0;
  if (!cols) return;
  const W = cv.width / dpr, H = cv.height / dpr, { pal, ink } = fieldColors();
  const R = Math.min(W, H) * 0.55, RV = Math.min(W, H) * 0.3;     // gradient radius, reveal radius
  if (dirty) { bg = Array.from({ length: cols * rows }, () => CH[Math.random() * CH.length | 0]); dirty = false; }
  ctx.clearRect(0, 0, W, H);
  ctx.font = `${fs}px ui-monospace, Menlo, Consolas, monospace`; ctx.textBaseline = "middle";
  const shown = []; let alive = false;
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
    const i = r * cols + c, x = c * cw, y = (r + 0.5) * chh, d = Math.hypot(x + cw / 2 - mx, y - my);
    if (glyph[i]) {                                                // letter cells fade in near the cursor and linger as a trail
      const f = d < RV ? (1 - d / RV) ** 1.2 : 0;
      seen[i] = f > seen[i] ? f : seen[i] * 0.965;
      if (seen[i] < 0.02) seen[i] = 0; else alive = true;
      if (seen[i] > 0.3) { shown.push(i); continue; }
    }
    ctx.fillStyle = pal[Math.min(24, Math.floor(d / R * 24))];
    ctx.fillText(bg[i], x, y);
  }
  ctx.font = `700 ${fs}px ui-monospace, Menlo, Consolas, monospace`;
  for (const i of shown) {
    ctx.fillStyle = `rgba(${ink},${Math.min(1, seen[i] * 1.15).toFixed(2)})`;
    ctx.fillText(glyph[i], (i % cols) * cw, (Math.floor(i / cols) + 0.5) * chh);
  }
  if (alive) scheduleField();
}
const scheduleField = () => { if (!raf) raf = requestAnimationFrame(drawField); };
card.addEventListener("pointermove", e => {                        // every move: new random characters, gradient follows the cursor
  const r = field.getBoundingClientRect();
  mx = e.clientX - r.left; my = e.clientY - r.top;
  dirty = true; card.classList.add("live"); scheduleField();
});
card.addEventListener("pointerleave", () => { card.classList.remove("live"); mx = my = -1e4; scheduleField(); });
new ResizeObserver(() => { buildField(); scheduleField(); }).observe(field);
darkMq.addEventListener("change", scheduleField);

/* ---- Work: drag slider + parallax (Web Animations API) ---- */
const sec = $("#art"), slides = [...track.children], running = new WeakMap();
const glide = (el, frames, ms) => {
  const prev = running.get(el);
  if (prev) { try { prev.commitStyles(); } catch (e) {} prev.cancel(); }
  running.set(el, el.animate(frames, { duration: ms, fill: "forwards", easing: "cubic-bezier(.22,.8,.3,1)" }));
};
let p = 0, vw = 0;                       // p: 0 = first slide centered, 1 = last slide centered
function layout(ms) {
  vw = sec.clientWidth;
  const c = slides.map(s => s.offsetLeft + s.offsetWidth / 2), L = c[c.length - 1] - c[0];
  const tx = vw / 2 - c[0] - L * p;
  glide(track, { transform: `translateX(${tx}px)` }, ms);
  slides.forEach((s, i) => {
    const rel = (tx + c[i] - vw / 2) / (vw / 2);                 // -1 left edge ... +1 right edge
    glide($("img", s), { objectPosition: `${clamp(50 - rel * 50, 0, 100)}% 50%` }, ms);
  });
}
let down = false, x0 = 0, p0 = 0, moved = 0;
sec.addEventListener("pointerdown", e => { down = true; x0 = e.clientX; p0 = p; moved = 0; sec.setPointerCapture(e.pointerId); sec.classList.add("drag"); });
sec.addEventListener("pointermove", e => {
  if (!down) return;
  const dx = e.clientX - x0; moved = Math.max(moved, Math.abs(dx));
  p = clamp(p0 - dx / (vw * 0.5), 0, 1);                         // half a viewport of drag = whole track
  layout(700);
});
const endDrag = e => {
  if (!down) return; down = false; sec.classList.remove("drag");
  if (e.type === "pointerup" && moved < 6) {
    const hit = document.elementFromPoint(e.clientX, e.clientY)?.closest(".slide");
    if (hit) openArt(+hit.dataset.i);
  }
};
sec.addEventListener("pointerup", endDrag);
sec.addEventListener("pointercancel", endDrag);
slides.forEach(s => s.addEventListener("keydown", e => { if (e.key === "Enter") openArt(+s.dataset.i); }));
addEventListener("resize", () => layout(0));
layout(0);

/* ---- Book: files (12 leaves rotating about the spine) ---- */
const BOOK_N = 12, BOOK_MAX = 170, stage = $("#stage"), book = $("#book");
for (let i = BOOK_N - 1; i >= 0; i--) {                         // bottom cover first, top cover last
  const leaf = document.createElement("div");
  leaf.className = "leaf" + (i === 0 || i === BOOK_N - 1 ? " cover" : "");
  leaf.style.setProperty("--k", (BOOK_MAX * (BOOK_N - 1 - i) / (BOOK_N - 1)).toFixed(3));   // 170deg top cover ... 0deg bottom cover
  leaf.style.setProperty("--z", ((BOOK_N - 1 - i) * 3).toFixed(1));
  if (i === 0) leaf.innerHTML = `<div class="title"><h1>Projects</h1><p>Open me</p></div><div class="inside"><h3>Files</h3>${D.files.map(f => `<a href="${esc(f.path)}" download><span>${esc(f.label)}</span><span>Download</span></a>`).join("")}</div>`;
  if (i > 0 && i < BOOK_N - 1 && D.projects[i - 1]) { const t = esc(D.projects[i - 1].title); leaf.style.setProperty("--pg", themeOf(i - 1)[0]); leaf.innerHTML = `<span class="ptitle f">${t}</span><span class="ptitle b">${t}</span>`; }
  book.appendChild(leaf);
}
let bookT = 0, bookInView = false;
const setBook = v => { bookT = clamp(v, 0, 1); book.style.setProperty("--t", bookT); };
// Drag anywhere in the section. 1.5 book-widths of travel (75% each side of the spine) = fully open; it stays wherever you let go.
const bookSec = $("#projects");
let bookDrag = false, bx0 = 0, bt0 = 0, bMoved = 0;
const endBookDrag = () => { bookDrag = false; bookSec.classList.remove("dragging"); };
bookSec.addEventListener("pointerdown", e => {
  if (e.button !== 0) return;
  bookDrag = true; bx0 = e.clientX; bt0 = bookT; bMoved = 0; bookSec.classList.add("dragging");
});
addEventListener("pointermove", e => {
  if (!bookDrag) return;
  if (e.pointerType === "mouse" && e.buttons === 0) return endBookDrag();   // released outside the window
  const dx = e.clientX - bx0; bMoved = Math.max(bMoved, Math.abs(dx));
  setBook(bt0 - dx / (1.5 * stage.getBoundingClientRect().width));
});
addEventListener("pointerup", endBookDrag);
addEventListener("pointercancel", endBookDrag);
bookSec.addEventListener("click", e => { if (bMoved > 6) { e.preventDefault(); e.stopPropagation(); } }, true);   // a drag is not a click on a file link
bookSec.addEventListener("dragstart", e => e.preventDefault());
new IntersectionObserver(([e]) => { bookInView = e.isIntersecting; }, { threshold: 0.4 }).observe($("#projects"));
addEventListener("keydown", e => {
  if (!bookInView || modal.open || current) return;
  if (e.key === "ArrowLeft") setBook(bookT + 0.1);
  if (e.key === "ArrowRight") setBook(bookT - 0.1);
});

/* ---- Pages: click to maximize, Return puts the page back ---- */
const viewer = $("#viewer"), vBody = $("#vBody"), vCard = $("#vCard"), vSheet = $("#vSheet"), vScrim = $("#vScrim");
let current = null, closing = false, opening = false;
// The page's four corners as they appear on screen (read from probes inside it), so the sheet starts exactly on the page's shape.
const quadOf = el => [[0, 0], [1, 0], [1, 1], [0, 1]].map(([x, y]) => {
  const d = document.createElement("i");
  d.style.cssText = `position:absolute;width:2px;height:2px;margin:-1px 0 0 -1px;left:${x * 100}%;top:${y * 100}%`;
  el.appendChild(d); const r = d.getBoundingClientRect(); d.remove();
  return [r.left + r.width / 2, r.top + r.height / 2];
});
const poly = q => `polygon(${q.map(([x, y]) => `${x.toFixed(1)}px ${y.toFixed(1)}px`).join(",")})`;
const fullPoly = () => poly([[0, 0], [innerWidth, 0], [innerWidth, innerHeight], [0, innerHeight]]);
const dur = ms => matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : ms;
const hostOf = u => { try { return new URL(u).host; } catch (e) { return u; } };
const preview = d => `<a class="vpreview" href="${esc(d.url)}" target="_blank" rel="noopener"><div class="vchrome"><i></i><i></i><i></i><span>${esc(hostOf(d.url))}</span></div><div class="vframe"><iframe src="${esc(d.url)}" title="Preview of ${esc(d.title)}" loading="lazy" tabindex="-1" sandbox="allow-scripts allow-same-origin allow-forms" referrerpolicy="no-referrer"></iframe></div></a><p class="vnote"></p>`;
function scalePreview(hook) {                                    // the site renders at 1280px wide, scaled down to fit the frame
  const fr = $(".vframe iframe", vBody); if (!fr) return;
  fr.style.transform = `scale(${fr.parentElement.clientWidth / 1280})`;
  if (hook) fr.addEventListener("load", () => fr.classList.add("ready"), { once: true });
}
addEventListener("resize", () => { if (current) scalePreview(); });
const pageHTML = key => {
  if (key === "files") return `<h2 id="vTitle">Resume and files</h2><div class="vfiles">${D.files.map(f => `<a href="${esc(f.path)}" download><span>${esc(f.label)}</span><span>Download</span></a>`).join("")}</div>`;
  const d = D.projects[key];
  return `<h2 id="vTitle">${esc(d.title)}</h2><div class="meta">${esc(d.tag)} \u00B7 ${esc(d.year)}</div>${isLive(d.url) ? preview(d) : `<img alt="${esc(d.title)}" src="${esc(d.image || placeholder(key))}" onerror="this.onerror=null;this.src=placeholder(${key})">`}<p>${esc(d.summary)}</p><div class="chips">${d.stack.map(x => `<span>${esc(x)}</span>`).join("")}</div><div class="vlinks">${d.links.map(l => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("")}</div>`;
};
const rectPoly = r => poly([[r.left, r.top], [r.right, r.top], [r.right, r.bottom], [r.left, r.bottom]]);
function openPage(src, key, hide = true) {
  if (current) return;
  current = src; opening = true;
  const [pg, ac] = themeOf(key);
  viewer.style.setProperty("--pg", pg); viewer.style.setProperty("--ac", ac);
  vCard.classList.toggle("compact", key === "files");
  vBody.innerHTML = pageHTML(key);
  viewer.hidden = false; vCard.scrollTop = 0;
  document.documentElement.style.overflow = "hidden";
  scalePreview(true);
  const T = dur(620), to = vCard.getBoundingClientRect();
  if (T) {
    const spread = vSheet.animate([{ clipPath: poly(quadOf(src)) }, { clipPath: rectPoly(to) }], { duration: T, easing: "cubic-bezier(.22,.8,.3,1)" });
    spread.onfinish = () => { opening = false; };
    vSheet.animate([{ opacity: 0, offset: 0 }, { opacity: 1, offset: 160 / T }, { opacity: 1, offset: 1 - 200 / T }, { opacity: 0, offset: 1 }], { duration: T, easing: "linear" });
    vCard.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 220, delay: T - 220, easing: "ease-out", fill: "backwards" });
    vBody.animate([{ opacity: 0, translate: "0 14px" }, { opacity: 1, translate: "0 0" }], { duration: 380, delay: T - 160, easing: "ease-out", fill: "backwards" });
    vScrim.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 380, easing: "ease-out" });
  } else opening = false;
  if (hide) setTimeout(() => { if (current === src) src.classList.add("gone"); }, dur(160));
  $("#vBack").focus({ preventScroll: true });
}
function closePage() {
  if (!current || closing || opening) return;
  closing = true;
  const src = current, T = dur(520), from = vCard.getBoundingClientRect();
  const finish = () => {
    [viewer, vSheet, vCard, vBody, vScrim].forEach(el => el.getAnimations().forEach(a => a.cancel()));
    viewer.hidden = true;
    document.documentElement.style.overflow = "";
    src.classList.remove("gone");
    current = null; closing = false;
    src.focus({ preventScroll: true });
  };
  if (!T) return finish();
  src.classList.remove("gone");                                   // the page is back in the book underneath while the sheet shrinks onto it
  const shrink = vSheet.animate([{ clipPath: rectPoly(from) }, { clipPath: poly(quadOf(src)) }], { duration: T, easing: "cubic-bezier(.6,.05,.25,1)", fill: "forwards" });
  vSheet.animate([{ opacity: 0, offset: 0 }, { opacity: 1, offset: 100 / T }, { opacity: 1, offset: 1 - 160 / T }, { opacity: 0, offset: 1 }], { duration: T, easing: "linear", fill: "both" });
  vCard.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 150, easing: "linear", fill: "forwards" });
  vScrim.animate([{ opacity: 1 }, { opacity: 0 }], { duration: T, easing: "ease-in", fill: "forwards" });
  shrink.onfinish = finish;
}
$("#vBack").addEventListener("click", closePage);
vScrim.addEventListener("click", closePage);
addEventListener("keydown", e => { if (e.key === "Escape") closePage(); });
$("#filesBtn").addEventListener("click", e => openPage(e.currentTarget, "files", false));
// Leaf i: 0 = top cover (files, only when its inside faces you), 1..10 = pages -> projects in order, 11 = bottom cover.
[...book.children].forEach((leaf, idx) => {
  const i = BOOK_N - 1 - idx;
  const key = i === 0 ? "files" : (i < BOOK_N - 1 && D.projects[i - 1] ? i - 1 : null);
  if (key === null) return;
  const go = () => { if (key === "files" && bookT * BOOK_MAX <= 90) return; openPage(leaf, key); };
  leaf.addEventListener("click", go);
  if (key === "files") return;
  leaf.classList.add("open"); leaf.tabIndex = 0; leaf.setAttribute("role", "button");
  leaf.setAttribute("aria-label", "Open page: " + D.projects[key].title);
  leaf.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } });
});

/* ---- Project details ---- */
const modal = $("#modal");
function openArt(i) {
  const d = D.art[i];
  $("#mTitle").textContent = d.title;
  $("#mMeta").textContent = d.medium + " \u00B7 " + d.year;
  $("#mImg").onerror = () => { $("#mImg").onerror = null; $("#mImg").src = placeholder(i); };
  $("#mImg").src = d.image || placeholder(i);
  $("#mImg").alt = d.title;
  $("#mText").textContent = d.description;
  modal.showModal();
}
$("#mClose").onclick = () => modal.close();
modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });

/* ---- Artwork: entry animation + auto-scroll (there and back, pauses while you drag) ---- */
slides.forEach((s, i) => s.style.setProperty("--i", i));
const CYCLE = 70000;                                              // ms for one full there-and-back loop
let phase = 0, ramp = 0, resumeAt = performance.now() + 2500, lastT = performance.now(), needSync = true, dirRight = true, lastP = 0, artSeen = false, cx = [], span = 0;
const cacheCenters = () => { cx = slides.map(s => s.offsetLeft + s.offsetWidth / 2); span = cx[cx.length - 1] - cx[0]; };
cacheCenters();
addEventListener("resize", () => { cacheCenters(); needSync = true; });
new IntersectionObserver(([e]) => {
  artSeen = e.isIntersecting;
  if (artSeen && !track.classList.contains("in")) { track.classList.add("in"); setTimeout(() => track.classList.add("settled"), slides.length * 70 + 1200); }
}, { threshold: 0.2 }).observe(sec);
function paintAuto() {                                           // same math as layout(), written straight to the styles each frame
  vw = sec.clientWidth;
  const tx = vw / 2 - cx[0] - span * p;
  track.style.transform = `translateX(${tx.toFixed(2)}px)`;
  for (let i = 0; i < slides.length; i++) {
    const rel = (tx + cx[i] - vw / 2) / (vw / 2);
    slides[i].firstElementChild.style.objectPosition = `${clamp(50 - rel * 50, 0, 100).toFixed(2)}% 50%`;
  }
}
function syncAuto() {                                            // hand control from the drag animations to the auto-scroll, from where you left off
  [track, ...slides.map(s => s.firstElementChild)].forEach(el => { const a = running.get(el); if (a) { try { a.commitStyles(); } catch (e) {} a.cancel(); running.delete(el); } });
  if (p > 0.985) dirRight = false; else if (p < 0.015) dirRight = true;
  const a = Math.acos(1 - 2 * clamp(p, 0, 1));
  phase = dirRight ? a : 2 * Math.PI - a;
  needSync = false;
}
function autoTick(now) {
  requestAnimationFrame(autoTick);
  const dt = Math.min(64, now - lastT); lastT = now;
  if (calm.matches) return;
  if (down || modal.open) {                                      // dragging or viewing a piece: stop at once, wait before resuming
    if (down && p !== lastP) dirRight = p > lastP;
    lastP = p; resumeAt = now + (down ? 2200 : 1200); ramp = 0; needSync = true;
    return;
  }
  if (!artSeen || document.hidden || now < resumeAt) return;
  if (needSync) syncAuto();
  ramp = Math.min(1, ramp + dt / 1500);                           // ease the speed back in
  phase = (phase + dt / CYCLE * 2 * Math.PI * ramp * ramp * (3 - 2 * ramp)) % (2 * Math.PI);
  p = (1 - Math.cos(phase)) / 2; lastP = p;                       // eases to a stop at each end, then back
  paintAuto();
}
requestAnimationFrame(autoTick);

/* ---- Cards: 3D tilt + glow follow, scroll reveal, click ripple ---- */
const finePtr = matchMedia("(hover: hover) and (pointer: fine)");
let hot = null, hotRect = null, hotScroll = [0, 0], tRaf = 0, tx0 = 0, ty0 = 0;
const rest = el => { el.style.setProperty("--rx", "0deg"); el.style.setProperty("--ry", "0deg"); };
function tiltFrame() {
  tRaf = 0; if (!hot) return;
  const left = hotRect.left - (scrollX - hotScroll[0]), top = hotRect.top - (scrollY - hotScroll[1]);
  const x = clamp((tx0 - left) / hotRect.width, 0, 1), y = clamp((ty0 - top) / hotRect.height, 0, 1);
  hot.style.setProperty("--ry", ((x - 0.5) * 10).toFixed(2) + "deg");
  hot.style.setProperty("--rx", ((0.5 - y) * 10).toFixed(2) + "deg");
  hot.style.setProperty("--mx", (x * 100).toFixed(1) + "%");
  hot.style.setProperty("--my", (y * 100).toFixed(1) + "%");
}
document.addEventListener("pointermove", e => {
  if (e.pointerType !== "mouse" || !finePtr.matches || calm.matches) return;
  const el = e.target.closest ? e.target.closest(".panel") : null;
  if (el !== hot) {
    if (hot) rest(hot);
    hot = el;
    if (hot) { rest(hot); hotRect = hot.getBoundingClientRect(); hotScroll = [scrollX, scrollY]; }   // measured before tilting, so the tilt can't feed back
  }
  if (!hot) return;
  tx0 = e.clientX; ty0 = e.clientY;
  if (!tRaf) tRaf = requestAnimationFrame(tiltFrame);
});
document.documentElement.addEventListener("pointerleave", () => { if (hot) rest(hot); hot = null; });

const revealIO = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); revealIO.unobserve(e.target); } }), { threshold: 0.15 });
document.querySelectorAll(".panel, .wrap h2").forEach((el, i) => { el.classList.add("reveal"); el.style.setProperty("--d", (i % 3) * 90 + "ms"); revealIO.observe(el); });

function ripple(el, x, y) {
  const r = el.getBoundingClientRect(), host = el.closest("dialog[open]") || document.body;
  const layer = document.createElement("span"), dot = document.createElement("i");
  const size = Math.hypot(Math.max(x - r.left, r.right - x), Math.max(y - r.top, r.bottom - y)) * 2;
  layer.className = "ripple-layer";
  layer.style.cssText = `left:${r.left}px;top:${r.top}px;width:${r.width}px;height:${r.height}px;border-radius:${getComputedStyle(el).borderRadius}`;
  dot.style.cssText = `width:${size}px;height:${size}px;left:${x - r.left - size / 2}px;top:${y - r.top - size / 2}px`;
  layer.appendChild(dot); host.appendChild(layer);
  dot.addEventListener("animationend", () => layer.remove());
}
const RIPPLE_SEL = ".panel, .vpreview, .vfiles a, .inside a, .filesbtn, #vBack, .vbody img, dialog img, dialog button";
document.addEventListener("pointerdown", e => {
  if (e.button > 0 || calm.matches) return;
  const el = e.target.closest ? e.target.closest(RIPPLE_SEL) : null;
  if (el) ripple(el, e.clientX, e.clientY);
});
document.addEventListener("pointerup", e => {                      // artwork: a real click ripples, a drag does not
  if (calm.matches || moved >= 6) return;
  const hit = document.elementFromPoint(e.clientX, e.clientY);
  const el = hit && hit.closest ? hit.closest(".slide") : null;
  if (el) ripple(el, e.clientX, e.clientY);
});