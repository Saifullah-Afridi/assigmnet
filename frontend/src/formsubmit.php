<?php
 header('Access-Control-Allow-Origin: *');

 $conn = mysqli_connect("localhost","root","","bookstore");

 if(mysqli_connect_error()){
    echo mysqli_connect_error();
    exit();
 }
 else{
    $bookID = $_POST['bookID'];
    $bookName = $_POST['bookName'];
    $author = $_POST['author'];
    $bookDescription = $_POST['bookDescription'];
    $edition = $_POST['edition'];

    $sql = "INSERT INTO bookstore(bookID,bookName,author,bookDescription,edition) VALUES('$bookID','$bookName','$author','$bookDescription','$edition')";
    $res = mysql_query($conn,$sql);

    if($res){
        echo "Data inserted successfully";
    } else{
        echo "Error inserting data";
    }
    $conn->close();
    }
 
?> 