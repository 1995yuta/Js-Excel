function clickBtn() {
    var textArea = document.getElementById('textArea').value;
    textArea = textArea.split('\n');
    var textArray = textArea.join('<br>');
    $('#test').html(textArray);
}