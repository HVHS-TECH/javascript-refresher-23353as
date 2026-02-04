

function start() {
 document.getElementById("welcomeMessage").innerHTML = "Hello World";
}

function useInput() {
  const name = document.getElementById("nameInput").value;
  document.getElementById("welcomeMessage").innerHTML =
    "Your number is " + name;
}
