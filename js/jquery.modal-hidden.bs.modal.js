$(document).ready(function(){
    $("#myBtn").click(function(){
      $("#myModal").modal("show");
    });
    $("#myModal").on('hidden.bs.modal', function(){
      alert('The modal is now hidden.');
    });
  })