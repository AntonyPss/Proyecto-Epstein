const chapters = [
    {
        scene: "nyc",
        chapter: "CAPÍTULO 01",
        title: "El arresto de Miami",
        story: "Noviembre de 2006. Jeffrey Epstein vuelve de París en su jet privado y es detenido en el aeropuerto de Miami. En su equipaje los agentes encuentran pasaportes falsos de varios países y una cantidad astronómica de efectivo escondido entre los billetes.",
        fact: "Los agentes encontraron unos 570.000 dólares en efectivo, gran parte de ellos doblados dentro de revistas y periódicos del asiento.",
        event: "El expediente se abre con un acertijo que el propio fiscal dejó como pista. Resuélvelo para continuar la investigación.",
        win: "Correcto. La pista del fiscal te lleva al siguiente documento del expediente.",
        lose: "Esa no era la respuesta. El expediente marca un error y la presión aumenta.",
        challenge: {
            type: "choice",
            prompt: "Adivinanza del investigador: «Tengo ciudades pero no casas, montañas pero no árboles, y agua pero no peces. ¿Qué soy?»",
            options: [
                { label: "Un mapa", correct: true },
                { label: "Un sueño", correct: false },
                { label: "Un cuadro", correct: false },
                { label: "Un laberinto", correct: false },
            ],
            feedback: {
                ok: "Un mapa: representa el mundo sin contenerlo. La siguiente página del expediente se abre.",
                ko: "No era eso. Vuelve a leer la adivinanza y descarta lo imposible.",
            },
        },
    },
    {
        scene: "palmbeach",
        chapter: "CAPÍTULO 02",
        title: "La mansión de Palm Beach",
        story: "Palm Beach, Florida. Desde la mansión de la calle El Brillo, Epstein construyó durante décadas una red de contactos que incluía políticos, financieros y miembros de la realeza. Aquí es donde las primeras acusadoras empezaron a hablar.",
        fact: "Virginia Giuffre declaró haber sido reclutada a los 16 años por Ghislaine Maxwell, quien trabajaba como asistente personal de Epstein.",
        event: "En los archivos del condado hay un número que cambió el caso. Escribe la respuesta exacta.",
        win: "Exacto. El número encaja con los documentos judiciales y la investigación avanza.",
        lose: "Respuesta incorrecta. El archivo se cierra parcialmente y pierdes tiempo.",
        challenge: {
            type: "text",
            prompt: "Tras el acuerdo de 2008, Epstein cumplió condena en la cárcel del condado de Palm Beach. ¿Cuántos meses pasó realmente entre rejas? (Escribe solo el número).",
            placeholder: "Ej: más de 12",
            answer: "13",
            numeric: true,
            feedback: {
                ok: "Correcto: unos 13 meses, con salidas diarias para trabajar. El acuerdo generó escándalo nacional.",
                ko: "No coincide con los registros. Recuerda que el acuerdo fue muy favorable para él.",
            },
        },
    },
    {
        scene: "island",
        chapter: "CAPÍTULO 03",
        title: "Little St. James",
        story: "En las Islas Vírgenes de EE. UU. se alza una isla privada de apenas 22 hectáreas: Little St. James. Tenía su propia pista de aterrizaje, helipuerto, una casa principal de tres pisos y una playa que nunca apareció en postales.",
        fact: "En 2019 el FBI registró la isla durante varios días y se incautó material que incluía «cajas azules» con documentos y dispositivos electrónicos.",
        event: "Las fotografías del registro muestran objetos concretos. ¿Cuál aparece documentado en el inventario?",
        win: "Correcto. El inventario del FBI confirma lo que muchos sospechaban.",
        lose: "Esa opción no figura en el inventario. Revisa las pistas visuales de la escena.",
        challenge: {
            type: "crossword",
            prompt: "Las pistas del registro forman un mini crucigrama. Toca cada casilla para cambiar la letra (A→Z) hasta completar las tres palabras que se cruzan.",
            size: 5,
            words: [
                {
                    clue: "Horizontal · La isla privada de Epstein en el Caribe",
                    answer: "ISLA",
                    cells: [[1, 0], [1, 1], [1, 2], [1, 3]],
                },
                {
                    clue: "Vertical · Un pueblo pequeño",
                    answer: "ALDEA",
                    cells: [[0, 2], [1, 2], [2, 2], [3, 2], [4, 2]],
                },
                {
                    clue: "Horizontal · Precipitación blanca del invierno",
                    answer: "NIEVE",
                    cells: [[3, 0], [3, 1], [3, 2], [3, 3], [3, 4]],
                },
            ],
            feedback: {
                ok: "Crucigrama resuelto: ISLA, ALDEA y NIEVE. La niebla se disipa sobre el mapa del caso.",
                ko: "El crucigrama aún tiene letras incorrectas. Revisa las palabras que se cruzan.",
            },
        },
    },
    {
        scene: "desert",
        chapter: "CAPÍTULO 04",
        title: "Zorro Ranch",
        story: "Nuevo México. En las montañas cerca de Truth or Consequences, Epstein poseía un rancho enorme llamado Zorro Ranch. Los documentos lo describen como un refugio con pista de aterrizaje propia, ganado y una soledad absoluta.",
        fact: "El rancho tenía su propia pista de aterrizaje y una casa principal que los investigadores asociaron con reuniones privadas.",
        event: "Para llegar al rancho necesitas el nombre exacto que aparece en los títulos de propiedad.",
        win: "Correcto. Los títulos de propiedad coinciden y el expediente avanza al capítulo final.",
        lose: "El nombre no figura así en los registros. Inténtalo de nuevo.",
        challenge: {
            type: "text",
            prompt: "Escribe el nombre del rancho de Epstein en Nuevo México (solo la primera palabra, sin mayúsculas).",
            placeholder: "Ej: es un animal astuto",
            answer: ["zorro", "zorroranch"],
            feedback: {
                ok: "Zorro Ranch: el refugio del desierto. El último capítulo del expediente se abre.",
                ko: "Ese no es el nombre del rancho. Empieza por la letra Z.",
            },
        },
    },
    {
        scene: "london",
        chapter: "CAPÍTULO 05",
        title: "La red de Londres",
        story: "Londres. Mientras Epstein mantenía sus propiedades en EE. UU., su exnovia y exasistente Ghislaine Maxwell operaba desde una casa en Belgravia. Allí vivía entre lujos, una biblioteca y una vida social que ocultaba una década de abusos.",
        fact: "Maxwell fue detenida en noviembre de 2020 mientras se escondía en una casa de los alrededores de Londres, y en 2022 fue condenada a 20 años de prisión.",
        event: "El expediente termina con la condena de Maxwell. Elige la pena que dictó el jurado.",
        win: "Correcto. La condena cerró el círculo judicial… o eso parecía.",
        lose: "Esa no fue la condena. El jurado dictó una pena distinta en diciembre de 2022.",
        challenge: {
            type: "choice",
            prompt: "¿A cuántos años de prisión fue condenada Ghislaine Maxwell en 2022 por reclutar menores para Epstein?",
            options: [
                { label: "10 años", correct: false },
                { label: "Cadena perpetua", correct: false },
                { label: "5 años", correct: false },
                { label: "20 años", correct: true },
            ],
            feedback: {
                ok: "20 años: la pena que puso punto final a una de las mayores redes de abuso de su generación.",
                ko: "La pena fue mayor de lo que recuerdas. Fue dictada en diciembre de 2022.",
            },
        },
    },
];
const endings = {
    perfect: {
        icon: "🗂️",
        eyebrow: "¡Expediente completo!",
        title: "La verdad al descubierto",
        text: "Resolviste los cinco capítulos sin un solo error. Reconstruiste la red completa: del arresto de Miami a la isla, el rancho y Londres. Los documentos que hoy sacuden al mundo estuvieron siempre ahí; solo faltaba alguien que los leyera con atención.",
        photo: "assets/images/island-escape.jpg",
        rank: "Rango: Detective de élite",
        screamer: false,
    },
    partial: {
        icon: "🕵️",
        eyebrow: "Caso resuelto… a medias",
        title: "Verdad a medias",
        text: "Llegaste al final del expediente, pero algunos nombres quedaron borrosos en tu memoria. La verdad tiene muchos niveles y hoy solo rasgaste la superficie; la niebla de los archivos sigue esperando a quien vuelva a abrirlos.",
        photo: "assets/images/island-haze.jpg",
        rank: "Rango: Cronista incansable",
        screamer: false,
    },
    fail: {
        icon: "🕳️",
        eyebrow: "Fin de la investigación",
        title: "El expediente se cerró",
        text: "Tres errores y el caso se archivó. Los documentos vuelven a su caja fuerte, los nombres a su silencio, y la verdad —como tantas veces— queda sepultada bajo el peso de los que no quieren que se sepa. Siempre puedes volver a empezar la investigación.",
        photo: null,
        rank: "Rango: Práctica archivada",
        screamer: true,
    },
};
let round = 0;
let mistakes = 0;
let solved = 0;
let firstTry = 0;
let roundAttempts = 0;
let locked = false;
let screamerTimer = null;
const MAX_MISTAKES = 3;
const TOTAL_CHAPTERS = chapters.length;
const ambientAudio = document.getElementById("ambient-audio");
const screamerAudio = document.getElementById("screamer-audio");
const impactAudio = document.getElementById("impact-audio");
const ambientTracks = [
    "assets/sounds/horror-ambient.wav",
    "assets/sounds/rising-tension.wav",
];
let ambientTrackIndex = 0;
ambientAudio.volume = 0.24;
screamerAudio.volume = 0.18;
impactAudio.volume = 0.32;

