function openbar(){
   let sidebar = document.getElementById("sidebar");
   sidebar.style.left = "0";
}

function closebar(){
   let sidebar = document.getElementById("sidebar");
   sidebar.style.left = "-250px";
}$(document).ready(function() {

   $("#profile-link").text(" Twitter");
  $("#profile-link2").text(" LinkedIn");
  $("#profile-link3").text(" Instagram");
  $("#profile-link4").text(" Github");

  $("#profile-link").attr("href", "https://twitter.com/Anysia_ik1");
  $("#profile-link2").attr("href", "https://www.linkedin.com/in/kamanzi-anysia-6a31aa298/");
  $("#profile-link3").attr("href", "https://www.instagram.com/anysia_irakoze/");
  $("#profile-link4").attr("href", "https://github.com/anysia1");

  $("#navigation-bar").addClass("text-right");

  $("#bottom-bar").addClass("text-right");
  $("#byline").addClass("text-left");
  $("#profile-link").addClass("fab fa-twitter");
  $("#profile-link2").addClass("fab fa-linkedin");
  $("#profile-link3").addClass("fab fa-instagram");
  $("#profile-link4").addClass("fab fa-github");
});
