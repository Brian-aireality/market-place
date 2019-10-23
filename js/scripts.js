$(document).ready(function () {
  $("form#userInfo").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var address = $("#address").val();
    var delivery = $("#delivery").val();
    var rating = $("input:radio[name=rating]:checked").val();

    $("div#receipt h3").after('<p class="user">', name, '</p>');
    $("div#receipt h3").after('<p class="user">', address, '</p>');
    $(".deliverytime").append(delivery);
    $(".servicerating").append(rating);

    // $("#receipt").toggle();

    console.log(name);
    console.log(address);
    console.log(delivery);
    console.log(rating);
  });
});
