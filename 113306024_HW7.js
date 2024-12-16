document.getElementById("edit-btn").addEventListener("click", function() {
    const nameDisplay = document.getElementById("name-display");
    const nameInput = document.getElementById("name-input");
    const editBtn = document.getElementById("edit-btn");

    if (editBtn.innerText === "edit") {
        nameDisplay.style.display = "none";
        nameInput.style.display = "inline-block";
        nameInput.value = nameDisplay.innerText;
        editBtn.innerText = "save";
    } else {
        nameDisplay.innerText = nameInput.value;
        nameDisplay.style.display = "block";
        nameInput.style.display = "none";
        editBtn.innerText = "edit";
    }
});
document.getElementById("add-music-btn").addEventListener("click", function() {
    document.getElementById("add-music-form").style.display = "block";
});

document.getElementById("submit-music").addEventListener("click", function() {
    const musicUrl = document.getElementById("music-url").value;
    const musicName = document.getElementById("music-name").value;

    if (musicUrl && musicName) {
        const musicList = document.getElementById("music-list");
        const newMusicItem = document.createElement("div");
        newMusicItem.className = "album-item";
        newMusicItem.innerHTML = `
            <a href="${musicUrl}" target="_blank">
                <img src="spotify-logo.png" alt="${musicName}">
            </a>
            <p>${musicName}</p>
        `;
        musicList.appendChild(newMusicItem);

        document.getElementById("music-url").value = "";
        document.getElementById("music-name").value = "";
        document.getElementById("add-music-form").style.display = "none";
    } else {
        alert("請填寫完整資訊！");
    }
});
