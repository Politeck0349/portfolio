let filetag = document.querySelector('input[name=file]');

filetag.onchange = function () {
    let imgtag1 = document.getElementById('face-image');
    let imgtag2 = document.getElementById('contents-image');
    let label_h1 = document.getElementById('label_text');
    let sub  = document.getElementById('sub');
    if (filetag.files.length > 0) {
        let reader = new FileReader();
        reader.onload = function (data) {
            console.log(data);
            imgtag1.src = data.target.result;
            imgtag2.src = data.target.result;
            label_h1.remove();
            sub.disabled = false;
            console.log(sub);
        }
        reader.readAsDataURL(filetag.files[0]);
    }
    else {
        imgtag1.src = " ";
        imgtag2.src = " ";
        sub.disabled = true;
    }
}
