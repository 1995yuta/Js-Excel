$(function(){
    $('.wrapper').on('click', '#changeBtn', function(){

        $('.changeUrlText').remove();

        var textArea = document.getElementById('textArea').value;
        textArea = textArea.split('\n');

        $.each(textArea, function(i, val) {
            if (val.match(/q=/)) {
                val = val.split('q=');
                var sjisUrl = UnescapeUTF8(val[1]);
                $('.sjisUrl').html(sjisUrl);
                // Shift_JISコードのタイプで escape エンコードされた escapedString を元の文字列にデコードした値を返します。
                var originText = UnescapeSJIS(sjisUrl);
                $('.origin').html(originText);
                // 文字列 -> UTF8にエンコード
                var utf8Url = EscapeUTF8(originText);
                val = val[0] + utf8Url;
            }
            $('#test').append('<p class="changeUrlText">' + val  + '</p>');
        });
    });
});