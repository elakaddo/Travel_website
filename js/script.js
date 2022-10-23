$(
    function () {
        $( "#inputCheckIn" ).datepicker();
        $( "#inputCheckOut" ).datepicker();
        $(".travel-slider").slick({
               dots : true,
               slidesToShow : 2,
               slidesToScroll:1,
               arrow : true,
               
          });
    });
