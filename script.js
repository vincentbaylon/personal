const div = document.getElementById("about");
const aboutLink = document.getElementById("aboutLink");


aboutLink.onclick = function() {
    document.getElementById("about").innerHTML = "Hello! My name is Vince Baylon. I am a Software Engineer student at Flatiron School."

    return false;
}