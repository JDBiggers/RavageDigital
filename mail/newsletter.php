<?php
    $to = 'admin@ravagedigital.com';
    $email= $_POST["email"];
    $subject = 'Newsletter Subscription Request';


    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= "From: " . $email . "\r\n"; // Sender's E-mail
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    $message ='<table style="width:100%">
        
        <tr><td>Email: '.$email.'</td></tr>
        <tr><td>Text: Newsletter Signup Application</td></tr>
        
    </table>';

    if (@mail($to, $subject, $message, $headers))
    {
        echo 'Thank you for you interest in Ravage Digital Studios.';
    }else{
        echo 'failed';
    }

?>
