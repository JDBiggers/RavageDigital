
<?php
//character submission
$postData = $uploadedFile = $statusMsg = '';
$msgClass = 'errordiv';
if(isset($_POST['submit'])){
    // Retrieve form data from post
    $postData = $_POST;
    $email = $_POST['email'];
    $name = $_POST['name'];
	$phone = $_POST['phone'];
	$age = $_POST['age'];
	$charactername = $_POST['charactername'];
	$characterdetails = $_POST['characterdetails'];
	$otherinfo = $_POST['otherinfo'];	
    $subject = 'Dark Solstice Character Submission';
    if(!empty($email) && !empty($name) && !empty($charactername) && !empty($characterdetails)){
        
        if(filter_var($email, FILTER_VALIDATE_EMAIL) === false){
            $statusMsg = 'Please enter your valid email.';
        }else{
            $uploadStatus = 1;
            
            if(!empty($_FILES["attachment"]["name"])){
                
                $targetDir = "uploads/";
                $fileName = basename($_FILES["attachment"]["name"]);
                $targetFilePath = $targetDir . $fileName;
                $fileType = pathinfo($targetFilePath,PATHINFO_EXTENSION);
                $allowTypes = array('pdf', 'doc', 'docx', 'jpg', 'png', 'jpeg', 'tiff', 'bmp');
                if(in_array($fileType, $allowTypes)){
                    if(move_uploaded_file($_FILES["attachment"]["tmp_name"], $targetFilePath)){
                        $uploadedFile = $targetFilePath;
                    }else{
                        $uploadStatus = 0;
                        $statusMsg = "Sorry, there was an error uploading your file.";
                    }
                }else{
                    $uploadStatus = 0;
                    $statusMsg = 'Sorry, only PDF, DOC, JPG, JPEG, TIFF, BMP & PNG files are allowed to upload.';
                }
            }
            
            if($uploadStatus == 1){
                
                // Email Goes To:
                $toEmail = 'admin@ravagedigital.com';
                $from = $email;
                $fromName = $name;
                $emailSubject = 'Chracter Contest Application Submitted by '.$name;
                
                // HTML Message 
                $htmlContent = '<h2>Contact Request Submitted</h2>
                    <p><b>Name:</b> '.$name.'</p>
                    <p><b>Email:</b> '.$email.'</p>
                    <p><b>Subject:</b> '.$subject.'</p>
                    <p><b>Message:</b><br/>Dark Solstice Character Submission</p>
					<p><b>Sent By:</b>'.$name.' '.$age.'</p>
					<p><b>Contact Phone:</b> '.$phone.'</p>
					<p><b>Character Name:</b>'.$charactername.'</p>
					<p><b>Character Description:</b> '.$characterdetails.'</p>
					<p><b>Other Info:</b> '.$otherinfo.'</p>';
                
                // Header for sender info
                $headers = "From: ".$fromName." <".$from.">";

                if(!empty($uploadedFile) && file_exists($uploadedFile)){
                   
                    $semi_rand = md5(time()); 
                    $mime_boundary = "==Multipart_Boundary_x{$semi_rand}x"; 
                   
                    $headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\""; 
                    
                    // Multipart boundary 
                    $message = "--{$mime_boundary}\n" . "Content-Type: text/html; charset=\"UTF-8\"\n" .
                    "Content-Transfer-Encoding: 7bit\n\n" . $htmlContent . "\n\n"; 
                    
                    // Preparing attachment
                    if(is_file($uploadedFile)){
                        $message .= "--{$mime_boundary}\n";
                        $fp =    @fopen($uploadedFile,"rb");
                        $data =  @fread($fp,filesize($uploadedFile));
                        @fclose($fp);
                        $data = chunk_split(base64_encode($data));
                        $message .= "Content-Type: application/octet-stream; name=\"".basename($uploadedFile)."\"\n" . 
                        "Content-Description: ".basename($uploadedFile)."\n" .
                        "Content-Disposition: attachment;\n" . " filename=\"".basename($uploadedFile)."\"; size=".filesize($uploadedFile).";\n" . 
                        "Content-Transfer-Encoding: base64\n\n" . $data . "\n\n";
                    }
                    
                    $message .= "--{$mime_boundary}--";
                    $returnpath = "-f" . $email;
                    
                    $mail = mail($toEmail, $emailSubject, $message, $headers, $returnpath);
                    
                    // Delete attachment file from the server
					//Should I be doing this?
                    @unlink($uploadedFile);
                }else{
                    $headers .= "\r\n". "MIME-Version: 1.0";
                    $headers .= "\r\n". "Content-type:text/html;charset=UTF-8";
                    
                    // Send email
                    $mail = mail($toEmail, $emailSubject, $htmlContent, $headers); 
                }
                if($mail){
                    $statusMsg = 'Your character submission was successful and will be reviewed!';
                    $msgClass = 'succdiv';
                    
                    $postData = '';
                }else{
                    $statusMsg = 'Your character submission failed, please try again.';
                }
            }
        }
    }else{
        $statusMsg = 'Please fill all the fields.';
    }
}
?>