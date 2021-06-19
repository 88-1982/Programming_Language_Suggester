 $(document).ready(function(){
  function submitButton()  {
   // event.preventDefault(); 
    const Avenger = $("input[name=Avenger]:checked").val();
    const JusticeLeague = $("input[name=Justice-League]:checked").val();
    const Xmen = $("input[name=Xmen]:checked").val();
    const SuperVilliain = $("input[name=destination]:checked").val();
    const exercise = $("input[name=Exercise]:checked").val();
  alert(Avenger+JusticeLeague+Xmen+SuperVilliain+DragonBall);
  }
});