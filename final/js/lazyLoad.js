// Progressive loading

// Select Images

let imagesToLoad = document.querySelectorAll("img[data-src]");

//  Optional parameters for IntersectionObserver
const imgOptions = {
	threshold: 0,
	rootMargin: "0px 0px -150px 0px",
};

// Replace src placeholder with data-src fucntion

const loadImages = (image) => {
	image.setAttribute("src", image.getAttribute("data-src"));
	image.onload = () => {
		image.removeAttribute("data-src");
	};
};

// Check if intersection observer is supported

if ("IntersectionObserver" in window) {
	// Intersection Observer, display images when scrolling

	const observer = new IntersectionObserver((items, observer) => {
		items.forEach((item) => {
			if (item.isIntersecting) {
				loadImages(item.target);
				observer.unobserve(item.target);
			}
		});
	}, imgOptions);

	imagesToLoad.forEach((img) => {
		observer.observe(img);
	});
} else {
	// Iterate over images and call loadImages function
	imagesToLoad.forEach((img) => {
		loadImages(img);
	});
}