const sfx = {
    click: new Audio("assets/sounds/sfx-click.wav"),
    correct: new Audio("assets/sounds/sfx-correct.wav"),
    wrong: new Audio("assets/sounds/sfx-wrong.wav"),
    page: new Audio("assets/sounds/sfx-page.wav"),
    win: new Audio("assets/sounds/sfx-win.wav"),
};
Object.values(sfx).forEach((audio) => {
    audio.preload = "auto";
    audio.volume = 0.4;
});
sfx.wrong.volume = 0.3;

function playSfx(name) {
    const audio = sfx[name];
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(() => {
        console.warn(`El navegador bloqueó el sonido ${name}.`);
    });
}

const $ = (id) => document.getElementById(id);
const startScreen = $("start-screen");
const dossierScreen = $("dossier-screen");
const roundScreen = $("round-screen");
const endScreen = $("end-screen");
const storyIntro = $("story-intro");
const puzzleBox = $("puzzle");
const roundGrid = document.querySelector(".round-grid");
const resultBox = $("result");
const nextButton = $("next-button");
const narratorBox = $("narrator");
const narratorText = $("narrator-text");
const narratorWho = narratorBox.querySelector(".narrator-who");

let typeTimer = null;
let typeFullText = "";

function say(text, who = "EL CASO") {
    if (typeTimer) clearInterval(typeTimer);
    typeTimer = null;
    typeFullText = text;
    narratorWho.textContent = who;
    narratorText.textContent = "";
    let i = 0;
    typeTimer = setInterval(() => {
        i += 2;
        narratorText.textContent = text.slice(0, i);
        if (i >= text.length) {
            clearInterval(typeTimer);
            typeTimer = null;
            narratorText.textContent = text;
        }
    }, 24);
}

