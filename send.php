<?php
    $name = $_POST['name'];
    $text = $_POST['text'];
    $email = $_POST['email'];
    $token = "";
    $chat_id = "-1001370030402";
    $arr = array(
        'Имя: ' => $name,
        'Email: ' => $email,
        'Сообщение: ' => $text
    );

    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
?>
