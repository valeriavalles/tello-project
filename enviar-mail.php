<?php
if(isset($_POST['email'])) {

// Debes editar las próximas dos líneas de código de acuerdo con tus preferencias
$email_to = "ventas@vivesolaris.com";
$email_subject = "Contácto desde página web";
// Aquí se deberían validar los datos ingresados por el usuario

if(!isset($_POST['firstname']) || !isset($_POST['lastname']) || !isset($_POST['mobile']) || !isset($_POST['email']) || !isset($_POST['message'])) {
echo "<b>Ocurrio un error inesperado durante el envío </b><br />";
echo "Por favor, vuelva a enviar el formulario<br />";
die();
}

$email_message = "Detalle del formulario:\n\n";
$email_message .= "Nombres: " . $_POST['firstname'] . "\n";
$email_message .= "Apellidos: " . $_POST['lastname'] . "\n";
$email_message .= "E-mail: " . $_POST['email'] . "\n";
$email_message .= "Celular: " . $_POST['mobile'] . "\n";
$email_message .= "Mensaje: " . $_POST['message'] . "\n\n";


// Ahora se envía el e-mail usando la función mail() de PHP
$headers = 'From: '."ventas@vivesolaris.com\r\n".
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);
}
?>
