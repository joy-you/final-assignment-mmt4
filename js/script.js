$(function() {
    $( "#accordion" ).accordion({animate:1200, heightStyle: "content", collapsible:true});
});
// var player = videojs ('#video1', {
//     autoplay: 'muted',
//     loop: true
//     });
    
$('#switch').click(function(){
    if($("#switch").hasClass("active")){
        $("#switch").removeClass("active");
        $("body").addClass('darkmode');
        console.log('dark theme');
    }else{  
        $("#switch").addClass("active");
        $('body').removeClass('darkmode');
        console.log('light theme');
    };
});


$(this).parents('.videobuttons').find('.done').click(function(){
    $(this).parents('#accordion').find('.klaar').css({'display':'inline'});
});

$("video").each(function () {

    var player = videojs(this.id, {
        loop: true,
    });

    $("button.rewind").click(function(){
        player.currentTime(player.currentTime() - 10);
    });
    
    let geklikt = false;

$("button.toggle").click(function(){
    if(!geklikt){
    player.pause();
    geklikt = true;
    } else{
        player.play();
        geklikt = false;
}
});
});

$('button#done1').click(function(){
    $('#klaar1').css({'display':'inline'});
});
$('button#done2').click(function(){
    $('#klaar2').css({'display':'inline'});
});
$('button#done3').click(function(){
    $('#klaar3').css({'display':'inline'});
});
$('button#done4').click(function(){
    $('#klaar4').css({'display':'inline'});
});
$('button#done5').click(function(){
    $('#klaar5').css({'display':'inline'});
});

$('button.done').click(function(){
    $('#modal').css({'display':'inline'});
});

$('button#sluit').click(function(){
    $('#modal').css({'display':'none'});
});

$(this).parents('.videobuttons').find('.done').click(function(){
    $(this).parents('.container').find('.klaar').css({'display':'inline'});
});