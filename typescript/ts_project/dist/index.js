"use strict";
console.log("jbej");
const getUser = document.querySelector("#user");
const formSubmit = document.querySelector("#form");
const mainContainer = document.querySelector(".main-container");
//custom resuable function
async function myCustomFetch(url, option) {
    const response = await fetch(url, option);
    if (!response.ok) {
        throw new Error(`Network response was not ok -status :${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
}
//display card ui
const showResult = (singleUser) => {
    const { avatar_url, login, url, followers_url } = singleUser;
    mainContainer.insertAdjacentHTML("beforeend", `<div class='card'>
        <img src="${avatar_url}" alt="${login}" />
        <hr/>
        <div class="card-footer">
        <h2>${login} </h2>
        <a href="${url}">GITHUB</a>
        </div>
        
       `);
};
//  default function call on page load
function fetchUserData(url) {
    myCustomFetch(url, {}).then((userInfo) => {
        for (const singleUser of userInfo) {
            showResult(singleUser);
            console.log("login" + singleUser.login);
        }
    });
}
fetchUserData("https://api.github.com/users");
//search function
formSubmit.addEventListener("submit", async (e) => {
    e.preventDefault();
    const searchTerm = getUser.value.toLowerCase();
    try {
        const url = "https://api.github.com/users";
        const allUserData = await myCustomFetch(url, {});
        const matchingUser = allUserData.filter((user) => {
            return user.login.toLowerCase().includes(searchTerm);
        });
        //main container ko empty kro ab 
        mainContainer.innerHTML = "";
        if (matchingUser.length === 0) {
            mainContainer?.insertAdjacentHTML("beforeend", `<p class="empty-msg">No matching users found.</>`);
        }
        else {
            for (const singleUser of matchingUser) {
                showResult(singleUser);
            }
        }
    }
    catch (error) {
        console.log(error);
    }
});
