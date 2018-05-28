<?php
    $ubicacion = "../Lista de usuarios .txt";
    $myfile = fopen($ubicacion, "r") or die("No se puede abrir el archivo!");
    echo fread($myfile,filesize($ubicacion));
    fclose($myfile);
?>