$(document).ready(function(){
    let val_of ="";
    let row = 0;
    let col = 0;
    let tds = $(".table_data").toArray();

    $(".table_data").hover(function(){
        val_of =  $(this).html();
        row = parseInt($(this).attr("data-row"));
        col = parseInt($(this).attr("data-col"));
        $(this).append("<br><span>"+$(this).attr("data-num")+"</span>").addClass("text_sm");

        color(row,col);

    },function(){
        $(this).html(val_of).removeClass("text_sm");
        color_back();
    });

    function color(the_row, the_col){
        for(var i of tds){
            if($(i).attr("data-row")==the_row && $(i).attr("data-col")<=the_col || $(i).attr("data-row")<=the_row && $(i).attr("data-col")==the_col){
                $(i).css("background","#63e815").css("font-weight","700");
            }else{
                 $(i).css("background","").css("font-weight","");
            }
        }
    }

    function color_back(){
        console.log("1");
        for(var i of tds){
            $(i).css("background","").css("font-weight","");
        }
    }
});