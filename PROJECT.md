## Fork del Proyecto de backend para DevOps
Este es un proyecto utilizado en el curso de fundamentos de DevOps

## Descripción del Proyecto
El Proyecto cuenta con 5 endpoint de los cuáles 3 requieren el ingreso de valores por parametro para poder ser utilizados.

### Listado de Endpoints
A continuación el listado de lso endpoints dentro de la aplicación:

* Sin Parametro
    * http://localhost:3000/
    * http://localhost:3000/api-key
* Con Parametro
    * http://localhost:3000/operar?operacion=suma&num1={num1}&num2={num2}
        * Suma dos números y entrega el resultado.
        * Ejemplo
            * http://localhost:3000/operar?operacion=suma&num1=20&num2=30
    * http://localhost:3000/palindromo?frase={frase}
        * Reconoce si una frase es palindromo o no.
        * Ejemplo
            * http://localhost:3000/palindromo?frase=reconocer
    * http://localhost:3000/primo?numero={numero}   
        * Reconoce si el número es primo o no.
        * Ejemplo
            * http://localhost:3000/primo?numero=7

## Ejecución del proyecto
Para poder ejecutar el proyecto cómo pre-requisito debes tener instalado node, sino debes instalarlos descargando del siguiente link: [Nodejs](https://nodejs.org/en)

Para ejecutar el proyecto debes usar el siguiente comando:

    npm run dev


En caso de preesentar un error como el siguiente: 

    "tsx" no se reconoce como un comando interno o externo, programa o archivo por lotes ejecutable.


Debes instalar tsx de la siguiente manera:

    npm install -D tsx