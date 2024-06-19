<?php
$logFile = 'form_log.txt';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $company = $_POST['company'];
    $consent = isset($_POST['consent']) ? 'Yes' : 'No';

    $logEntry = date('Y-m-d H:i:s') . " | Name: $name | Phone: $phone | Company: $company | Consent: $consent\n";

    file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX);
    echo "Спасибо! Ваши данные были отправлены и сохранены.";
} else {
    header('Location: index.html');
    exit();
}
?>