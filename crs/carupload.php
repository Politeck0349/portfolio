<?php

//파일저장될 위치
$uploads_dir = './upload/';

  if($_FILES['file']['size'] > 0) { // 업로드 파일 사이즈를 체크하여, 업로드 파일 여부를 확인

    $files = $_FILES['file'];
    $filename = $files['name'];

    $tmpName = $files['tmp_name'];

    move_uploaded_file($tmpName, "$uploads_dir/$filename");
  }

?>