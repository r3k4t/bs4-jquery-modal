$(function(){
  $("#myBtn").click(function(){
    $("#myModal").modal("show");
  });
  $("#myModal").on('shown.bs.modal', function () {
    alert('The modal is fully shown.');
  });
});