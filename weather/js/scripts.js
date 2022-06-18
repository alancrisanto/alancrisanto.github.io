const hamButton = document.querySelector(".ham");
const navigation = document.querySelector(".navigation");

const displayList = () => {
	navigation.classList.toggle("responsive");
};

hamButton.addEventListener("click", displayList, false);

window.onresize = () => {
	if (window.innerWidth > 760) navigation.classList.remove("responsive");
};
