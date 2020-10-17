<?php
include "config.php";

$data = json_decode(file_get_contents('php://input'));

$sql = $mysqli->prepare("INSERT INTO `LogfilesLisa` (VPCode, Grp, Log) VALUES (?, ?, ?)");

$sql->bind_param("sis", $data->VPCode, $data->grp, $data->logData);

$sql->execute();

$sql->close();