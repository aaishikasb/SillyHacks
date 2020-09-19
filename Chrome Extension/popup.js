// Onload
window.onload = generator();

//OnClick
document.getElementById("hate").addEventListener("click", generator);

// Dark Mode Trigger
document.getElementById("dark").addEventListener("click", darkMode);

// Copy Function
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }
  
// Generator
function generator() {
    // List
    var firstPart = ["😀","😃", "😄,", "😁", "😆", "😅", "😂", "🤣", "☺️", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🤩", "🥳", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😤", "😠", "😡", "🤬", "🤯", "😳", "🥵", "🥶", "😱", "😨", "😰", "😥", "😓", "🤗", "🤔", "🤭", "🤫", "🤥", "😶", "😐", "😑", "😬", "🙄", "😯", "😦", "😧", "😮", "😲", "🥱", "😴", "🤤", "😪", "😵", "🤐", "🥴", "🤢", "🤮", "🤧", "😷", "🤒", "🤕", "🤑", "🤠",  "😈", "👿", "👹", "👺", "🤡", "💩", "👻", "💀", "☠️", "👽", "👾", "🤖", "🎃", "😺", "😸" ,"😹", "😻", "😼", "😽", "🙀", "😿", "😾"];
    var name = firstPart[Math.floor(Math.random() * firstPart.length)];
    //alert(name);
    // Remove ex
    if (document.getElementById("name")) {
    document.getElementById("placeholder").removeChild(document.getElementById("name"));
    }
    // Add new
    var element = document.createElement("div");
    element.setAttribute("id", "name");
    element.appendChild(document.createTextNode(name));
    document.getElementById("placeholder").appendChild(element);
    }

// Dark Mode
function darkMode() {
    var element = document.body;
    element.classList.toggle("darkmode");
    var element = document.getElementById("placeholder");
    element.classList.toggle("undark");
  }
