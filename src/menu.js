function createDish0() {
	const dish0Div = document.createElement("div");
	dish0Div.classList = "dishDiv";
	const dish0Img = document.createElement("img");
	dish0Img.src = "images/dish0Whopper.webp";
	dish0Img.classList = "dishImg";
	const dish0Name = document.createElement("h3");
	dish0Name.innerText = "Whopper";
	dish0Name.classList = "dishName";
	const dish0Cal = document.createElement("p");
	dish0Cal.innerText = "657-872 Cal";
	dish0Cal.classList = "dishCal";
	dish0Div.append(dish0Img, dish0Name, dish0Cal);
	return dish0Div;
}

function createDish1() {
	const dish1Div = document.createElement("div");
	dish1Div.classList = "dishDiv";
	const dish1Img = document.createElement("img");
	dish1Img.src = "images/dish1BaconKing .webp";
	dish1Img.classList = "dishImg";
	const dish1Name = document.createElement("h3");
	dish1Name.innerText = "Bacon King";
	dish1Name.classList = "dishName";
	const dish1Cal = document.createElement("p");
	dish1Cal.innerText = "1,313 Cal";
	dish1Cal.classList = "dishCal";
	dish1Div.append(dish1Img, dish1Name, dish1Cal);
	return dish1Div;
}

function createDish2() {
	const dish2Div = document.createElement("div");
	dish2Div.classList = "dishDiv";
	const dish2Img = document.createElement("img");
	dish2Img.src = "images/dish2DoubleWhopper.webp";
	dish2Img.classList = "dishImg";
	const dish2Name = document.createElement("h3");
	dish2Name.innerText = "Double Whopper";
	dish2Name.classList = "dishName";
	const dish2Cal = document.createElement("p");
	dish2Cal.innerText = "1,313 Cal";
	dish2Cal.classList = "dishCal";
	dish2Div.append(dish2Img, dish2Name, dish2Cal);
	return dish2Div;
}

function createDish3() {
	const dish3Div = document.createElement("div");
	dish3Div.classList = "dishDiv";
	const dish3Img = document.createElement("img");
	dish3Img.src = "images/dish3ImpossibleWhopper .webp";
	dish3Img.classList = "dishImg";
	const dish3Name = document.createElement("h3");
	dish3Name.innerText = "Impossible™ Whopper";
	dish3Name.classList = "dishName";
	const dish3Cal = document.createElement("p");
	dish3Cal.innerText = "628 Cal";
	dish3Cal.classList = "dishCal";
	dish3Div.append(dish3Img, dish3Name, dish3Cal);
	return dish3Div;
}

function createDish4() {
	const dish4Div = document.createElement("div");
	dish4Div.classList = "dishDiv";
	const dish4Img = document.createElement("img");
	dish4Img.src = "images/dish4SingleSourdoughKing .webp";
	dish4Img.classList = "dishImg";
	const dish4Name = document.createElement("h3");
	dish4Name.innerText = "Single Sourdough King ";
	dish4Name.classList = "dishName";
	const dish4Cal = document.createElement("p");
	dish4Cal.innerText = "743 Cal";
	dish4Cal.classList = "dishCal";
	dish4Div.append(dish4Img, dish4Name, dish4Cal);
	return dish4Div;
}

function createDish5() {
	const dish5Div = document.createElement("div");
	dish5Div.classList = "dishDiv";
	const dish5Img = document.createElement("img");
	dish5Img.src = "images/dish5BigKingXL .webp";
	dish5Img.classList = "dishImg";
	const dish5Name = document.createElement("h3");
	dish5Name.innerText = "Big King XL";
	dish5Name.classList = "dishName";
	const dish5Cal = document.createElement("p");
	dish5Cal.innerText = "1,006 Cal";
	dish5Cal.classList = "dishCal";
	dish5Div.append(dish5Img, dish5Name, dish5Cal);
	return dish5Div;
}

function createMenu() {
	const bodyDiv = document.querySelector("#body");
	bodyDiv.innerHTML = "";
	const menuDiv = document.createElement("div");
	menuDiv.id = "menuDiv";
	menuDiv.append(
		createDish0(),
		createDish1(),
		createDish2(),
		createDish3(),
		createDish4(),
		createDish5()
	);
	bodyDiv.append(menuDiv);
}
export default createMenu;
