// Initial array of characters 
var charactersArray = ['Hercules', 'Megara', 'Iron Man', 'Winnie the Pooh'];

function renderButtons() {

    $('.buttonsDiv').empty();

    for (var i = 0; i < charactersArray.length; i++){
        var newButton = $('<button>');
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

// Have initial buttons show 
renderButtons();