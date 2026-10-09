$(function(){
 $('.hamb').on('click',function(){$('.mobile-nav').slideToggle(180)});
 $('.mobile-nav a').on('click',function(){$('.mobile-nav').slideUp(120)});
 $('a[href^="#"]').on('click',function(e){const t=$(this).attr('href');if(t&&t!=='#'&&$(t).length){e.preventDefault();$('html,body').animate({scrollTop:$(t).offset().top-70},450)}});
 $('#early').on('submit',function(e){e.preventDefault();let n=$.trim($('#name').val()),p=$.trim($('#phone').val()),i=$('#interest').val(),c=$.trim($('#city').val());let o=$('#early output');if(!n||!p||!i||!c){o.css('color','#c0392b').text('Please fill in all fields.');return}if(!/^[0-9+\-\s]{10,15}$/.test(p)){o.css('color','#c0392b').text('Please enter a valid mobile number.');return}o.css('color','#15803d').text('Thank you! You are on the LifeTime early-access waitlist.');this.reset()});
 $(window).on('scroll',function(){$('.top').toggle($(this).scrollTop()>450)});$('.top').on('click',function(){$('html,body').animate({scrollTop:0},450)});
});
