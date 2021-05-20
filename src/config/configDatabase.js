

module.exports = {
  dialect: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  define: {
    timestamps: true, // Exige a criação dos campos created_at e updated_at nas tabelas.
    underscored: true, // Define os nomes da tabela e das colunas no formato snake_case.
  }
}