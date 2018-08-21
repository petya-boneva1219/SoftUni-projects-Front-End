
 $(".btn-facebook").on("click", function () {
 
   swal({
      title: "Leave this site?",
      text: "If you click 'OK' you will be redirected to https://facebook.com",
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: "btn-primary",
      confirmButtonText: "OK",
      closeOnConfirm: true
    },
    function(){
      swal("Goodbye!", "We see you soon.", "success");
      window.open("https://facebook.com");
    
    });
    
})
$(".btn-google").on("click", function () {
 
   swal({
      title: "Leave this site?",
      text: "If you click 'OK' you will be redirected to https://google.com",
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: "btn-primary",
      confirmButtonText: "OK",
      closeOnConfirm: true
    },
    function(){
      swal("Goodbye!", "We see you soon.", "success");
      window.open("https://google.com");
    });
})
$('.dropify').dropify();

$("#send").on("click", function () {
  swal("Good job!", "You are registered!", "success");
  $("input").val("");
  $('.dropify-clear').click();
});