narratorBox.addEventListener("click", () => {
    if (typeTimer) {
        clearInterval(typeTimer);
        typeTimer = null;
        narratorText.textContent = typeFullText;
    }
});

function showScreen(screen) {
    [startScreen, dossierScreen, roundScreen, endScreen].forEach(
        (item) => (item.hidden = item !== screen),
    );
}

function beginGame() {
    if (screamerTimer) {
        clearTimeout(screamerTimer);
        screamerTimer = null;
    }
    $("screamer-overlay").hidden = true;
    screamerAudio.pause();
    screamerAudio.currentTime = 0;
    impactAudio.pause();
    impactAudio.currentTime = 0;
    ambientTrackIndex = 0;
    ambientAudio.src = ambientTracks[ambientTrackIndex];
    ambientAudio.load();
    ambientAudio.play().catch(() => {
        console.warn(
            "El navegador bloqueó el audio ambiental hasta otra interacción.",
        );
    });
    playSfx("page");
    round = 0;
    mistakes = 0;
    solved = 0;
    firstTry = 0;
    roundAttempts = 0;
    updateProgress();
    loadRound();
    showScreen(roundScreen);
}

function updateProgress() {
    for (let i = 1; i <= TOTAL_CHAPTERS; i++)
        $("progress-" + i).className = i <= solved ? "won" : "";
    $("loss-count").textContent = mistakes;
    $("top-progress").style.width =
        `${(solved / TOTAL_CHAPTERS) * 100}%`;
    const left = Math.max(0, MAX_MISTAKES - mistakes);
    $("hearts").textContent = "♥ ".repeat(left).trim() || "—";
    $("hearts").setAttribute(
        "aria-label",
        `${left} oportunidades restantes`,
    );
}

