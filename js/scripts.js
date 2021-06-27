$(document).ready(function(){
    $("form#list").submit(function(event) {
    event.preventDefault(); 
    const Avenger =parseInt($("input[name=Avenger]:checked").val());
    const JusticeLeague =parseInt($("input[name=Justice-League]:checked").val());
    const Xmen =parseInt($("input[name=X-Men]:checked").val());
    const SuperVilliains =parseInt($("input[name=Super-Villiains]:checked").val());
    const Dragonball =parseInt($("input[name=Dragonball]:checked").val());
    const result = Avenger + JusticeLeague + Xmen + SuperVilliains + Dragonball;
    
    $('#javaScript').hide();
    $('#csharp').hide();
    $('#python').hide(); 
    $('#ruby').hide();
    $('#go').hide();
    if ( result < 8) {
      $('#javaScript').show();
    } else if ( result < 12) {
      $('#csharp').show();
    } else if (result < 15) {
      $('#python').show();
    } else if (result < 20) {
      $('#ruby').show();
    } else if (result < 26 ) {
      $('#go').show();
    }else {
    
    }
    
  });
}); 
  alert(Avenger+JusticeLeague+Xmen+SuperVilliain+DragonBall);



  


if (JusticeLeague === "Super-Man") {
  $('#JavaScript').show();
} else if (JusticeLeague === "Wonder-Woman") {
  $('#JavaScript').show();;
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