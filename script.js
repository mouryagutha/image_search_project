const accesskey ="VChHNf2fdm5Eci6eGbyH023pRSnf5rOoNAX0ASgu-7A"

const forme1 = document.querySelector("form")
const inpute1 = document.getElementById("search-input")
const searchResults = document.querySelector(".search-results")
const showMore = document.getElementById("show-more-button")

let inputData = " "
let page = 1;

async function searchImages()
{
    inputData = inpute1.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;
    if(page ===1)
    {
        searchResults.innerHTML ="";
    }
    
    results.map((results) =>{
        const imagewrapper = document.createElement('div');
        imagewrapper.classList.add("search-result");
        const image = document.createElement("img");
        image.src =  results.urls.small;
        image.alt = results.alt_description;
        const imagelink = document.createElement('a');
        imagelink.href = results.links.html;
        imagelink.target = "_blank";
        imagelink.textContent= results.alt_description;

        imagewrapper.appendChild(image);
        imagewrapper.appendChild(imagelink);
        searchResults.appendChild(imagewrapper);

    });

    page++;
    if(page > 1)
    {
        showMore.style.display = "block";

    }

}

forme1.addEventListener("submit",(event)=>{
    event.preventDefault();
    page = 1;
    searchImages();
});

showMore.addEventListener("click",()=>{
   
    searchImages();
});