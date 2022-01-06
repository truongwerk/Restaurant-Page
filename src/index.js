//Import Module
import createHome from "./home.js";
import createMenu from "./menu.js";
import createContact from "./contact.js";

//create header (title + navigator)
function createHeader() {
	const headerDiv = document.createElement("div");
	headerDiv.id = "header";

	const titleH1 = document.createElement("h1");
	titleH1.id = "title";
	titleH1.innerText = "Burger XYZ";

	const navigator = document.createElement("nav");
	navigator.id = "navigator";

	const homeBtn = document.createElement("button");
	homeBtn.classList = "navBtn";
	homeBtn.id = "homeBtn";
	homeBtn.innerText = "Home";

	const menuBtn = document.createElement("button");
	menuBtn.classList = "navBtn";
	menuBtn.id = "menuBtn";
	menuBtn.innerText = "Menu";

	const contactBtn = document.createElement("button");
	contactBtn.classList = "navBtn";
	contactBtn.id = "contactBtn";
	contactBtn.innerText = "Contact";

	navigator.append(homeBtn, menuBtn, contactBtn);
	headerDiv.append(titleH1, navigator);
	return headerDiv;
}

//create body (create by another modules)
function createBody() {
	const bodyDiv = document.createElement("div");
	bodyDiv.id = "body";
	return bodyDiv;
}
function setActive(button) {
	const buttons = document.querySelectorAll(".navBtn");
	buttons.forEach((btn) => {
		btn.classList.remove("active");
	});
	button.classList.add("active");
}

//create footer (Name + github)
function createFooter() {
	const footerDiv = document.createElement("div");
	footerDiv.id = "footer";

	const nameH1 = document.createElement("h1");
	nameH1.id = "name";
	nameH1.innerText = "Tong Quang Truong 2021";

	const repoLink = document.createElement("a");
	repoLink.href = "https://github.com/truongwerk/Restaurant-Page";
	repoLink.target = "_blank";
	repoLink.id = "repoLink";

	const repoImage = document.createElement("img");
	repoImage.src = "images/github.svg";
	repoImage.alt = "githubLogo";

	repoLink.append(repoImage);
	footerDiv.append(nameH1, repoLink);

	return footerDiv;
}

//Create Website
(() => {
	const content = document.querySelector("#content");
	content.append(createHeader(), createBody(), createFooter());

	//Navigator events
	const homeBtn = document.querySelector("#homeBtn");
	homeBtn.addEventListener("click", (e) => {
		if (e.target.classList.contains("active")) return;
		setActive(homeBtn);
		createHome();
	});

	const menuBtn = document.querySelector("#menuBtn");
	menuBtn.addEventListener("click", (e) => {
		if (e.target.classList.contains("active")) return;
		setActive(menuBtn);
		createMenu();
	});

	const contactBtn = document.querySelector("#contactBtn");
	contactBtn.addEventListener("click", (e) => {
		if (e.target.classList.contains("active")) return;
		setActive(contactBtn);
		createContact();
	});

	setActive(homeBtn);
	createHome();
})();
