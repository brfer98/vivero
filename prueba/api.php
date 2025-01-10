<?php
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Origin, Authorization, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Credentials: true');
}

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
        header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    }
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
        header("Access-Control-Allow-Headers: Origin, Authorization, X-Requested-With, Content-Type, Accept");
    }
    exit(0);
}

require 'conexion.php';

$conexion = new Conexion();
$Method = $_SERVER['REQUEST_METHOD'];

if ($Method == "GET") {
    try {
        // Verificamos si la tabla fue enviada en la URL
        if (isset($_GET['tabla'])) {
            $tabla = $_GET['tabla'];

            // Dependiendo del valor de 'tabla', hacemos diferentes consultas
            switch ($tabla) {



                case 'eleccion':
                    // Consulta para obtener los suministros
                    $queryEleccion = "SELECT descripcion, precio, stock, foto FROM opcion";
                    $pssEleccion = $conexion->getConexion()->prepare($queryEleccion);
                    $pssEleccion->execute();
                    $eleccion = $pssEleccion->fetchAll(PDO::FETCH_OBJ);
                    echo json_encode(["opcion" => $eleccion]);
                    break;




                case 'plantas_secano':
                    // Consulta para obtener los árboles frutales
                    $queryPlantasSecano = "SELECT descripcion, precio, stock, foto FROM plantas_secano";
                    $pssPlantasSecano = $conexion->getConexion()->prepare($queryPlantasSecano);
                    $pssPlantasSecano->execute();
                    $plantasSecano = $pssPlantasSecano->fetchAll(PDO::FETCH_OBJ);
                    echo json_encode(["plantasSecano" => $plantasSecano]);
                    break;

                    case 'plantas_acuaticas':
                    // Consulta para obtener los árboles frutales
                    $queryPlantasAcuaticas = "SELECT descripcion, precio, stock, foto FROM plantas_acuaticas";
                    $pssPlantasAcuaticas = $conexion->getConexion()->prepare($queryPlantasAcuaticas);
                    $pssPlantasAcuaticas->execute();
                    $plantasAcuaticas = $pssPlantasAcuaticas->fetchAll(PDO::FETCH_OBJ);
                    echo json_encode(["plantasAcuaticas" => $plantasAcuaticas]);
                    break;
                
                    case 'plantas_trepadoras':
                    // Consulta para obtener los árboles frutales
                    $queryPlantasTrepadoras = "SELECT descripcion, precio, stock, foto FROM plantas_trepadoras";
                    $pssPlantasTrepadoras = $conexion->getConexion()->prepare($queryPlantasTrepadoras);
                    $pssPlantasTrepadoras->execute();
                    $plantasTrepadoras = $pssPlantasTrepadoras->fetchAll(PDO::FETCH_OBJ);
                    echo json_encode(["plantasTrepadoras" => $plantasTrepadoras]);
                    break;
                    
                    case 'plantas_semillas':
                        // Consulta para obtener las semillas de plantas
                        $queryPlantasSemillas = "SELECT descripcion, precio, stock, foto FROM plantas_semillas";
                        $pssPlantasSemillas = $conexion->getConexion()->prepare($queryPlantasSemillas);
                        $pssPlantasSemillas->execute();
                        $plantasSemillas = $pssPlantasSemillas->fetchAll(PDO::FETCH_OBJ);
                        echo json_encode(["plantasSemillas" => $plantasSemillas]);
                        break;
                    

                case 'arboles_frutales':
                    // Consulta para obtener los árboles frutales
                    $queryArbolesFrutales = "SELECT descripcion, precio, stock, foto FROM arboles_frutales";
                    $pssArbolesFrutales = $conexion->getConexion()->prepare($queryArbolesFrutales);
                    $pssArbolesFrutales->execute();
                    $arbolesFrutales = $pssArbolesFrutales->fetchAll(PDO::FETCH_OBJ);
                    echo json_encode(["arbolesFrutales" => $arbolesFrutales]);
                    break;
            
                case 'arboles_florales':
                    // Consulta para obtener los árboles florales
                    $queryArbolesFlorales = "SELECT descripcion, precio, stock, foto FROM arboles_florales";
                    $pssArbolesFlorales = $conexion->getConexion()->prepare($queryArbolesFlorales);
                    $pssArbolesFlorales->execute();
                    $arbolesFlorales = $pssArbolesFlorales->fetchAll(PDO::FETCH_OBJ);
                    echo json_encode(["arbolesFlorales" => $arbolesFlorales]);
                    break;

                case 'palmaceas':
                    // Consulta para obtener las palmaceas
                    $queryPalmaceas = "SELECT descripcion, precio, stock, foto FROM palmaceas";
                    $pssPalmaceas = $conexion->getConexion()->prepare($queryPalmaceas);
                    $pssPalmaceas->execute();
                    $Palmaceas = $pssPalmaceas->fetchAll(PDO::FETCH_OBJ);
                    echo json_encode(["palmaceas" => $Palmaceas]);
                    break;

                case 'coniferas':
                    // Consulta para obtener las coníferas
                    $queryConiferas = "SELECT descripcion, precio, stock, foto FROM coniferas";
                    $pssConiferas = $conexion->getConexion()->prepare($queryConiferas);
                    $pssConiferas->execute();
                    $Coniferas = $pssConiferas->fetchAll(PDO::FETCH_OBJ);
                    echo json_encode(["coniferas" => $Coniferas]);
                    break;

                case 'todas_las_figuras':
                    // Consulta para obtener todas las figuras
                    $queryFiguras = "SELECT descripcion, precio, stock, foto FROM figuras";
                    $pssFiguras = $conexion->getConexion()->prepare($queryFiguras);
                    $pssFiguras->execute();
                    $figuras = $pssFiguras->fetchAll(PDO::FETCH_OBJ);
                    echo json_encode(["figuras" => $figuras]);
                    break;

                case 'figuras':
                    // Consulta para obtener solo las figuras populares
                    $queryFiguras = "SELECT descripcion, precio, stock, foto, popular FROM figuras WHERE popular = 'sí'";
                    $pssFiguras = $conexion->getConexion()->prepare($queryFiguras);
                    $pssFiguras->execute();
                    $figuras = $pssFiguras->fetchAll(PDO::FETCH_OBJ);
                    echo json_encode(["figuras" => $figuras]);
                    break;

                case 'suministros':
                    // Consulta para obtener los suministros
                    $querySuministros = "SELECT descripcion, precio, stock, foto FROM suministros";
                    $pssSuministros = $conexion->getConexion()->prepare($querySuministros);
                    $pssSuministros->execute();
                    $suministros = $pssSuministros->fetchAll(PDO::FETCH_OBJ);
                    echo json_encode(["suministros" => $suministros]);
                    break;

                case 'herramientas':
                    // Consulta para obtener las herramientas
                    $queryHerramientas = "SELECT descripcion, precio, stock, foto FROM herramientas";
                    $pssHerramientas = $conexion->getConexion()->prepare($queryHerramientas);
                    $pssHerramientas->execute();
                    $herramientas = $pssHerramientas->fetchAll(PDO::FETCH_OBJ);
                    echo json_encode(["herramientas" => $herramientas]);
                    break;

                    case 'herramientas_populares':
                        // Consulta para obtener las herramientas
                        $queryHerramientas = "SELECT descripcion, precio, stock, foto, popular FROM herramientas where popular ='si'";
                        $pssHerramientas = $conexion->getConexion()->prepare($queryHerramientas);
                        $pssHerramientas->execute();
                        $herramientas = $pssHerramientas->fetchAll(PDO::FETCH_OBJ);
                        echo json_encode(["herramientas" => $herramientas]);
                        break;

                case 'temporada':
                    // Consulta para obtener datos de la tabla temporada
                    $queryTemporada = "
                        SELECT t.descripcion, t.precio, t.stock, t.foto, t.popular, t.estacion, e.ciclo
                        FROM temporada t
                        INNER JOIN estacion e ON t.estacion = e.ciclo ";
                    $pssTemporada = $conexion->getConexion()->prepare($queryTemporada);
                    $pssTemporada->execute();
                    $temporada = $pssTemporada->fetchAll(PDO::FETCH_OBJ);
                    echo json_encode(["temporada" => $temporada]);
                    break;

                case 'temporada_seleccion':
                    // Consulta para obtener datos de la tabla temporada
                    $queryTemporada = "
                        SELECT t.descripcion, t.precio, t.stock, t.foto, t.estacion, e.ciclo
                        FROM temporada t
                        INNER JOIN estacion e ON t.estacion = e.ciclo
                        WHERE t.popular = 'sí'";
                    $pssTemporada = $conexion->getConexion()->prepare($queryTemporada);
                    $pssTemporada->execute();
                    $temporada = $pssTemporada->fetchAll(PDO::FETCH_OBJ);
                    echo json_encode(["temporada" => $temporada]);
                    break;

                default:
                    echo json_encode(["error" => "Tabla no reconocida"]);
                    break;
            }
        } else {
            echo json_encode(["error" => "No se especificó la tabla"]);
        }
    } catch (Throwable $th) {
        echo json_encode(["error" => $th->getMessage()]);
    } finally {
        $conexion->closeDataBase();
    } 
}


