const config = require("dotenv"); //module to configure environment variables
const ambiente = config.config(); //loads environment variables created in .env

const { parsed: env } = ambiente;
module.exports = env;

/* error de los campos obligatorios, hacer esto.
"status": 500,
"message": "data and hash arguments required" error cuando no mandas password IN 
*/

/* error cuando no mandas usuario en in
{
  "status": 404,
  "message": "No se ha enviado el campo undefined que es obligatorio"
}*/

/*
{ en signup sin name
  "status": 500,
  "message": "User validation failed: name: Path `name` is required."
}*/

/* en signup sin username
  "status": 404,
  "message": "No se ha enviado el campo undefined que es obligatorio"
}*/

/* en signup sin username
{
    "status": 500,
    "message": "User validation failed: password: Path `password` is required."
}*/

// error si ya estas autenticado
// al loguearse y no existen ni el usuario ni la contraseña