function normalizeAnswer(value, numeric) {
    const clean = value.trim().toLowerCase()
        .normalize("NFD").replace(/\p{M}/gu, "");

    if (numeric) {
        return clean.replace(/\D/g, "").replace(/^0+/, "") || "0";
    }
    return clean.replace(/[^a-z0-9]/g, "");
}

function answerMatches(value, challenge) {
    const answers = Array.isArray(challenge.answer)
        ? challenge.answer
        : [challenge.answer];
    const given = normalizeAnswer(value, challenge.numeric);
    return answers.some(
        (answer) => normalizeAnswer(answer, challenge.numeric) === given,
    );
}

function buildPuzzle(challenge) {
    puzzleBox.innerHTML = "";
    puzzleBox.className = "puzzle";
    const prompt = document.createElement("p");
    prompt.className = "puzzle-prompt";
    prompt.textContent = challenge.prompt;
    puzzleBox.appendChild(prompt);

    if (challenge.type === "choice") {
        const grid = document.createElement("div");
        grid.className =
            "choices" + (challenge.options.length > 3 ? " choices--four" : "");
        grid.setAttribute("role", "group");
        grid.setAttribute("aria-label", "Elige tu respuesta");
        challenge.options.forEach((option) => {
            const button = document.createElement("button");
            button.className = "choice";
            button.type = "button";
            const label = document.createElement("span");
            label.textContent = option.label;
            button.appendChild(label);
            button.addEventListener("click", () => submitChoice(option, button));
            grid.appendChild(button);
        });
        puzzleBox.appendChild(grid);
    } else if (challenge.type === "crossword") {
        buildCrossword(challenge);
    } else {
        const form = document.createElement("form");
        form.className = "puzzle-form";
        const input = document.createElement("input");
        input.type = "text";
        input.className = "puzzle-input";
        input.placeholder = challenge.placeholder || "Escribe tu respuesta";
        input.autocomplete = "off";
        input.setAttribute("aria-label", "Tu respuesta");
        const submit = document.createElement("button");
        submit.type = "submit";
        submit.className = "button puzzle-submit fab";
        submit.textContent = "Confirmar ";
        const arrow = document.createElement("span");
        arrow.setAttribute("aria-hidden", "true");
        arrow.textContent = "→";
        submit.appendChild(arrow);
        form.appendChild(input);
        form.appendChild(submit);
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            submitText(input.value.trim());
        });
        puzzleBox.appendChild(form);
        input.focus();
    }
}