/////////////////////////////////////popularidad/////////////////////////////////////////


if ($Method == "POST") {
    $postData = json_decode(file_get_contents('php://input'), true);
    
    // Cambiar estación
    if ($_GET['accion'] == 'cambiar_estacion') {
        $estacion = $postData['estacion'];
        $query = "UPDATE estacion SET ciclo = :estacion";
        $pss = $conexion->getConexion()->prepare($query);
        $pss->bindParam(':estacion', $estacion);
        $pss->execute();
        echo json_encode(['status' => 'Estación actualizada']);
    }
    if ($_GET['accion'] == 'actualizar_popularidad') {
        $plantas = $postData['plantas'];
    
        foreach ($plantas as $planta) {
            $descripcion = $planta['descripcion'];
            // Aquí se guarda 'sí' si el checkbox está marcado, y 'no' si no lo está
            $popular = $planta['popular'] === 'sí' || $planta['popular'] === 'true' ? 'sí' : 'no'; 
    
            // Consulta para actualizar en la base de datos
            $query = "UPDATE temporada SET popular = :popular WHERE descripcion = :descripcion";
            $pss = $conexion->getConexion()->prepare($query);
            $pss->bindParam(':popular', $popular);
            $pss->bindParam(':descripcion', $descripcion);
            $pss->execute();
        }
    
        echo json_encode(['status' => 'Popularidad actualizada']);
    }
    if ($_GET['accion'] == 'actualizar_popularidad_figuras') {
        try {
            $figuras = $postData['figuras'];
    
            foreach ($figuras as $figura) {
                $descripcion = $figura['descripcion'];
                $popular = $figura['popular'] === 'sí' || $figura['popular'] === 'true' ? 'sí' : 'no';
    
                $query = "UPDATE figuras SET popular = :popular WHERE descripcion = :descripcion";
                $pss = $conexion->getConexion()->prepare($query);
                $pss->bindParam(':popular', $popular);
                $pss->bindParam(':descripcion', $descripcion);
                $pss->execute();
            }
    
            echo json_encode(['status' => 'Popularidad actualizada']);
        } catch (Exception $e) {
            // Manejo de error: devuelve un JSON con el mensaje de error
            echo json_encode(['error' => $e->getMessage()]);
        }
        exit; // Asegúrate de salir para que no se envíe más contenido
    }
    
    
    if ($_GET['accion'] == 'actualizar_popularidad_herramientas') {
        try {
            $herramientas = $postData['herramientas'];
    
            foreach ($herramientas as $herramienta) {
                $descripcion = $herramienta['descripcion'];
                $popular = $herramienta['popular'] === 'sí' || $herramienta['popular'] === 'true' ? 'sí' : 'no';
    
                $query = "UPDATE herramientas SET popular = :popular WHERE descripcion = :descripcion";
                $pss = $conexion->getConexion()->prepare($query);
                $pss->bindParam(':popular', $popular);
                $pss->bindParam(':descripcion', $descripcion);
                $pss->execute();
            }
    
            echo json_encode(['status' => 'Popularidad actualizada']);
        } catch (Exception $e) {
            // Manejo de error: devuelve un JSON con el mensaje de error
            echo json_encode(['error' => $e->getMessage()]);
        }
        exit; // Asegúrate de salir para que no se envíe más contenido
    }
    
}

?>
