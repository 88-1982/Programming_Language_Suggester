$(document).ready(function(){
    $("form#list").submit(function(event) {
    event.preventDefault(); 
    const Avenger = parseInt($("input[name=Avenger]:checked").val());
    const JusticeLeague = $("input[name=Justice-League]:checked").val();
    const Xmen = $("input[name=Xmen]:checked").val();
    const SuperVilliain = $("input[name=destination]:checked").val();
    const DragonBall = $("input[name=Exercise]:checked").val();
    const result =
  });
}); 
  alert(Avenger+JusticeLeague+Xmen+SuperVilliain+DragonBall);



  $('#JavaScript').show();

  $('#Csharp').show();

  $('#Python').show();

  $('#ruby').show();

  $('#GO').show();


if (JusticeLeague === "Super-Man") {
  $('#JavaScript').show();
} else if (JusticeLeague === "Wonder-Woman") {
  $('#Csharp').show();
} else if (JusticeLeague === "The-Flash") {
  $('#Python').show();
} else if (JusticeLeague === "Bat-Man") {
  $('#Ruby').show();
} else if (JusticeLeague === "Green-Lantern") {
  $('#GO').show();
}
  
if (Xmen === "Storm") {
  $('#JavaScript').show();
} else if (Xmen === "Rouge") {
  $('#Csharp').show();
} else if (Xmen === "Cyclops") {
  $('#Python').show();
} else if (Xmen === "Wolverine") {
  $('#ruby').show();
} else if (Xmen === "Phoniex") {
  $('#GO').show();
}
  
if (SuperVilliain === "King-pin") {
  $('#JavaScript').show();
} else if (SuperVilliain === "Venom") {
  $('#Csharp').show();
} else if (SuperVilliain === "Red-Skull") {
  $('#Python').show();
} else if (SuperVilliain === "Bane") {
  $('#ruby').show();
} else if (SuperVilliain === "Dooms-day") {
  $('#GO').show();
}

if (DragonBall === "Goku") {
  $('#JavaScript').show();
} else if (DragonBall === "Vegeta") {
  $('#Csharp').show();
} else if (DragonBall === "Frieza") {
  $('#Python').show();
} else if (DragonBall === "Gohan") {
  $('#ruby').show();
} else if (DragonBall === "Piccolo") {
  $('#GO').show();
}