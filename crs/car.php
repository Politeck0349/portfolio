<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>차비서</title>
    <link rel="stylesheet" href="./car.css">
    <style>
      *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.658);


}
#wrap{
    margin:0;
    padding:0;
    width: 100%;
    height:100%;
    position: fixed;
}
div .container{
    width: 60%;
    height: 50%;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    align-items: center;
    text-align: center;
    object-fit: contain;
}
/* span{
    display: hidden;
}
input{
    display: hidden;
} */
div .video1{
    width: 50%;
    height: 100%;
    border-right: 0;
    border-bottom: 0;
}
#video1{
    margin: 0;
    padding: 0;
    width:100%;
    height:100%;
}
#video2{
    margin: 0;
    padding: 0;
    width:100%;
    height:100%;
}
#video3{
    margin: 0;
    padding: 0;
    width:100%;
    height:100%;
}
#video4{
    margin: 0;
    padding: 0;
    width:100%;
    height:100%;
}

div .video2{
    width: 50%;
    height: 100%;

}
.container2{
    width: 60%;
    height: 50%;
    display: flex;
    align-items: center;
    text-align: center;
}
div .video3{
    width: 50%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0);

}
div .video4{
    width: 50%;
    height: 100%;
    border-top: 0;
    border-left: 0;
    background-color: #fff;

}
/* 그래프 */
#myChart{
  width: 100%;
  height: 100%;
  background-color: #fff;
}
    </style>
</head>

<body>
<?php
  $filename=$_POST['filename'];
  echo "<h2>".$filename."</h2>";
?>
  <div id="wrap">
    <div class="container">
      <div class="video1">
          <video id="video1" src="./play/car.mp4" autoplay controls></video>
      </div>
      <div class="video2">
          <video id="video2" src="../한전 차비서/car3.webm" autoplay controls></video>
      </div>
    </div>
    <div class="container2">
        <div class="video3">
          <video id="video2" src="../한전 차비서/car3.webm" autoplay controls></video>
        </div>
        <div class="video4">
          <br><br><br><br><br><br>
          <div>
            <canvas id="myChart"></canvas>
          </div>
        </div>
    </div>

      <script src="./jquery-1.12.3.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      <script src="./car.js"></script>
  </script>
</body>
</html>