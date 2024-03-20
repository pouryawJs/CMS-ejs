let $ = document;
const modalContent = $.querySelector(".modal-content");
const exitBtn = $.querySelector(".sign-out-btn");

// exit panel
exitBtn.addEventListener("click", () => {
    deleteCookie(document.cookie.split("=")[0]);
    // Force a hard refresh of the current page
    window.location.reload(true);
});

const deleteCookie = (name) => {
    document.cookie = `${name}= ; expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
};

// delete user option
const openDeleteModal = (userId) => {
    modalContent.innerHTML = "";
    modalContent.insertAdjacentHTML(
        "beforeend",
        `
    <h1 class="modal-title">are you sure you want delete this user ?</h1>
    <div class="btn-groups">
        <button class="unaccept-btn" onclick="closeModal()">No</button>
        <button class="accept-btn" onclick="DeleteSelectedUser('${userId}')">Yes</button>
    </div>
    `
    );
    modalContent.parentElement.classList.add("visible");
};
const DeleteSelectedUser = (userId) => {
    fetch(`http://localhost:4001/users/remove/${userId}`, {
        method: "DELETE",
    }).then(() => {
        closeModal();
        window.location.reload(true);
    });
};
//close modal
const closeModal = () => {
    modalContent.parentElement.classList.remove("visible");
    modalContent.innerHTML = "";
};
