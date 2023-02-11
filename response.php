<?php

function response($status,$message,$result=null){
    $response['status']=$status;
    $response['message']=$message;
    $response['result']=$result;
    return $response;
}