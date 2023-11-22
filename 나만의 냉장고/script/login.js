function popupFunc(){
    var screenW = screen.availWidth;
    var screenH = screen.availHeight;
    var popW = 400;
    var popH = 650;
    var posL = (screenW-popW) / 2;
    var posT = (screenH-popH) / 2;

    window.open('new_user.html','new','width='+popW+
    ',height='+popH+',top='+posT+',left='+posL+',resizable=no,scrollbars=no');
}