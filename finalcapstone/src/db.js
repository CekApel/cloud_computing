const { Sequelize } = require('sequelize');

// Konfigurasi koneksi database
const sequelize = new Sequelize('cek_apel', 'root', 'Adminapel12', {
    host: '35.247.177.225',
    dialect: 'mysql', // Gunakan dialect MySQL
    logging: false, // Nonaktifkan log query, opsional
});

// Cek koneksi
sequelize.authenticate()
    .then(() => {
        console.log('Koneksi ke database berhasil!');
    })
    .catch((error) => {
        console.error('Gagal terhubung ke database:', error);
    });

module.exports = sequelize;
