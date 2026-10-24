<?php

$conn = mysqli_connect("localhost","root","","electricity_bill");

if(!$conn)
{
    die("Connection Failed : " . mysqli_connect_error());
}

?>