/**
 * Created by Vitalii Kalchuk on 11.06.2015.
 */
var ENTER_KEY = 13;

$(document).ready(function() {

    //add item
    $('#goodsText').keypress(function(e) {
        if (e.which === ENTER_KEY && $('#goodsText').val() !== '') {
            var input = $('#goodsText').val();
            $('#goodsList').append('<li> <input type="checkbox" class="toggle" />' +
                input + '<button class="delete" style="color:red">X</button></li>');
            $('#goodsText').val('');
        }
    });

    // delete item
    $(document).on('click', '.delete', function() {
        $(this).closest('li').remove();
    });

    //strikethrough item
    $(document).on('click', '.toggle', function() {
        if($(".toggle").is(':checked'))
            $(this).closest('li').addClass('strikethrough');
        else
            $(this).closest('li').removeClass('strikethrough');
    });

    //strikethrough all
    $('#strike').click(function(){
        if($(this).prop("checked")) {
            $(".toggle").prop("checked", true);
            $('li').addClass('strikethrough');
        } else {
            $(".toggle").prop("checked", false);
            $('li').removeClass('strikethrough');
        }                
    });
});