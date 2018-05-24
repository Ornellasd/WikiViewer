function ajax (keyword) { //AJAX request

  $.ajax({
    url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + keyword + "&prop=info&inprop=url&utf8=&format=json",
    dataType: "jsonp",
    success: function(response) {
      console.log(response.query);
      if (response.query.searchinfo.totalhits === 0) {
        $("#results").text("NOTHING FOUND");
      }

      else {
        //console.log(response);
        showResults(response);
      }
    },
    error: function () {
      alert("Error retrieving search results, please refresh the page");
    }
  });
}

function showResults (callback) {
  $("ul").empty();
  for (var i = 0; i <= 9; i++) {
    var title = callback.query.search[i].title;
    var titleClean = title.split(" ").join("_");
    url = "https://en.wikipedia.org/wiki/" + titleClean;
    console.log(title);
    console.log(url);
    //$("#results").text(title + ': ' + url);


    $("#results").append("<div><ul> <li id='result'" + i + ">" + title +"</li> </ul></div>");


  }
}

$("#search-button").click(function(){
  var inputText = $("#search-input").val().split(" ").join("_");
  ajax(inputText);
});


