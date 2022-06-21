const btn_ddg = document.getElementById("btn_ddg") as HTMLElement;
const btn_srx = document.getElementById("btn_srx") as HTMLElement;
const btn_swc = document.getElementById("btn_swc") as HTMLElement;
const btn_eco = document.getElementById("btn_eco") as HTMLElement;

const search_form = document.getElementById("search_form") as HTMLFormElement;
const searchbox = document.getElementById("searchbox") as HTMLFormElement;

const search_engines_urls = [
  "https://duckduckgo.com/",
  "https://searx.tiekoetter.com/",
  "https://swisscows.com/web",
  "https://www.ecosia.org/search",
];

function ActivateButton(id: number) {
  switch (id) {
    case 0:
      btn_ddg.classList.add("button_active");
      btn_srx.classList.remove("button_active");
      btn_swc.classList.remove("button_active");
      btn_eco.classList.remove("button_active");
      searchbox.setAttribute("name", "q");
      localStorage.setItem("search_engine", "DDG");
      break;
    case 1:
      btn_ddg.classList.remove("button_active");
      btn_srx.classList.add("button_active");
      btn_swc.classList.remove("button_active");
      btn_eco.classList.remove("button_active");
      searchbox.setAttribute("name", "q");
      localStorage.setItem("search_engine", "SRX");
      break;
    case 2:
      btn_ddg.classList.remove("button_active");
      btn_srx.classList.remove("button_active");
      btn_swc.classList.add("button_active");
      btn_eco.classList.remove("button_active");
      searchbox.setAttribute("name", "query");
      localStorage.setItem("search_engine", "SWC");
      break;
    case 3:
      btn_ddg.classList.remove("button_active");
      btn_srx.classList.remove("button_active");
      btn_swc.classList.remove("button_active");
      btn_eco.classList.add("button_active");
      searchbox.setAttribute("name", "q");
      localStorage.setItem("search_engine", "ECO");
      break;
  }
  search_form.action = search_engines_urls[id];
}

let light_mode_on = true;
const mode_icon = document.getElementById("svg-path") as HTMLElement;

function ReturningUser() {
  if (localStorage.getItem("search_engine") === "DDG") {
    ActivateButton(0);
  }
  if (localStorage.getItem("search_engine") === "SRX") {
    ActivateButton(1);
  }
  if (localStorage.getItem("search_engine") === "SWC") {
    ActivateButton(2);
  }
  if (localStorage.getItem("search_engine") === "ECO") {
    ActivateButton(3);
  }

  if (localStorage.getItem("mode") === "dark") {
    light_mode_on = false;
    mode_icon.setAttribute("d", "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z");
  }
}

const app_body = document.getElementById("body") as HTMLElement;

function RenderMode() {
  if (light_mode_on === true) {
    app_body.classList.remove("dark-bg");
    app_body.classList.add("light-bg");
    mode_icon.setAttribute("d", "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z");
  } else {
    app_body.classList.remove("light-bg");
    app_body.classList.add("dark-bg");
    mode_icon.setAttribute(
      "d",
      "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
    );
  }
}

function ChangeMode() {
  light_mode_on = !light_mode_on;
  if (light_mode_on === true) {
    localStorage.setItem("mode", "light");
  } else {
    localStorage.setItem("mode", "dark");
  }
  RenderMode();
}

ReturningUser();
RenderMode();
searchbox.focus();