function buildCrossword(challenge) {
    const size = challenge.size;
    const cellMap = new Map();
    challenge.words.forEach((word) => {
        word.cells.forEach(([r, c], i) => {
            cellMap.set(`${r},${c}`, { word, index: i });
        });
    });

    const grid = document.createElement("div");
    grid.className = "crossword";
    grid.style.setProperty("--cw-size", size);
    const inputs = new Map();

    const focusCell = (r, c) => {
        const input = inputs.get(`${r},${c}`);
        if (input && !input.disabled) {
            input.focus();
            input.select();
        }
    };

    const advanceFrom = (r, c) => {
        const info = cellMap.get(`${r},${c}`);
        if (!info) return;
        const { word, index } = info;
        const next = word.cells[index + 1];
        if (next) {
            focusCell(next[0], next[1]);
            return;
        }
        const wi = challenge.words.indexOf(word);
        const following = challenge.words
            .slice(wi + 1)
            .find((w) => w.cells.length);
        if (following) focusCell(following.cells[0][0], following.cells[0][1]);
    };

    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            const key = `${r},${c}`;
            if (!cellMap.has(key)) {
                const blocked = document.createElement("div");
                blocked.className = "cw-cell cw-cell--blocked";
                blocked.setAttribute("aria-hidden", "true");
                grid.appendChild(blocked);
                continue;
            }
            const input = document.createElement("input");
            input.type = "text";
            input.className = "cw-cell";
            input.maxLength = 1;
            input.autocomplete = "off";
            input.setAttribute("autocapitalize", "characters");
            input.setAttribute("aria-label", `Casilla fila ${r + 1}, columna ${c + 1}`);
            input.addEventListener("input", () => {
                input.value = input.value
                    .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ]/g, "")
                    .slice(-1)
                    .toUpperCase();
                input.classList.remove("cw-cell--wrong", "cw-cell--right");
                advanceFrom(r, c);
            });
            input.addEventListener("keydown", (event) => {
                if (event.key === "Backspace" && !input.value) {
                    const info = cellMap.get(key);
                    const prev = info.word.cells[info.index - 1];
                    if (prev) {
                        event.preventDefault();
                        focusCell(prev[0], prev[1]);
                    }
                }
            });
            inputs.set(key, input);
            grid.appendChild(input);
        }
    }
    puzzleBox.appendChild(grid);

    const clues = document.createElement("ul");
    clues.className = "cw-clues";
    challenge.words.forEach((word) => {
        const item = document.createElement("li");
        item.textContent = word.clue;
        clues.appendChild(item);
    });
    puzzleBox.appendChild(clues);

    const actions = document.createElement("div");
    actions.className = "cw-actions";

    const clear = document.createElement("button");
    clear.type = "button";
    clear.className = "cw-clear";
    clear.textContent = "Limpiar";
    clear.addEventListener("click", () => {
        inputs.forEach((input) => {
            input.value = "";
            input.classList.remove("cw-cell--wrong", "cw-cell--right");
        });
        resultBox.className = "result";
        resultBox.textContent = "";
        const first = challenge.words[0].cells[0];
        focusCell(first[0], first[1]);
    });
    actions.appendChild(clear);

    const check = document.createElement("button");
    check.type = "button";
    check.className = "button cw-check fab";
    check.textContent = "Comprobar crucigrama ";
    const arrow = document.createElement("span");
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "→";
    check.appendChild(arrow);
    check.addEventListener("click", () =>
        checkCrossword(challenge, inputs),
    );
    actions.appendChild(check);
    puzzleBox.appendChild(actions);
}

