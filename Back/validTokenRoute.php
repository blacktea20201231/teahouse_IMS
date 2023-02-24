<?php
require_once('./Router.php');
require_once('./response.php');
function validTokenRoute($action){

if($action=='no_action'){
    $response=response(200, "action not found");
    return $response;
}
 
$router = new Router();

$router->register('getUser','Users', 'getUser');
$router->register('newUser','Users', 'newUser');
$router->register('removeUser','Users', 'removeUser');
$router->register('updateUser','Users', 'updateUser');

$router->register('getSup','supplier', 'getSup');
$router->register('newSup','supplier', 'newSup');
$router->register('removeSup','supplier', 'removeSup');
$router->register('updateSup','supplier', 'updateSup');


$router->register('getGood','good', 'getGood');
$router->register('newGood','good', 'newGood');
$router->register('removeGood','good', 'removeGood');
$router->register('updateGood','good', 'updateGood');
$router->register('getGood_detail','good','getGood_detail');
$router->register('getGood_detail2','good','getGood_detail2');
$router->register('getGood_unit','good','getGood_unit');

$router->register('getInput','input', 'getInput');
$router->register('newInput','input', 'newInput');
$router->register('removeInput','input', 'removeInput');
$router->register('updateInput','input', 'updateInput');
$router->register('getInputWithName','input', 'getInputWithName');


$router->register('getOutput','output', 'getOutput');
$router->register('newOutput','output', 'newOutput');
$router->register('removeOuput','output', 'removeOuput');
$router->register('updateOuput','output', 'updateOuput');
$router->register('getOutputWithName','output', 'getOutputWithName');

$router->register('getInv','inv', 'getInv');
$router->register('newInv','inv', 'newInv');
$router->register('removeInv','inv', 'removeInv');
$router->register('updateInv','inv', 'updateInv');
$router->register('getInvWithName','inv', 'getInvWithName');

$response = $router->run($action);
return $response;
}

?>
