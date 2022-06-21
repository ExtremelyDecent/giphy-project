const $gifSpace = $("#gifs")
const $formInput = $("#entry");

function placeGif(r){
    
    const numGifs = r.data.length;
    if(numGifs){
        let random = Math.floor(Math.random() * r.data.length);
        let $col = $("<div>", {class: "col-md col-12"});
        let $gif = $("<img>", {
            src : r.data[random].images.original.url,
            class: "w-200"
        });
        $col.append($gif);
        $gifSpace.append($col);
    }
    
}

//gets input

$("form").on("submit", async function (e){
    e.preventDefault();
    let search = $formInput.val();
    $formInput.val("");
    const r = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params:{
            q : search,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}
    });
    console.log(r.data);
    placeGif(r.data);
});

$("#remove").on("click", function(){
    $gifSpace.empty();
})