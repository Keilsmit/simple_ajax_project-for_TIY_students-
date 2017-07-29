// page counter
var pageCounter = 1;
// empty div
var animalContianer = document.getElementById('animal-info');
// my button
var btn = document.getElementById('btn');

// event listner
btn.addEventListener('click', function(){
  var ourRequest = new XMLHttpRequest();

  ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');

  ourRequest.onload = function(){
    // console.log(ourRequest.responseText);
    // var ourData = ourRequest.responseText;
    if(ourRequest.status >= 200 && ourRequest.status < 400){
      var ourData = JSON.parse(ourRequest.responseText);
      // console.log(ourData[0]);
      renderHTML(ourData);
    }else{
      console.log("would do something more useful here in the realword to handle error")
    }
  };

  // sending request
  ourRequest.onerror = function(){
    console.log("connection error");
  };

  ourRequest.send();
  pageCounter++;
  if(pageCounter > 3){
    btn.classList.add("hide-me");
  };
});

function renderHTML(data){
  var htmlString = "";

  for(i=0; i < data.length; i++){
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";

      for(ii = 0; ii < data[i].foods.likes.length; ii++){
        if(ii == 0){
          htmlString += data[i].foods.likes[ii];
        }else {
          htmlString += " and " + data[i].foods.likes[ii];
        };
      }

    htmlString += ' and dislikes ';

      for(ii = 0; ii < data[i].foods.dislikes.length; ii++){
        if(ii == 0){
          htmlString += data[i].foods.dislikes[ii];
        }else {
          htmlString += " and " + data[i].foods.dislikes[ii];
        };
      }

    htmlString += '.</p>';
  }
  animalContianer.insertAdjacentHTML('beforeend', htmlString);
};
