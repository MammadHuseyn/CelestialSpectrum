//gets the modal
var modal = document.getElementById("contactModal");
//gets the button that opens the modal
var btn = document.getElementById("foot");
//gets the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
//when the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}


//when the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}