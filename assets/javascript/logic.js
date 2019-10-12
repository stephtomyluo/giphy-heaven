// Initial array of characters 
var charactersArray = ['Hercules', 'Megara', 'Iron Man', 'Winnie the Pooh'];

function renderButtons() {
// Make it so that buttons are not added on repeat 
    $('.buttonsDiv').empty();


    for (var i = 0; i < charactersArray.length; i++){
        var newButton = $('<button>');
// Give each button a class and data name 
        newButton.addClass('gifButton');
        newButton.attr('data-name', charactersArray[i]);
        // Initial button text 
        newButton.text(charactersArray[i]);
        // Adding button to buttons div 
        $('.buttonsDiv').append(newButton);
    }
}

// When gif button is clicked 
$('#add-gif').on('click', function(event) {
    event.preventDefault();
// Grab input from textbox 
    var characters = $('#gif-input').val().trim();
// Add character from input to array 
    charactersArray.push(characters);

    renderButtons();
})

$(document).on('click', '.gifButton', function(){
    var characterGif = $(this).attr('data-name');

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    characterGif + "&api_key=J7dN5FuWri9WAcHYqLxKiKeR8JifGnwY&limit=10";

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response){
        var results = response.data;
        for (var i = 0; i < results.length; i++){
            if (results[i].rating !== 'r') {
                var gifDiv = $('<div>');
                var rating = results[i].rating;
                var p = $('<p>').text('Rating: ' + rating);
                var characterImg = $('<img>');
                characterImg.attr('src', results[i].images.fixed_height.url);
                gifDiv.append(p);
                gifDiv.append(characterImg);
    
                $('.gif-view').append(gifDiv)
            }
        }
    })
    $('.gif-view').empty();

})

// $(document).on('click', function(){
//     var state = $(this).attr("data-state");
//     if (state === "still") {
//         $(this).attr("src", $(this).attr("data-animate"));
//         $(this).attr("data-state", "animate");
//       } else {
//         $(this).attr("src", $(this).attr("data-still"));
//         $(this).attr("data-state", "still");
//       }
// })

// Have initial buttons show 
renderButtons();