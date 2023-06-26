console.log("Let's get this party started!");

const $gifArea = $("#gif-area");
const $searchInput = $("#search");

function addingGif(res) {
    let searchResults = res.data.length;
    if(searchResults) {
        let randomIdx = Math.floor(Math.random() * searchResults);
        let $newCol = $("<div>")
        let $newGif = $("<img>", {
            src: res.data[randomIdx].images.original.url,
        });
        $newCol.append($newGif);
        $gifArea.append($newCol);
    } 
}

$("form").on("submit", async function(evt) {
    evt.preventDefault();
  
    let searchTerm = $searchInput.val();
    $searchInput.val("");
  
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
      params: {
        q: searchTerm,
        api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
      }
    });
    addingGif(response.data);
  });

  
$("#remove").on("click", function() {
    $gifArea.empty();
  });

  $("#remove").on("click", function() {
    $gifArea.empty();
  });