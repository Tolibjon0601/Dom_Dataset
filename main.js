const user = document.querySelector(".box");
import { arr } from "./data.js";

const renderData = () => {
	for (let i of arr) {
		const div = document.createElement("div");
		div.className = "user_block";
		div.innerHTML = `
    <h1>${i.name}</h1>
    <p>${i.email}</p>
    <p>${i.username}</p>
    `;
		box.append(div);
	}
};
renderData();
