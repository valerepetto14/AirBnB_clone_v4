$(document).ready(function () {
    var checked = {};
  
    function modify() {
      var keys = Object.keys(checked);
  
      var string = "";
  
      for (var key of keys) {
        if (key != keys[0]) {
          string += ", ";
        }
        string += key.slice(1);
      }
  
      if (string.length > 30) {
        string = string.slice(0, 30);
        string += "...";
      }
  
      return string;
    }
  
    $('input[type="checkbox"]').change(function () {
      var id = this.getAttribute("data-id");
      var name = this.getAttribute("data-name");
      if ($(this).is(":checked")) {
        checked[name] = id;
        $(".amenities h4").text(modify);
      } else {
        delete checked[name];
        $(".amenities h4").text(modify);
      }
      console.log(checked);
    });

    $.ajax({
        url: "http://localhost:5001/api/v1/places_search",
        type: "post",
        data: JSON.stringify({}),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response){
            for (let place of response){
                
                console.log(response)
            }
            // $("section.places")
        }
    })

    // $.post("http://localhost:5001/api/v1/places_search", function (data) {
    //   if (data.status === "OK") {
    //     $("div#api_status").addClass("available");
    //   } else {
    //     $("div#api_status").removeClass("available");
    //   }
    // });
  });
  