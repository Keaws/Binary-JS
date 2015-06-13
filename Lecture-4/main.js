/**
 * Created by Vitalii Kalchuk on 11.06.2015.
 */
var ENTER_KEY = 13,
    ESCAPE_KEY = 27;

$(document).ready(function () {
    //remove checkmark on page load
    $('#strike').prop("checked", false);

    //clear input field on page load
    $('#goodsText').val('');

    //input focus on page load
    $('#goodsText').focus();

    //add item
    $('#goodsText').keypress(function (e) {
        if (e.which === ENTER_KEY && $('#goodsText').val() !== '') {
            var input = $('#goodsText').val();
            $('#goodsList').append('<li> <input type="checkbox" class="toggle" />' +
                '<label class="display">' + input + '</label>' +
                '<input type="text" class="edit" maxlength="15"/>' +
                '<a class="delete"></a></li>');
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
    $(document).on('dblclick', 'li label', function () {
        originalText = $(this).text();
        $(this).hide().siblings(".edit").show().val($(this).text()).focus();
    });

    $(document).on('keyup', '.edit', function(e) {
        if (e.which === ENTER_KEY && $('#edit').val() !== '') {
            $(this).hide().siblings(".display").show().text($(this).val());
        } else if (e.which === ESCAPE_KEY) {
            $(this).hide().siblings(".display").show().text(originalText);
        }
    });

    //show delete button
/*    $(document).on('mouseenter', 'li label', function () {
        $(this).siblings('.delete').fadeIn();
    }).on('mouseleave', 'li label', function () {
        $(this).siblings('.delete').fadeOut();
    });*/
});