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
    var prev;
    var current;
    $('#articleTitle').click(function () {
        $('#articleTitle').val("");
    })
    $('#add').click(function () {
        title = $('#articleTitle').val();
        newEl(title);
    });

    function newEl(title) {
        var node = $(ITEM_TEMPLATE);
        var leftNode = $(LEFT_ITEMS);//
        node.find(".word").val(title);
        leftNode.find(".text-node").text(title);//
        LIST.append(node);
        LEFT_LIST.append(leftNode);//
        var AMOUNT = leftNode.find('.nu');
        leftNode.append(AMOUNT);
        $('#articleTitle').val("");
        $('#articleTitle').focus();
        node.find('.cross').click(function () {
            $(this).parent().hide();
            var txt = $(this).parent().find('.word').val();
            $('.article:contains("' + txt + '")').hide();

        })
        node.find('.plus').click(function () {
            var text = $(this).parent().find('.sqrt').text();
            text = parseInt(text) + 1;
            $(this).parent().find('.sqrt').text(text);
            $(this).parent().find('.minus').addClass('minusActive');
            var txt = $(this).parent().find('.word').val();
            $('.article:contains("' + txt + '")').find('.nu').find('.number').text(text);
        })
        node.find('.minus').click(function () {
            var text = $(this).parent().find('.sqrt').text();
            text = parseInt(text) - 1;
            if (text < 1) {
                text = 1;
            }
            $(this).parent().find('.sqrt').text(text);
            if (text == 1) {
                $(this).parent().find('.minus').removeClass('minusActive');
            }
            var txt = $(this).parent().find('.word').val();
            $('.article:contains("' + txt + '")').find('.nu').find('.number').text(text);
        })
        node.find('.word').focus(function () {
            prev = $(this).val();
        })
        node.find('.word').focusout(function () {
            current = $(this).val();
            if (prev != current) {
                leftNode.find(".text-node").text(current);
            }
        })
        node.find('.bought').click(function () {
            $(this).parent().find('.word').addClass("crossedOut")
            $(this).parent().find('.circ').hide();
            $(this).parent().find('.sqrt').addClass("boughtArticleAmount");
            $(this).parent().find('.bought').hide();
            $(this).parent().find('.notB').show();
            $(this).parent().find('.cross').hide();
            var txt = $(this).parent().find('.word').val();
            $('.article:contains("' + txt + '")').hide();
            var boughtNode = $(BOUGHT_ITEMS);//
            boughtNode.find('.text-node').text(txt);//
            BOUGHT_LIST.append(boughtNode);//
            var AMOUNT = node.find('.sqrt').text();//

            boughtNode.find('.number').text(AMOUNT);//
            boughtNode.addClass('crossedOut');


        })

        node.find('.notB').click(function () {
            $(this).parent().find('.word').removeClass("crossedOut")
            $(this).parent().find('.circ').show();
            var LIST_C = $('.title');
            var ITEM_TEMPLATE_C = $('.centre').html();
            var nodeC = $(ITEM_TEMPLATE_C);
            LIST_C.append(nodeC);
            $(this).parent().find('.sqrt').removeClass("boughtArticleAmount");
            $(this).parent().find('.notB').hide();
            $(this).parent().find('.bought').show();
            $(this).parent().find('.bought').text("Куплено");
            $(this).parent().find('.cross').show();
            var txt = $(this).parent().find('.word').val();
            $('.article:contains("' + txt + '")').show();
            $('.article:contains("' + txt + '")').filter('.crossedOut').hide();
        });
    }

    newEl("Помідори");
    newEl("Печиво");
    newEl("Сир");
});