function checkCrossword(challenge, inputs) {
    if (locked) return;
    locked = true;
    let wrong = 0;
    challenge.words.forEach((word) => {
        word.cells.forEach(([r, c], i) => {
            const input = inputs.get(`${r},${c}`);
            const given = input.value.trim().toUpperCase();
            const expected = word.answer[i];
            const ok = given === expected;
            input.classList.toggle("cw-cell--wrong", !ok);
            input.classList.toggle("cw-cell--right", ok);
            if (!ok) wrong++;
        });
    });
    if (wrong === 0) {
        solved++;
        if (roundAttempts === 0) firstTry++;
        playSfx("correct");
        puzzleBox.querySelectorAll("input, button").forEach((el) => {
            el.disabled = true;
        });
        puzzleBox.querySelector(".cw-check").hidden = true;
        resultBox.className = "result";
        resultBox.textContent = challenge.feedback.ok;
        say(chapters[round].win);
        nextButton.textContent =
            round === TOTAL_CHAPTERS - 1 ? "Ver desenlace →" : "Siguiente capítulo →";
        nextButton.hidden = false;
        updateProgress();
        return;
    }
    resultBox.className = "result bad";
    resultBox.textContent = `${wrong} letra${wrong === 1 ? "" : "s"} incorrecta${wrong === 1 ? "" : "s"}. ${challenge.feedback.ko}`;
    playSfx("wrong");
    roundAttempts++;
    say("El crucigrama aún no encaja. Sigue probando.");
    setTimeout(() => {
        locked = false;
    }, 900);
}

function submitChoice(option, button) {
    if (locked) return;
    locked = true;
    playSfx("click");
    roundAttempts++;
    [...puzzleBox.querySelectorAll(".choice")].forEach((b) => {
        b.disabled = true;
        if (b === button) b.classList.add("choice--picked");
    });
    evaluate(option.correct);
}

function submitText(value) {
    if (locked || !value) return;
    locked = true;
    playSfx("click");
    roundAttempts++;
    evaluate(answerMatches(value, chapters[round].challenge));
}

function evaluate(ok) {
    const chapter = chapters[round];
    const challenge = chapter.challenge;
    if (ok) {
        solved++;
        if (roundAttempts === 1) firstTry++;
        playSfx("correct");
        puzzleBox.querySelectorAll("input, button").forEach((el) => {
            el.disabled = true;
        });
        puzzleBox.querySelectorAll(".puzzle-submit, .cw-check").forEach(
            (el) => (el.hidden = true),
        );
        resultBox.className = "result";
        resultBox.textContent = challenge.feedback.ok;
        say(chapter.win, "EXPEDIENTE");
        nextButton.textContent =
            round === TOTAL_CHAPTERS - 1 ? "Ver desenlace →" : "Siguiente capítulo →";
        nextButton.hidden = false;
    } else {
        mistakes++;
        playSfx("wrong");
        resultBox.className = "result bad";
        resultBox.textContent = challenge.feedback.ko;
        say(chapter.lose, "EL CASO");
        updateProgress();
        if (mistakes >= MAX_MISTAKES) {
            nextButton.textContent = "Ver desenlace →";
            nextButton.hidden = false;
        } else {
            setTimeout(() => {
                locked = false;
                resultBox.className = "result";
                resultBox.textContent = "";
                const input = puzzleBox.querySelector(".puzzle-input");
                if (input) {
                    input.disabled = false;
                    input.value = "";
                    input.focus();
                } else {
                    puzzleBox.querySelectorAll(".choice").forEach((b) => {
                        b.disabled = false;
                        b.classList.remove("choice--picked");
                    });
                }
            }, 1400);
        }
    }
    updateProgress();
}

function loadRound(showStory = true) {
    const chapter = chapters[round];
    $("round-status").textContent = `${round + 1} de ${TOTAL_CHAPTERS}`;
    $("story-scene").className = `story-scene scene-${chapter.scene}`;
    $("story-chapter").textContent = chapter.chapter;
    $("story-title").textContent = chapter.title;
    $("story-text").textContent = chapter.story;
    $("story-fact").textContent = chapter.fact;
    say(
        round === 0
            ? `${chapter.event} Cada error te acerca al archivo final.`
            : `${chapter.event} ${round === TOTAL_CHAPTERS - 1 ? "El último acertijo decidirá tu rango." : "La investigación se complica, pero continúa."}`,
    );
    resultBox.className = "result";
    resultBox.textContent = "";
    nextButton.hidden = true;
    buildPuzzle(chapter.challenge);
    storyIntro.hidden = !showStory;
    roundGrid.hidden = showStory;
    puzzleBox.hidden = showStory;
    locked = showStory;
    updateProgress();
}

