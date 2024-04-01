const $ = document;
const openModalBtn = $.querySelector(".add-new-course-btn");
const modalContainer = $.querySelector(".modal-container");
const exitBtn = $.querySelector(".sign-out-btn");

// open and close add new course modal

openModalBtn.addEventListener("click", () => {
    modalContainer.classList.add("visible");
});
window.addEventListener("keyup", (event) => {
    if (event.code === "Escape") {
        if (modalContainer.classList.contains("visible")) {
            modalContainer.classList.remove("visible");
        }
    }
});

// exit panel
exitBtn.addEventListener("click", () => {
    deleteCookie(document.cookie.split("=")[0]);
    // Force a hard refresh of the current page
    window.location.reload(true);
});

const deleteCookie = (name) => {
    document.cookie = `${name}= ; expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
};
