const header = document.querySelector("header")
document.addEventListener("scroll", (event) => {
	if (window.scrollY > 0) {
		header.classList.add("bg-white")
	} else {
		header.classList.remove("bg-white")
	}
})
