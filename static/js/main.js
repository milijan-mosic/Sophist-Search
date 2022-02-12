let btn_ddg = document.getElementById("btn_ddg");
let btn_srx = document.getElementById("btn_srx");
let btn_swc = document.getElementById("btn_swc");
let btn_eco = document.getElementById("btn_eco");

let search_form = document.getElementById("search_form");
let searchbox = document.getElementById("searchbox");

let search_engines_urls = [
	"https://duckduckgo.com/",
	"https://searx.tiekoetter.com/",
	"https://swisscows.com/web",
	"https://www.ecosia.org/search",
];

function ActivateButton(id) {
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

function ReturningUser() {
	if (localStorage.getItem("search_engine") == "DDG") {
		ActivateButton(0);
	}
	if (localStorage.getItem("search_engine") == "SRX") {
		ActivateButton(1);
	}
	if (localStorage.getItem("search_engine") == "SWC") {
		ActivateButton(2);
	}
	if (localStorage.getItem("search_engine") == "ECO") {
		ActivateButton(3);
	}
}

ReturningUser();
searchbox.focus();
