/**
 * Created by Vitalii Kalchuk on 11.06.2015.
 */
var ENTER_KEY = 13;

$(document).ready(function () {
    //remove checkmark on page refresh
    $('#strike').prop("checked", false);

    //clear input field on page refresh
    $('#goodsText').val('');

    //add item
    $('#goodsText').keypress(function (e) {
        if (e.which === ENTER_KEY && $('#goodsText').val() !== '') {
            var input = $('#goodsText').val();
            $('#goodsList').append('<li> <input type="checkbox" class="toggle" /><span>' +
                input + '</span><button class="delete" style="color:red">X</button></li>');
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
    $(document).on('dblclick', 'li span', function () {
        var $liToEdit = $(this).closest('li span');
        $liToEdit.addClass('edititng');
        var textToEdit = $liToEdit.html();
        $('#goodsText').val(textToEdit);
        $('#goodsText').focus();

        $('#goodsText').keypress(function (e) {
            if (e.which === ENTER_KEY) {
                var input = $('#goodsText').val();
                $liToEdit.val(input);
            }
        });
    });

});