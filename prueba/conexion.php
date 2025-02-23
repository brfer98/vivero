<?php

class Conexion
{
    private $conection = null;

    public function getConexion()
    {
        try {
            //$this->conection = new PDO("mysql:host=localhost;port=3306;dbname=vivero", "root", "");
            $this->conection = new PDO("mysql:host=localhost;port=3306;dbname=vivero-con-login", "root", "");
            $this->conection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->conection->exec("set names utf8");
        } catch (PDOException $e) {
            echo json_encode(["error" => $e->getMessage()]);
            exit;
        }
        return $this->conection;
    }

    public function closeDataBase()
    {
        if ($this->conection != null) {
            $this->conection = null;
        }
    }
}
?>
