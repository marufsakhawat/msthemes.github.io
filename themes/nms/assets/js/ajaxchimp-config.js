/* === Mail Chimp subscription form settings === */
$( document ).ready(function() {

    $('.contactform').ajaxChimp({
        callback: mailchimpCallback,
        //replace bellow url with your own mailchimp form post url inside the url: "---".
        url: "https://formspree.io/maruf@nms-bd.com" 
    }); 
    function mailchimpCallback(resp) {
         if (resp.result === 'success') {
            $('.subscription-success').html('<i class="fa fa-check"></i>' + resp.msg).fadeIn(1000);
            $('.subscription-error').fadeOut(500);
            
        } else if(resp.result === 'error') {
            $('.subscription-error').html('<i class="fa fa-times"></i>' + resp.msg).fadeIn(1000);
        }  
    }

});