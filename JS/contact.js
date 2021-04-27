function towToTheRescue() {
  var name = document.forms["contact"]["Name"];
  var email = document.forms["contact"]["EMail"];
  var phone = document.forms["contact"]["Telephone"];
  var what = document.forms["contact"]["Subject"];
  var address = document.forms["contact"]["Location"];

  if (name.value == "") {
    alert("Please enter your name.");
    name.focus();
    return false;
  }

  if (address.value == "") {
    alert("Please enter your address.");
    address.focus();
    return false;
  }

  if (email.value == "") {
    alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }

  if (phone.value == "") {
    alert("Please enter your telephone number.");
    phone.focus();
    return false;
  }

  if (what.selectedIndex < 1) {
    alert("Please enter your county.");
    what.focus();
    return false;
  }

  return true;
}