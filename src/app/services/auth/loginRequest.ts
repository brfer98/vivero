//esto es una interfaz: ES UN CONTRATO QUE ESPECIFICA LOS ATRIBUTOS Y METODOS QUE DEBEN SER IMPLEMENTADOS POR CUALQUIER CLASE QUE LA IMPLEMENTE

export interface LoginRequest{
    
    //especificamos los atributos que se necesitan implementar
    email:string,
    password:string
}