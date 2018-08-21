function bold() {

   let textStyle = $('#format-text input');
  
   $('#bold-btn').on('click', function(){  
    
     if($("#format-text input").css('font-weight') == '400'){
       $("#format-text input").css('font-weight','700')
     }
     else if ($("#format-text input").css('font-weight') == '700'){
       $("#format-text input").css('font-weight','400')
  
     }
 });


 
 $('#italic-btn').on('click', function(){  
  
   if($("#format-text input").css('font-style') == 'normal'){
     $("#format-text input").css('font-style','italic')
   }
   else if ($("#format-text input").css('font-style') == 'italic'){
     $("#format-text input").css('font-style','normal')

   }
});

}
