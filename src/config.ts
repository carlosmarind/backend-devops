export const configuration = {
    username: process.env.USERNAME || 'default',  // se obtiene de variable de entorno o por defecto 'default'
    apikey: process.env.APIKEY || 'default-key', // se obtiene de variable de entorno o por defecto 'default-key'
    port: process.env.PORT || 3001,              // se obtiene de variable de entorno o por defecto 3000 que fue modificada para la tarea por valor 3001
}
