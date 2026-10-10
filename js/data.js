const dataBahanAjar = [
    { 
        kodeLokasi: "OTMP01", 
        kodeBarang: "ASIP4301", 
        namaBarang: "Pengantar Ilmu Komunikasi", 
        jenis: "BMP", 
        edisi: 2, 
        stok: 548, 
        foto: "img/pengantar_komunikasi.jpg" // Sesuaikan ekstensi file jika .png atau .jpg
    },
    { 
        kodeLokasi: "OTMP02", 
        kodeBarang: "ADPU4332", 
        namaBarang: "Kepemimpinan", 
        jenis: "BMP", 
        edisi: 1, 
        stok: 320, 
        foto: "img/kepemimpinan.jpg" 
    },
    { 
        kodeLokasi: "OTMP03", 
        kodeBarang: "EKMA4214", 
        namaBarang: "Manajemen Keuangan", 
        jenis: "BMP", 
        edisi: 3, 
        stok: 150, 
        foto: "img/manajemen_keuangan.jpg" 
    },
    { 
        kodeLokasi: "OTMP04", 
        kodeBarang: "BIOL4223", 
        namaBarang: "Mikrobiologi", 
        jenis: "BMP", 
        edisi: 2, 
        stok: 210, 
        foto: "img/mikrobiologi.jpg" 
    },
    { 
        kodeLokasi: "OTMP05", 
        kodeBarang: "PAUD4306", 
        namaBarang: "Perkembangan dan Konsep Dasar Pengembangan Anak Usia Dini", 
        jenis: "BMP", 
        edisi: 4, 
        stok: 415, 
        foto: "img/paud_perkembangan.jpeg" 
    }
];

const dataTracking = {
    "18503984974": {
        namaMahasiswa: "ROIKA HEPRIDA SITIO",
        noDo: "18503984974",
        tanggal: "2026-03-10 15:56:02",
        rute: "TANGERANGSELATAN -> PEMATANGSIANTAR",
        alamat: "JALAN DANAU LAUT TAWAR 03 KELURAHAN",
        riwayat: [
            { status: "Selesai antar di PEMATANGSIANTAR\nDiterima oleh Roika", waktu: "2026-03-20 13:34:59" },
            { status: "Proses antar di PEMATANGSIANTAR", waktu: "2026-03-20 09:05:06" },
            { status: "Diteruskan ke Kantor Antaran PEMATANGSIANTAR", waktu: "2026-03-20 09:05:06" },
            { status: "Tiba di Hub SPP MEDAN", waktu: "2026-03-19 23:05:42" },
            { status: "Diteruskan ke Hub SPP MEDAN", waktu: "2026-03-19 23:05:36" },
            { status: "Diteruskan ke Kantor Antaran Lubukpakam", waktu: "2026-03-18 14:06:11" },
            { status: "Tiba di Hub TANGERANGSELATAN", waktu: "2026-03-12 10:37:02" },
            { status: "Penerimaan di loket: TANGERANGSELATAN\nPengirim: UNIVERSITAS TERBUKA", waktu: "2026-03-10 15:56:02" }
        ]
    }
};