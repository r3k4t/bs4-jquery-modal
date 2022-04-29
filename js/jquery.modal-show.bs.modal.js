$(function(){
  $("#myBtn").click(function(){
    $("#myModal").modal("show");
  });
  $("#myModal").on('show.bs.modal', function () {
    alert('The modal is about to be shown.');
  });
});

