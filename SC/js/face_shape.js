var arr_per = new Array();
var arr_name = new Array();
var arr_img_src = new Array();
var arr_persnal = ['가을 웜 뮤트', '가을 웜 소프트', '가을 웜 딥'];
var arr_img_tag_name = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7'];

const URL = "../my_model/";
let model, labelContainer, maxPredictions;
async function predict() {

    for (i = 1; i < 21; i++) {
        var a = `${i}`;
        arr_img_src.push('../img/가을/' + a + '.png');
        console.log(arr_img_src[i - 1]);
    }
    const shuffleArray = array => {
        for (let i = 0; i < array.length; i++) {
            let j = Math.floor(Math.random() * (i + 1));
            // [array[i], array[j]] = [array[j], array[i]];
            const x = array[i];
            array[i] = array[j];
            array[j] = x;
        }
        return array;
    };
    var arr_img_src_rand = shuffleArray(arr_img_src);
    console.log(arr_img_src_rand);
    for (i = 0; i < 7; i++) {
        var b = `${i+1}`
        document.getElementById('img'+b).src = arr_img_src_rand[i];
    }
    // 로딩 모달 표시
    document.getElementById('loading-modal').style.display = 'block';

    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
    // labelContainer = document.getElementById("label-container");
    // // for (let i = 0; i < maxPredictions; i++) { // and class labels
    // console.log(labelContainer)
    // labelContainer.appendChild(document.createElement("div"));
    // }
    var image = document.getElementById("face-image");
    console.log(image);
    const prediction = await model.predict(image, false);
    for (let i = 0; i < maxPredictions; i++) {
        //결과값 가져오는 부분
        // const classPrediction =
        // //클래스 이름 : 측정결과값
        console.log(prediction[i].className + ": " + prediction[i].probability.toFixed(2));
        // labelContainer.childNodes[i].innerHTML = classPrediction;

        //결과값 슬라이싱 후 배열에 저장
        var slice_per = prediction[i].probability.toFixed(2);
        var slice_per_int = parseInt(slice_per.slice(-2));
        arr_per.push(slice_per_int);
        arr_name.push(prediction[i].className);
        //정렬
        for (let k = 0; k < i; k++) {
            let a;
            let b = '';
            if (arr_per[i] > arr_per[k]) {
                a = arr_per[i];
                b = arr_name[i];
                arr_per[i] = arr_per[k];
                arr_name[i] = arr_name[k];
                arr_per[k] = a;
                arr_name[k] = b;
            }
        }
    }
    var ddd = shuffleArray(arr_persnal)
    console.log('첫번째 값 :' + arr_name[0] + '첫번째 값 수치 :' + arr_per[0]);
    // labelContainer.childNodes[0].innerHTML = '당신은 ' + arr_per[0] + '%' + '확률로' + '당신의 얼굴형은 ' + arr_name[0] + '입니다';
    var sub_mit = '당신은 ' + arr_per[0] + '%' + '확률로' + '당신의 얼굴형은 ' + arr_name[0] + '\n퍼스널 컬러는' + ddd[0] + '입니다.';
    if (arr_name[0] == '달걀형') {
        document.getElementById('icon').src = '../img/달걀형.png'
    }
    else if (arr_name[0] == '둥근형') {
        document.getElementById('icon').src = '../img/둥근형.png'
    }
    else if (arr_name[0] == '역삼각형') {
        document.getElementById('icon').src = '../img/역삼각형.png'
    }
    else if (arr_name[0] == '각진형') {
        document.getElementById('icon').src = '../img/각진형.png'
    }
    else {
        document.getElementById('icon').src = '../img/긴얼굴형.png'
    }
    var inner_text = document.getElementById('h3');
    inner_text.innerText = sub_mit;

    // 차트를 그릴 canvas 요소를 가져옵니다.
    var ctx = document.getElementById('myChart').getContext('2d');

    // 결과값을 사용하여 차트를 그립니다.
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: arr_name,
            datasets: [{
                label: '확률',
                data: arr_per,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
    // 3초 대기
    await new Promise(resolve => setTimeout(resolve, 3000));

    // 로딩 모달 숨김
    document.getElementById('loading-modal').style.display = 'none';

    // .page2 클래스를 가진 요소 클릭
    const page2 = document.querySelector('.page2');
    if (page2) {
        page2.click();
    }

}
