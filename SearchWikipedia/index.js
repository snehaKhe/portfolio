let searchInputEl = document.getElementById("searchInput");
let searchResultEl = document.getElementById("searchResults");
let sppinerEl = document.getElementById("spinner");

function createAndAppendSearchResults(result) {

    let {
        title,
        link,
        description
    } = result;

    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");
    searchResultEl.appendChild(resultItemEl);
    // Anchor title 

    let titleEl = document.createElement("a");
    titleEl.href = link;
    titleEl.target = "_black";
    titleEl.classList.add(result - title);
    titleEl.textContent = title;
    resultItemEl.appendChild(titleEl);

    let titleBrEl = document.createElement("br");
    resultItemEl.appendChild(titleBrEl);

    let urlEl = document.createElement("a");
    urlEl.href = link;
    urlEl.classList.add("result-url");
    urlEl.target = "_black";
    urlEl.textContent = link;
    resultItemEl.appendChild(urlEl);

    let linebrEl = document.createElement("br");
    resultItemEl.appendChild(linebrEl);

    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent = description;
    resultItemEl.appendChild(descriptionEl);

}

function displayResults(search_results) {
    sppinerEl.classList.toggle("d-none");
    for (let result of search_results) {
        createAndAppendSearchResults(result);
    }

}

function searchWikipedia(event) {
    if (event.key === "Enter") {
        sppinerEl.classList.toggle("d-none");
        searchResultEl.textContent = "";
        let searchInput = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayResults(search_results);
            });
    }
}




searchInputEl.addEventListener("keydown", searchWikipedia);