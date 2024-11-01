const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "Moitex20",
  database: "gestion_libros",
  allowExitOnIdle: true,
});

const getBooks = async () => {
  const { rows: boks } = await pool.query("SELECT * FROM books");
  return boks;
};

const deleteBooks = async (id) => {
  const consulta = "DELETE FROM books WHERE id = $1";
  const values = [id];
  const { rowCount } = await pool.query(consulta, values);
  if (!rowCount)
    throw { code: 404, message: "No se encontró ningún libro con este ID" };
};

const verificarCredenciales = async (email, password) => {
  const consulta = "SELECT * FROM users WHERE email =$1 AND password =$2;";
  const values = [email, password];
  const { rowCount } = await pool.query(consulta, values);
  if (!rowCount)
    throw {
      code: 404,
      message: "No se encontro ningun usuario con estas credenciales",
    };
};
module.exports = { getBooks, verificarCredenciales, deleteBooks };
