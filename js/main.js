/**
 * Created by Dell on 20.01.2016.
 */
$(function () {
//This	function	will	be	called
//	after	the	DOM	was	loaded	and	ready
//Here	we	can	place	all	jQuery	Code
    var title;
    var LIST = $('.mainPanel');
    var ITEM_TEMPLATE = $('.one_item').html();
    var LEFT_LIST = $('.leftStat');//
    var LEFT_ITEMS = $('.one_article').html();//
    var BOUGHT_LIST = $('.boughtStat');//
    var BOUGHT_ITEMS = $('.one_article').html();//
    $('#articleTitle').click(function () {
        $('#articleTitle').val("");
    })
    $('#add').click(function () {
        title = $('#articleTitle').val();
        var node = $(ITEM_TEMPLATE);
        var leftNode = $(LEFT_ITEMS);//
        node.find(".word").val(title);
        leftNode.text(title);//
        //leftNode.find(".article").find(".number").text("1");//
        LIST.append(node);
        LEFT_LIST.append(leftNode);//
        var AMOUNT =$('.nu').html();
        //AMOUNT.text("1");
        //AMOUNT.addClass("number");
        leftNode.append(AMOUNT);
        $('#articleTitle').val("");
        $('#articleTitle').focus();

    });
    $('.cross').click(function () {
        $(this).parent().hide();
        //if($(this).parent().find('.word').val()==$(".article").text()){
        //    $(".article").hide();
        //}
        var txt=$(this).parent().find('.word').val();
        $('.article:contains("'+txt+'")').hide();
        //$(".article").attr("text", txt).hide();
        //$('[text=txt]').hide();

    })
    $('.bought').click(function () {
        $(this).parent().find('.word').addClass("crossedOut")
        $(this).parent().find('.circ').hide();
        $(this).parent().find('.sqrt').addClass("boughtArticleAmount");
        $(this).parent().find('.bought').addClass("notB");
        $(this).parent().find('.bought').removeClass("bought");
        $(this).parent().find('.notB').text("Не куплено");
        $(this).parent().find('.cross').hide();
        var txt=$(this).parent().find('.word').val();
        $('.article:contains("'+txt+'")').hide();
        var boughtNode = $(BOUGHT_ITEMS);//
        boughtNode.text(txt);//
        BOUGHT_LIST.append(boughtNode);//
        var AMOUNT =$('.nu').html();//

        boughtNode.append(AMOUNT);//
        //AMOUNT.addClass('crossedOut');
        boughtNode.addClass('crossedOut');

        $('.notB').click(function () {
            $(this).parent().find('.word').removeClass("crossedOut")
            //$(this).parent().find('.circ').append();
            //$('.title').append($($('.centre').html()));
            var LIST_C = $('.title');
            var ITEM_TEMPLATE_C = $('.centre').html();
            var nodeC = $(ITEM_TEMPLATE_C);
            LIST_C.append(nodeC);
            $(this).parent().find('.sqrt').removeClass("boughtArticleAmount");
            $(this).parent().find('.notB').removeClass("bought");
            $(this).parent().find('.bought').removeClass("notB");
            $(this).parent().find('.bought').text("Куплено");
            $(this).parent().find('.cross').append();

        })
    })


    //var activeInput=false;
    //var name;
    //var p=$('<input type="text" class="word editing">');
    //$('.word').click(function () {
    //    name = $(this).text();
    //    $(this).hide();
    //    //p = $('<input type="text" class="word editing">');
    //    p.val(name);
    //    $(this).parent().prepend(p);
    //    activeInput=true;
    //    p.focus();
    //
    //
    //})
    //$('body:not(input)').click(function () {
    //    if(activeInput==true){
    //        name = p.val();
    //        p.hide();
    //        var newTitle = $('<div class="word"></div>');
    //        newTitle.text(name);
    //        p.parent().prepend(newTitle);
    //        activeInput=false;
    //    }
    //})
    $('.plus').click(function () {
        var text = $(this).parent().find('.sqrt').text();
        text = parseInt(text) + 1;
        $(this).parent().find('.sqrt').text(text);
        $(this).parent().find('.minus').addClass('minusActive');
    })
    $('.minus').click(function () {
        var text = $(this).parent().find('.sqrt').text();
        text = parseInt(text) - 1;
        if(text<1){
            text=1;
        }
        $(this).parent().find('.sqrt').text(text);
        if(text==1){
            $(this).parent().find('.minus').removeClass('minusActive');
        }
    })
});