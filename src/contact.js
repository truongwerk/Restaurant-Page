function createContact() {
	const bodyDiv = document.querySelector("#body");
	bodyDiv.innerHTML = "";
	const phoneNumber = document.createElement("p");
	phoneNumber.innerText = "Phone: 987-654-321";
	phoneNumber.id = "phoneNumber";
	const addrest = document.createElement("p");
	addrest.innerText =
		"Addrest: Dinh Tien Hoang, Hang Trong, Hoan Kiem, Ha Noi, Vietnam";
	addrest.id = "addrest";
	const map = document.createElement("img");
	map.src = "images/map.png";
	map.alt = "Map";
	map.id = "map";
	bodyDiv.append(phoneNumber, addrest, map);
}
export default createContact;
