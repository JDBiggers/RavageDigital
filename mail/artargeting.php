
<?php
// Comment/Question Submission
$postData = $uploadedFile = $statusMsg = '';
$msgClass = 'errordiv';
if(isset($_POST['submit'])){
    $postData = $_POST;
    $email = $_POST['email'];
	$lob = $_POST['lob'];
	$city = $_POST['city'];
	$state = $_POST['state'];
	$company = $_POST['company'];
    $lastname = $_POST['lastname'];
	$firstname = $_POST['firstname'];
    $phone = $_POST['phone'];
	$contactmethod = $_POST['contactmethod'];
    $message = $_POST['message'];
    
    if(!empty($email) && !empty($name) && !empty($subject) && !empty($message)){
        
        if(filter_var($email, FILTER_VALIDATE_EMAIL) === false){
            $statusMsg = 'Please enter a valid email.';
        }else{
                $toEmail = 'admin@ravagedigital.com';
                $from = $email;
                $fromName = $name;
                $emailSubject = 'ADVERTISING Contact Request Submitted by '.$lastname. ', ' .$firstname;
                $htmlContent = '<h2>Contact Request Submitted</h2>
                    <p><b>Name: </b> '.$lastname. ', ' .$firstname.'</p>
					<p><b>Phone: </b> '.$phone.'</p>
                    <p><b>Email: </b> '.$email.'</p>
					<p><b>Line of Business: </b> '.$lob.'</p>
					<p><b>Company: </b> '.$company.'</p>
                    <p><b>City: </b> '.$city.'</p>
					<p><b>State: </b> '.$state.'</p>
					<p><b>Best Contact Method:</b> '.$contactmethod.'</p>
                    <p><b>Message:</b><br/>'.$message.'</p>';
           
                $headers = "From: $fromName"." <".$from.">";
                $headers .= "\r\n". "MIME-Version: 1.0";
                $headers .= "\r\n". "Content-type:text/html;charset=UTF-8";
                    
                $mail = mail($toEmail, $emailSubject, $htmlContent, $headers); 
               
                if($mail){
                    $statusMsg = 'Your submission has been successfully sent!';
                    $msgClass = 'succdiv';
                    
                    $postData = '';
                }else{
                    $statusMsg = 'Your submission failed, please try again.';
                }
            }
        
    }else{
        $statusMsg = 'Please fill out all the fields.';
    }
}
?>