// my button
var btn = document.getElementById('btn');

// event listner
btn.addEventListener('click', function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
  ourRequest.onload = function(){
    // console.log(ourRequest.responseText);
    // var ourData = ourRequest.responseText;
    var ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData[0]);
  };
  // sending request
  ourRequest.send();

});
