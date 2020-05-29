// Init GitHub
const github = new GitHub();
// Init UI class
const ui = new UI();
// Search Input
const searchUser = document.getElementById("searchUser");
// Search Input event listner
searchUser.addEventListener("keyup", (e) => {
  // getinput text
  const userText = e.target.value;
  if (userText !== "") {
    // Make HTTP call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show Alert
      } else {
        // Show Profile
        // console.log(data.profile);
        ui.showProfile(data.profile);
      }
    });
  } else {
    // Clear the profile
  }
});
