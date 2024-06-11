function submitData() {
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var rank = document.getElementById("rank").value;
    var role = document.querySelector('input[name="role"]:checked').value;
    var email = document.getElementById("email").value;
    var team = document.getElementById("team").value;
    var date = document.getElementById("date").value;

    // Display the data in an alert
    alert("Name: " + name + "\nValorant Username: " + username + "\nRank: " + rank + "\nRole: " + role + "\nEmail: " + email + "\nTeam Name: " + team + "\nDate of Birth: " + date);
}
