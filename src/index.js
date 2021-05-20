import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";

//create header (title + navigator)
const content = document.querySelector("#content");

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

//create body (create by another modules)
const bodyDiv = document.createElement("div");
bodyDiv.id = "body";

//create footer (Name + github)
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
content.append(headerDiv, bodyDiv, footerDiv);

//Navigator events
homeBtn.addEventListener("click", (e) => {
	if (e.target.classList.contains("active")) return;
	setActive(homeBtn);
	clearBody();
	createHome();
});
menuBtn.addEventListener("click", (e) => {
	if (e.target.classList.contains("active")) return;
	setActive(menuBtn);
	clearBody();
	createMenu();
});
contactBtn.addEventListener("click", (e) => {
	if (e.target.classList.contains("active")) return;
	setActive(contactBtn);
	clearBody();
	createContact();
});

function setActive(button) {
	const buttons = document.querySelectorAll(".navBtn");
	buttons.forEach((btn) => {
		btn.classList.remove("active");
	});
	button.classList.add("active");
}
function clearBody() {
	while (bodyDiv.firstChild) {
		bodyDiv.removeChild(bodyDiv.firstChild);
	}
}
setActive(homeBtn);
createHome();
