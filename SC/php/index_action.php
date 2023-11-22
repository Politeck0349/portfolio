<?php
    $username = $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $host = 'localhost';
    $user = 'root';
    $pw = '123456';
    $dbName = 'smart_select';
    $mysqli = new mysqli($host, $user, $pw, $dbName);
    if($mysqli){
        echo "MySQL 접속 성공{$username},{$password},{$email},{$phone}";
    }else{
        echo "MySQL 접속 실패";
    }
    // $sql = "SELECT * FROM member WHERE memberId = '{$username}'";
    // $res = $dbConnect->query($sql);
    $sql = "INSERT INTO login(username, password, email, phone)
    VALUES ('{$username}', '{$password}', '{$email}', {$phone})";
    if ($mysqli->query($sql) === TRUE) {
        echo "New record created successfully";
    } 
    else {
        echo "Error: " . $sql . "<br>" . $mysqli->error;
    }
    $mysqli->close();
?>