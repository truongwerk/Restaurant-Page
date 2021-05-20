function createHome() {
	const bodyDiv = document.querySelector("#body");
	const welcome1H2 = document.createElement("h2");
	welcome1H2.innerText = "Hungry? We got you.";
	welcome1H2.classList = "welcome";
	const welcome2H2 = document.createElement("h2");
	welcome2H2.innerText = "Best fast food in your country.";
	welcome2H2.classList = "welcome";
	const burgerImg = document.createElement("img");
	burgerImg.src = "images/burger.jpg";
	burgerImg.alt = "Burger Image";
	burgerImg.id = "burgerImg";
	bodyDiv.append(welcome1H2, welcome2H2, burgerImg);
}
export default createHome;
