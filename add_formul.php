<?php


$loader = new  \Twig\Loader\FilesystemLoader ('./template');
$twig = new  \Twig\Environment ($loader);
$template = $twig->load('blank3.html');
echo $template->render(['cards' => [['name' => 'jlk', 'href' => 'kljl']]]);