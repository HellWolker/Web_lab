<?php
$nam=$_GET["nam"];
$email=$_GET["email"];
$txt=$_GET["txt"];
$db_host = "localhost";
$db_name = "f0593839_kos";
$db_user = "f0593839_kos";
$db_pass = "root";
$db = mysqli_connect ($db_host, $db_user, $db_pass, $db_name) or die ("Невозможно подключиться к БД");
mysqli_query ($db, "SET NAMES utf8");
$sql = "INSERT INTO coom SET name='$nam', email='$email', text='$txt'";
mysqli_query($db, $sql);
$res = mysqli_query($db, "SELECT * FROM coom ORDER BY ID");
$arPosts = array();
if ($res){
    while($row = mysqli_fetch_assoc($res)){
        $arPosts[] = $row;
    }   
}
foreach ($arPosts as $article): 
     echo '<br><br><div style="border: 1px solid pink"><span style="font-weight: bold; color: black;">'.$article['name'].'</span>, '.$article['email'].'<br>';
      echo '<p>'.$article['text'].'</p></div>';
     endforeach; 
?>