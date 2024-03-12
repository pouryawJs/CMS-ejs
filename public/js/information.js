const $ = document;
const exitBtn = $.querySelector(".sign-out-btn");

exitBtn.addEventListener("click", () => {
    deleteCookie(document.cookie.split("=")[0]);
    // Force a hard refresh of the current page
    window.location.reload(true);
});

const deleteCookie = (name) => {
    document.cookie = `${name}= ; expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
};
