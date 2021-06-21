$(document).ready(function(){
    function submitButton()  {
    event.preventDefault(); 
    const Avenger = $("input[name=Avenger]:checked").val();
    const JusticeLeague = $("input[name=Justice-League]:checked").val();
    const Xmen = $("input[name=Xmen]:checked").val();
    const SuperVilliain = $("input[name=destination]:checked").val();
    const DragonBall = $("input[name=Exercise]:checked").val();
  }
}); 
  alert(Avenger+JusticeLeague+Xmen+SuperVilliain+DragonBall);


if (Avenger === "Iron-Man") {
  $('#JavaScript').show();
} else if (Avenger === "Hulk") {
  $('#Csharp').show();
} else if (Avenger === "Captain-America") {
  $('#Python').show();
} else if (Avenger === "Black-Panther") {
  $('#Ruby').show();
} else if (Avenger === "Black-widow") {
  $('#GO').show();
}
  

  
 