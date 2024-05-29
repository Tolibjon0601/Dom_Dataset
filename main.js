const box = document.querySelector(".box");
import { arr } from "./data.js";

const renderData = () => {
box.innerHTML=arr
.map((item)=>`
<div>
<h1>${item.name}</h1>
</div>
`)
};

renderData();
