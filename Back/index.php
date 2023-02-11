<?php

require_once("Router.php");

if(isset($_GET['action']))
    $action = $_GET['action'];
else
    $action = "no_action";

$router = new Router();

$router->register('getSup','supplier', 'getSup');
$router->register('newSup','Supplier', 'newSup');
$router->register('removeSup','supplier', 'removeSup');
$router->register('updateSup','supplier', 'updateSup');

$router->register('getGood','good', 'getGood');
$router->register('newGood','good', 'newGood');
$router->register('removeGood','good', 'removeGood');
$router->register('updateGood','good', 'updateGood');

$router->register('getInput','Input', 'getInput');
$router->register('newInput','input', 'newInput');
$router->register('removeInput','input', 'removeInput');
$router->register('updateInput','input', 'updateInput');

$router->register('getOuput','Ouput', 'getOuput');
$router->register('newOuput','Ouput', 'newOuput');
$router->register('removeOuput','Ouput', 'removeOuput');
$router->register('updateOuput','Ouput', 'updateOuput');

$router->register('getInv','inv', 'getInv');
$router->register('newInv','inv', 'newInv');
$router->register('removeInv','inv', 'removeInv');
$router->register('updateInv','inv', 'updateInv');

$response = $router->run($action);

echo json_encode($response);

?>