// Init GitHub
const github = new GitHub();
// Search Input
const searchUser = document.getElementById("searchUser");
// Search Input event listner
searchUser.addEventListener("keyup", (e) => {
  // getinput text
  const userText = e.target.value;
  if (userText !== "") {
    // Make HTTP call
    github.getUser(userText).then((data) => {
      console.log(data);
    });
  }
});
