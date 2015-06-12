/**
 * Created by Vitalii Kalchuk on 11.06.2015.
 */
var ENTER_KEY = 13,
    ESACPE_KEY = 27;

$(document).ready(function () {
    //remove checkmark on page refresh
    $('#strike').prop("checked", false);

    //clear input field on page refresh
    $('#goodsText').val('');

    //input focus on page refresh
    $('#goodsText').focus();

    //add item
    $('#goodsText').keypress(function (e) {
        if (e.which === ENTER_KEY && $('#goodsText').val() !== '') {
            var input = $('#goodsText').val();
            $('#goodsList').append('<li> <input type="checkbox" class="toggle" />' +
                '<span class="display">' + input + '</span>' +
                '<input type="text" class="edit" style="display:none" />' +
                '<button class="delete" style="color:red">X</button></li>');
            $('#goodsText').val('');
        }
    });

    //delete item
    $(document).on('click', '.delete', function () {
        $(this).closest('li').remove();
    });

    //strikethrough item
    $(document).on('change', '.toggle', function () {
        if (this.checked) {
            $(this).closest('li').addClass('strikethrough');
        }
        else {
            $(this).closest('li').removeClass('strikethrough');
        }
    });

    //strikethrough all
    $('#strike').click(function () {
        if ($(this).prop("checked")) {
            $(".toggle").prop("checked", true);
            $('li').addClass('strikethrough');
        } else {
            $(".toggle").prop("checked", false);
            $('li').removeClass('strikethrough');
        }
    });

    //delete all strikethrough
    $('#strikeDel').click(function () {
        $('li.strikethrough').remove();
        $('#strike').prop("checked", false);
    });

    //edit item
    var originalText;
    $(document).on('dblclick', 'li span', function () {
        originalText = $(this).text();
        $(this).hide().siblings(".edit").show().val($(this).text()).focus();
    });

    $(document).on('keyup', '.edit', function(e) {
        if (e.which === ENTER_KEY && $('#edit').val() !== '') {
            $(this).hide().siblings(".display").show().text($(this).val());
        } else if (e.which === ESACPE_KEY) {
            $(this).hide().siblings(".display").show().text(originalText);
        }
    });

    //show delete button on mouseenter
/*    $(document).on('mouseover', 'li span', function(){
        console.log('hhh');
        $(this).siblings('.delete').show();
    }, function(){
        $(this).siblings('.delete').hide();
    });*/

    $(document).on('mouseenter', 'li span', function () {
        $(this).siblings('.delete').fadeIn();
    }).on('mouseleave', 'li span', function () {
        $(this).siblings('.delete').fadeOut();
    });

/*    $(document).on('mouseenter', '#goodsText',
        function () {
            console.log('123');
        }
    );

    $(document).on('mouseleave', '#goodsText',
        function () {
            console.log('123');
        }
    );*/
});