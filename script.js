function sw_main(sw_id)
{
    if($("#"+sw_id+".sw_toggle").css("backgroundColor") == 'rgb(255, 0, 0)')
    {
        $("#"+sw_id+".sw_toggle").css("background-color","gray");
        $(".sw_container").css("background-color","red");
        $("#"+sw_id+" .toggle_dot").css("transform","translate(2px,2px)");
        $(".sw_status").text("OFF");
        $(".block").fadeIn(200);
    }
    else
    {
        $("#"+sw_id+".sw_toggle").css("background-color","red");
        $(".sw_container").css("background-color","#121f36");
        $("#"+sw_id+" .toggle_dot").css("transform","translate(43px,2px)");
        $(".sw_status").text("ON");
        $(".block").fadeOut(200);
    }
}

function sw(sw_id)
{
    if($("#"+sw_id+".sw_toggle").css("backgroundColor") == 'rgb(255, 0, 0)')
    {
        $("#"+sw_id+".sw_toggle").css("background-color","gray");
        $("#"+sw_id+" .toggle_dot").css("transform","translate(2px,2px)");
    }
    else
    {
        $("#"+sw_id+".sw_toggle").css("background-color","red");
        $("#"+sw_id+" .toggle_dot").css("transform","translate(33px,2px)");
    }
}
    $("#main_sw").click(function (){
        sw_main('main_sw');
    });    
    $("#hide_comment_sw").click(function (){
        sw('hide_comment_sw');
    });
    $("#recommend_hide_sw").click(function (){
        sw('recommend_hide_sw');
    });
    $("#end_recommend_hide_sw").click(function (){
        sw('end_recommend_hide_sw');
    });
    $("#hide_menu_sw").click(function (){
        sw('hide_menu_sw');
    });
    $("#play_limit_sw").click(function (){
        sw('play_limit_sw');
    });
    
  