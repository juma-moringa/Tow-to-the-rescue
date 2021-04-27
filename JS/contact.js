$(document).ready(function(){
  $("form#submit").submit(function(event){
     event.preventDefault();
    var name = $("input#name1").val();
    var email = $("input#name2").val();
    var phone = $("input#phone").val();
    var location = $("input#location1").val();
    var message = $("textarea#comment").val();
    if ($("input#name1").val() && $("input#name2").val()&& $("input#phone").val()&& $("input#location1").val()){
      alert (name + " " + "from" + " " + location + "" + ",Tow-To-The-Rescue has received your message. Our Technical team will reach out to you as soon as possible.");
    }
    else {
      alert("Please enter a valid name, email and contact!");
    }

    
  });

});