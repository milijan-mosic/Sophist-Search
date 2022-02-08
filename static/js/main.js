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
			break;
		case 1:
			btn_ddg.classList.remove("button_active");
			btn_srx.classList.add("button_active");
			btn_swc.classList.remove("button_active");
			btn_eco.classList.remove("button_active");
			searchbox.setAttribute("name", "q");
			break;
		case 2:
			btn_ddg.classList.remove("button_active");
			btn_srx.classList.remove("button_active");
			btn_swc.classList.add("button_active");
			btn_eco.classList.remove("button_active");
			searchbox.setAttribute("name", "query");
			break;
		case 3:
			btn_ddg.classList.remove("button_active");
			btn_srx.classList.remove("button_active");
			btn_swc.classList.remove("button_active");
			btn_eco.classList.add("button_active");
			searchbox.setAttribute("name", "q");
			break;
	}
	search_form.action = search_engines_urls[id];
}

ActivateButton(0);
searchbox.focus();