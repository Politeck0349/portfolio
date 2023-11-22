$(document).ready(function(){
	fullset();
	quickClick();
});
function fullset(){
	var pageindex = $("#fullpage > .fullsection").size(); //fullpage 안에 섹션이(.fullsection) 몇개인지 확인하기
	// for(var i=1;i<=pageindex;i++){
	// 	$("#fullpage > .quick > ul").append("<li></li>");
	// }
	$("#fullpage .quick ul :first-child").addClass("on"); //일단 화면이 로드 되었을때는 퀵버튼에 1번째에 불이 들어오게
	//마우스 휠 이벤트
	$(window).bind("mousewheel", function(event){
		var page = $(".quick ul li.on");
		//alert(page.index()+1);  // 현재 on 되어있는 페이지 번호
		if($("body").find("#fullpage:animated").length >= 1) return false;
		//마우스 휠을 위로
		if(event.originalEvent.wheelDelta >= 0) {
			var before=page.index();
			if(page.index() >= 0) page.prev().addClass("on").siblings(".on").removeClass("on");//퀵버튼옮기기
			var pagelength=0;
			for(var i=1; i<(before); i++)
			{
				pagelength += $(".full"+i).height();
			}
			if(page.index() > 0){ //첫번째 페이지가 아닐때 (index는 0부터 시작임)
				page=page.index()-1;
				$("#fullpage").animate({"top": -pagelength + "px"},1000, "swing");
			}else{
				alert("첫번째페이지 입니다.");
			}	
		}else{ // 마우스 휠을 아래로	
			var nextPage=parseInt(page.index()+1); //다음페이지번호
			var lastPageNum=parseInt($(".quick ul li").size()); //마지막 페이지번호
			//현재페이지번호 <= (마지막 페이지 번호 - 1)
			//이럴때 퀵버튼옮기기
			if(page.index() <= $(".quick ul li").size()-1){ 
				page.next().addClass("on").siblings(".on").removeClass("on");
			}
			
			if(nextPage < lastPageNum){ //마지막 페이지가 아닐때만 animate !
				var pagelength=0;
				for(var i = 1; i<(nextPage+1); i++){ 
					//총 페이지 길이 구하기
					//ex) 현재 1번페이지에서 2번페이지로 내려갈때는 1번페이지 길이 + 2번페이지 길이가 더해짐
					pagelength += $(".full"+i).height();
				}
				$("#fullpage").animate({"top": -pagelength + "px"},1000, "swing");
			}
			else{ // 현재 마지막 페이지 일때는
				alert("마지막 페이지 입니다!");
			};		
			
		}
	});
	$(window).resize(function(){ 
		//페이지가 100%이기때문에 브라우저가 resize 될때마다 스크롤 위치가 그대로 남아있는것을 방지하기 위해
		var resizeindex = $(".quick ul li.on").index()+1;
		
		var pagelength=0;
		for(var i = 1; i<resizeindex; i++){ 
			//총 페이지 길이 구하기
			//ex) 현재 1번페이지에서 2번페이지로 내려갈때는 1번페이지 길이 + 2번페이지 길이가 더해짐
			pagelength += $(".full"+i).height();
		}

		$("#fullpage").animate({"top": -pagelength + "px"},0);
	});
}
// 사이드 퀵버튼 클릭 이동
// function quickClick(){
// 	$(".quick li").click(function(){
// 		var gnbindex = $(this).index()+1;
// 		var length=0;
// 		for(var i=1; i<(gnbindex); i++)
// 		{
// 			length+=$(".full"+i).height();
// 		}
// 		if($("body").find("#fullpage:animated").length >= 1) return false;
// 		$(this).addClass("on").siblings("li").removeClass("on");
		
// 		$("#fullpage").animate({"top": -length + "px"},800, "swing");
// 		return false;
// 	});
// }

// 파일명
var filename = "";
var filesmallname = "";
function fileUpload(){
  var fileInput = document.getElementsByClassName("ex_file");
  for( var i=0; i<fileInput.length; i++ ){
    if( fileInput[i].files.length > 0 ){
      for( var j = 0; j < fileInput[i].files.length; j++ ){
        filename = filename + fileInput[i].files[j].name; // 파일명 출력
				
      }
    }
  }
	filesmallname = filename.slice(0,4);
}
// 첨부파일 파일명 띄우기
$("#file").on('change',function(){
	var fileName = $("#file").val();
  $(".upload-name").val(fileName);
	
});


