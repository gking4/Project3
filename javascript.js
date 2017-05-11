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
  document.getElementById("result").innerHTML = results;
}