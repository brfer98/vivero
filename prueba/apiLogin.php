<?php

    header('Content-Type: application/json');
    include 'conexion.php';

    //obtener los datos de la solicitud post
    $input = json_decode(file_get_contents('php://input'), true);
    $email = $input['email'];
    $password = $input['password'];

    //validar que los datos no esten vacios
    if(empty($email) || empty($password)){
        echo json_encode((['message' => 'ingrese datos']));
        exit();
    }
    
    // Verificar el usuario en la base de datos
    $query = "SELECT * FROM usuarios WHERE nombre_usuario = $email";
    $stmt = $pdo->prepare($query);
    $stmt->execute(['nombre_usuario' => $email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$user) {
        echo json_encode(['message' => 'Usuario no encontrado.']);
        exit();
    }

    // Verificar la contraseña
    if (!password_verify($password, $user['password'])) {
        echo json_encode(['message' => 'Contraseña incorrecta.']);
        exit();
    }

    //generar token
    $token = generateToken($user['ID']);  

    function generateToken($userId) {

    }


?>
