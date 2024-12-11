# Artikel dan Prediksi API

API ini digunakan untuk mengelola artikel dan melakukan prediksi klasifikasi gambar menggunakan model machine learning.

## Fitur
- Mendapatkan semua artikel
- Menambahkan artikel baru dengan gambar
- Memperbarui artikel berdasarkan nama
- Melakukan prediksi klasifikasi gambar

## Menjalankan Server
Server ini dideploy ke Google Cloud Platform (GCP) menggunakan App Engine. 

## Dokumentasi API

### 1. Mendapatkan Semua Artikel
**GET** `/artikels`

- **Deskripsi:** Mendapatkan daftar semua artikel.
- **Respons:**
  ```json
  {
    "status": "success",
    "data": [
      {
        "id": "string",
        "nama": "string",
        "deskripsi": "string",
        "penanganan_penyakit": "string",
        "image_url": "string"
      }
    ]
  }
  ```

### 2. Menambahkan Artikel Baru
**POST** `/artikels`

- **Deskripsi:** Menambahkan artikel baru dengan gambar.
- **Body:**
  - `nama` (string)
  - `deskripsi` (string)
  - `penangananPenyakit` (string)
  - `image` (file)
- **Respons:**
  - `201`: Artikel berhasil ditambahkan
  - `409`: Artikel dengan nama yang sama sudah ada

### 3. Memperbarui Artikel
**PUT** `/artikels/{nama}`

- **Deskripsi:** Memperbarui artikel berdasarkan nama.
- **Body:**
  - `deskripsi` (string, optional)
  - `penangananPenyakit` (string, optional)
  - `image` (file, optional)
- **Respons:**
  - `200`: Artikel berhasil diperbarui
  - `404`: Artikel tidak ditemukan

### 4. Prediksi Klasifikasi Gambar
**POST** `/predict`

- **Deskripsi:** Melakukan prediksi klasifikasi gambar.
- **Body:**
  - `image` (file)
- **Respons:**
  ```json
  {
    "status": "success",
    "message": "Model is predicted successfully.",
    "data": {
      "result": "string",
      "explanation": "string",
      "suggestion": "string",
      "medicine": "string",
      "confidenceScore": 100,
      "createdAt": "2024-12-11T10:00:00.000Z"
    }
  }
  ```

## Dependensi
- **Node.js**
- **Hapi.js**
- **Sequelize** (ORM untuk database)
- **GCP Bucket SDK** (untuk unggah gambar)

## Pengaturan Lingkungan
Buat file `.env` di root proyek dan tambahkan konfigurasi berikut:

```env
DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=
GCP_BUCKET_NAME=
MODEL_PATH=
```
## Cloud Architecture
Berikut adalah arsitektur cloud yang digunakan dalam proyek ini:

![Cloud Architecture](https://github.com/CekApel/cloud_computing/blob/b4257ed3c2adbde9fd9f003636c99f28d5c161f4/CloudArchi.png)

## ML Deployment Architecture
Berikut adalah arsitektur deployment model machine learning:

![ML Deployment Architecture](https://github.com/CekApel/cloud_computing/blob/b4257ed3c2adbde9fd9f003636c99f28d5c161f4/mlArchi.png)

