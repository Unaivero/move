var main = function() {
    var cities = ["London", "Malaga","Madrid", "Barcelona", "Los Angeles","Miami","New York"    
    ];

  $("#cities").autocomplete({source: cities});
};
 
$(document).ready(main);