// 차트
function chart(){
	const ctx = document.getElementById('myChart');
	if (filename =='car1.webm') {
		new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ['추돌', '주시', '위반', '위협', '주행', '기타'],
				datasets: [{
					label: '과실비율',
					data: [60, 90, 9, 3, 2, 1],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true,
						afterDataLimits: (scale) => {
							scale.max = 100;
						}, 
					}
				}
			}
		});
		document.getElementById('myChart').style.background='#fff';
		document.getElementById('myChart').style.width='90%';
		// ctx.style.marginTop='100px';
	}
	if (filename =='car2.webm') {
		new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ['추돌', '주시', '차선', '위협', '주행', '기타'],
				datasets: [{
					label: '과실비율',
					data: [70, 15, 9, 3, 2, 1],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});
		document.getElementById('myChart').style.background='#fff';
		document.getElementById('myChart').style.width='90%';
		// ctx.style.marginTop='100px';
	}
	if (filename =='car3.webm') {
		new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ['추돌', '주시', '차선', '위협', '주행', '기타'],
				datasets: [{
					label: '과실비율',
					data: [90, 70, 30, 50, 2, 1],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});
		document.getElementById('myChart').style.background='#fff';
		document.getElementById('myChart').style.width='90%';
		// ctx.style.marginTop='100px';
	}
	if (filename =='car4.webm') {
		new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ['추돌', '주시', '차선', '위협', '주행', '기타'],
				datasets: [{
					label: '과실비율',
					data: [50, 15, 9, 60, 2, 90],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});
		document.getElementById('myChart').style.background='#fff';
		document.getElementById('myChart').style.width='90%';
		// ctx.style.marginTop='100px';
	}
}
document.getElementById('myChart').style.height='395px';



// 동영상 재생
function play1(){
  var $video1 = $('.video1 video'),
  videoSrc = $('source', $video1).attr('src', "./before/"+filename);
  $video1[0].load();
  $video1[0].play();
  
}
function play2(){
	var $video2 = $('.video2 video'),
  videoSrc = $('source', $video2).attr('src', "./line/"+filename);
  $video2[0].load();
  $video2[0].play();
	if ($video2[0].play) {
		var $video5 = $('.video5 video'),
		videoSrc = $('source', $video5).attr('src', "./learning/"+filename);
		$video5[0].load();
		$video5[0].play();	
	}
	
	document.getElementById('video2').style.background='#000000';
}
function play3(){
	var $video3 = $('.video3 video'),
  videoSrc = $('source', $video3).attr('src', "./after/"+filename);
  $video3[0].load();
  $video3[0].play();
}
// function play4(){
// 	var $video4 = $('.video4 video'),
//   videoSrc = $('source', $video4).attr('src', "/crs/upload/after/"+filename);
//   $video4[0].load();
//   $video4[0].play();
  
// }

// function play4(){
//   var $video5 = $('.video2 video'),
//   videoSrc = $('source', $video5).attr('src', "./after/"+filename);
//   $video5[0].load();
//   $video5[0].play();
  
// }

// 로딩중
function loadingProcess(){
  openLoading();
  // 타이머를 이용해 로딩창 종료
  setTimeout(closeLoading, 5000);
}

// 로딩창 키는 함수
function openLoading() {

    //화면 높이와 너비를 구합니다.
    let maskHeight = $(document).height();
    let maskWidth = window.document.body.clientWidth;
    //출력할 마스크를 설정해준다.
    let mask ="<div id='mask' style='position:absolute; z-index:9000; background-color:#fff; display:none; left:0; top:0;'></div>";
    // 로딩 이미지 주소 및 옵션
    let loadingImg ='';
    loadingImg += "<div id='loadingImg' style='position:absolute; top: calc(50% - (200px / 2)); width:100%; z-index:99999999;'>";
    loadingImg += " <img src='https://loadingapng.com/animation.php?image=4&fore_color=000000&back_color=FFFFFF&size=128x128&transparency=1&image_type=0&uncacher=75.5975991029623' style='position: relative; display: block; margin: 0px auto;'/>";
    loadingImg += "</div>"; 
    //레이어 추가
    $('body')
        .append(mask)
        .append(loadingImg)
    //마스크의 높이와 너비로 전체 화면을 채운다.
    $('#mask').css({
            'width' : maskWidth,
            'height': maskHeight,
            'opacity' :'0.3'
    });
    //마스크 표시
    $('#mask').show();  
    //로딩 이미지 표시
    $('#loadingImg').show();
}

// 로딩창 끄는 함수
function closeLoading() {
    $('#mask, #loadingImg').hide();
    $('#mask, #loadingImg').empty();
}
function quickClick(){
	$(".quick li").click(function(){
		var gnbindex = $(this).index()+1;
		var length=0;
		for(var i=1; i<(gnbindex); i++)
		{
			length+=$(".full"+i).height();
		}
		if($("body").find("#fullpage:animated").length >= 1) return false;
		$(this).addClass("on").siblings("li").removeClass("on");
		
		$("#fullpage").animate({"top": -length + "px"},800, "swing");
		return false;
	});
}

// 모달
function result(){
	$img = document.querySelector(".video6 > img");
	$img.src='./result/'+filesmallname+'.png';
	$(function(){
		//     이미지 클릭시 해당 이미지 모달
				$("#result").click(function(){
						let img = new Image();
						img.src = $(this).attr("src")
						$('.modalBox').html(img);
						$(".modal").show();
				});
		// 모달 클릭할때 이미지 닫음
				$(".modal").click(function (e) {
				$(".modal").toggle();
			});
		});
		document.getElementById('result').style.background='#fff';

}
// 모달동영상
// $(function(){
// 	//     이미지 클릭시 해당 이미지 모달
// 			$("video").click(function(){
// 					let video = new video();
// 					video.src = $(this).attr("src")
// 					$('.modalBox').html(video);
// 					$(".modal").show();
// 			});
// 	// 모달 클릭할때 이미지 닫음
// 			$(".modal").click(function (e) {
// 			$(".modal").toggle();
// 		});
// 	});