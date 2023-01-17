import suntikan from "../assets/suntikan.png";
import anak from "../assets/anak.png";
import imunisasi from "../assets/imunisasi.png";
import petugas from "../assets/petugas.png";
import riwayat_vaksin from "../assets/riwayat_vaksin.png";
import timbangan from "../assets/timbangan.png";

const CardData = [
    {
        img:imunisasi,
        title:'Data Imunisasi',
        navigate:'/imunisasi'
    },
    {
        img:suntikan,
        title:'Data Vaksin',
        navigate: '/vaksin'
    },
    {
        img:anak,
        title:'Data Anak',
        navigate: '/anak'
    },
    {
        img:petugas,
        title:'Data Petugas',
        navigate: '/petugas'
    },
    {
        img:timbangan,
        title:'Data Timbangan',
        navigate: '/timbangan'
    },
    {
        img:riwayat_vaksin,
        title:'Kunjungan',
        navigate: '/riwayat_kunjungan'
    },
]

export default CardData