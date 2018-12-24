
$("#messageConfirm").hide();
$("#messageError").hide();
$("#sendBtn").click(function(){
  if($("#searchUser").val() && $("#message").val() != ""){
    $("#searchUser,#message").val("");
    $("#messageConfirm").fadeIn().delay(3000).fadeOut();} else{$("#messageError").fadeIn().delay(3000).fadeOut();}
});
