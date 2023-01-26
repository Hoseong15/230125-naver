// $('#sumit-btn').click(function() {
//   $('.checkbox-img').css("display", "none");
//   $(this).attr('.checked').css("display", "block");
// }) 


$('#sumit-btn').on('click',function(){
  let colorBox = $('.checkbox-img').attr('.checked');
  let paleBox = $('.checkbox-img');
}) 



$("#sumit-btn").click(function() {
  if($(this).is(":checked")){
    $(".checkbox-sub").attr("checked", true);
  }else{
    $(".checkbox-sub").attr("checked", false);
  }
})

// $(".checkbox-sub").click(function() {
//   if($(this).is(":checked")){
//     $(".checkbox-sub").prop("checked", true);
//   }else{
//     $(".checkbox-sub").prop("checked", false);
//   }
// })