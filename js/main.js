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
    $('#articleTitle').click(function () {
        $('#articleTitle').val("");
    })
    $('#add').click(function () {
        title = $('#articleTitle').val();
        var node = $(ITEM_TEMPLATE);
        node.find(".word").text(title);
        LIST.append(node);
        $('#articleTitle').val("");
        $('#articleTitle').focus();

    });
    $('.cross').click(function () {
        $(this).parent().hide();
    })
    $('.bought').click(function () {
        $(this).parent().find('.word').addClass("crossedOut");
        $(this).parent().find('.circ').hide();
        $(this).parent().find('.sqrt').addClass("boughtArticleAmount");
        $(this).parent().find('.bought').addClass("notB");
        $(this).parent().find('.bought').text("Не куплено");
        $(this).parent().find('.cross').hide();

    })
    $('.word').click(function () {
        var name = $(this).text();
        $(this).hide();
        var p = $('<input type="text" class="word editing">');
        p.val(name);
        $(this).parent().prepend(p);
        p.focus();
        $('body:not(.title)').click(function () {
            name = p.val();
            p.hide();
            var newTitle = $('<div class="word"></div>');
            newTitle.text(name);
            p.parent().prepend(newTitle);
        })

    })
});