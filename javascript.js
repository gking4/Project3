function calcFib()
{
  var userInput = document.getElementById("fib").value;
  var userInput2 = document.getElementById("fib2").value;
  var fibNumbers = [userInput, userInput2];
  for( i = 0; i < 3; i++)
  {
    fibNumbers.push(fibNumbers[i] + fibnumbers[i+1]);
  }
  var results = fibNumbers[2] + " " + fibNumbers[3] + " " + fibNumbers[4];
  document.cookie = results;
  document.getElementById("result").innerHTML = results;
}

function start()
{
  var temp = document.cookie;
    document.getElementById("oldvalues").innerHTML = temp;;
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}