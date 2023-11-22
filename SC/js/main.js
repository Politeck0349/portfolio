function preview() {
	// file input에서 파일을 가져옵니다.
	const file = document.getElementById("input-file").files[0];
	// FileReader 객체를 생성합니다.
	const reader = new FileReader();

	// 파일 읽기를 완료했을 때 실행되는 이벤트 핸들러를 설정합니다.
	reader.onloadend = function () {
			// 읽은 결과를 img 태그의 src에 설정합니다.
			document.getElementById("uploaded-image").src = reader.result;
			document.getElementById("face-image").src = reader.result;
	}

	// 파일을 읽습니다.
	if (file) {
			reader.readAsDataURL(file);
	} else {
			document.getElementById("uploaded-image").src = "";
			document.getElementById("face-image").src = "";
	}
}