function revealBattle() {
    playSfx("page");
    storyIntro.hidden = true;
    roundGrid.hidden = false;
    puzzleBox.hidden = false;
    locked = false;
    $("narrator").focus();
}

function nextStep() {
    if (!locked) return;
    locked = false;
    if (mistakes >= MAX_MISTAKES) {
        showEnding("fail");
        return;
    }
    if (round < TOTAL_CHAPTERS - 1) {
        playSfx("page");
        round++;
        roundAttempts = 0;
        loadRound(true);
        return;
    }
    showEnding(mistakes === 0 ? "perfect" : "partial");
}

function showEnding(tier) {
    const ending = endings[tier];
    showScreen(endScreen);
    $("ending").className = tier === "fail" ? "ending fail" : "ending";
    $("ending-icon").textContent = ending.icon;
    $("ending-screamer").hidden = !ending.screamer;
    const photoBox = $("ending-photo");
    photoBox.hidden = !ending.photo;
    if (ending.photo) $("ending-photo-img").src = ending.photo;
    $("ending-eyebrow").textContent = ending.eyebrow;
    $("ending-title").textContent = ending.title;
    $("ending-text").textContent = ending.text;
    $("ending-rank").textContent =
        `${ending.rank} · ${firstTry}/${TOTAL_CHAPTERS} capítulos a la primera · ${mistakes} errores`;
    if (ending.screamer) {
        const overlay = $("screamer-overlay");
        overlay.hidden = false;
        overlay.classList.remove("screamer-overlay--fade-out");
        $("ending").classList.add("ending--waiting");
        ambientAudio.pause();
        impactAudio.currentTime = 0;
        impactAudio.play().catch(() => {
            console.warn("El navegador bloqueó el sonido de impacto.");
        });
        screamerAudio.currentTime = 0;
        screamerAudio.play().catch(() => {
            console.warn("El navegador bloqueó el audio del screamer.");
        });
        screamerTimer = setTimeout(() => {
            overlay.classList.add("screamer-overlay--fade-out");
            $("ending").classList.remove("ending--waiting");
            setTimeout(() => {
                overlay.hidden = true;
                overlay.classList.remove("screamer-overlay--fade-out");
            }, 900);
        }, 2200);
    } else {
        ambientAudio.pause();
        playSfx("win");
    }
}

function returnToStart() {
    if (screamerTimer) {
        clearTimeout(screamerTimer);
        screamerTimer = null;
    }
    ambientAudio.pause();
    screamerAudio.pause();
    screamerAudio.currentTime = 0;
    impactAudio.pause();
    impactAudio.currentTime = 0;
    $("screamer-overlay").hidden = true;
    $("screamer-overlay").classList.remove("screamer-overlay--fade-out");
    showScreen(startScreen);
}

ambientAudio.addEventListener("ended", () => {
    ambientTrackIndex = (ambientTrackIndex + 1) % ambientTracks.length;
    ambientAudio.src = ambientTracks[ambientTrackIndex];
    ambientAudio.play().catch(() => {
        console.warn("El navegador bloqueó el siguiente ambiente.");
    });
});

$("start-button").addEventListener("click", () => {
    playSfx("click");
    beginGame();
});
$("dossier-start").addEventListener("click", () => {
    playSfx("click");
    beginGame();
});
$("dossier-button").addEventListener("click", () => {
    playSfx("click");
    showScreen(dossierScreen);
});
$("dossier-back").addEventListener("click", () => {
    playSfx("click");
    showScreen(startScreen);
});
$("restart-button").addEventListener("click", () => {
    playSfx("click");
    returnToStart();
});
nextButton.addEventListener("click", () => {
    playSfx("click");
    nextStep();
});
$("story-next").addEventListener("click", revealBattle);
$("story-skip").addEventListener("click", revealBattle);
