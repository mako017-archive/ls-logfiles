<?php

$host = "mysql host name";
$user = "mysql user";
$password = "mysql user password";
$dbname = "mysql database name";

$mysqli = new mysqli($host, $user, $password, $dbname);
if($mysqli->connect_error) {
  exit('Error connecting to database');
}
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli->set_charset("utf8mb4");