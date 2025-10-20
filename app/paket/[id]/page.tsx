import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type PaketDetailPageProps = {
  params: {
    id: string;
  };
};

const PaketDetailPage: React.FC<PaketDetailPageProps> = ({ params }) => {
  
  let namaPaket = "Paket Tidak Ditemukan";
  let deskripsi = "Deskripsi untuk paket ini tidak tersedia.";
  let harga = "N/A";

  if (params.id === '1') {
    namaPaket = "Paket Kaum Tani";
    deskripsi = "Sebuah hidangan sederhana namun penuh kenangan. Terdiri dari nasi sisa kemarin yang dihangatkan kembali, disajikan dengan taburan garam gurih dan sentuhan akhir kecap manis legit.cocok banget dibeli di akhir bulan ";
    harga = "Rp 5.000 / porsi";
  } else if (params.id === '2') {
    namaPaket = "Paket Ksatria";
    deskripsi = "Pilihan pemberani untuk perut yang lapar. Nasi Padang autentik dengan lauk ayam kari empuk dan telur balado pedas, disiram dengan bumbu rendang yang medok. dengan harga yang biasa juga , tidak bisa dibilang sehat tapi tidak murah juga karena biaya rumah sakit jika kamu mengkonsumsi setiap hari";
    harga = "Rp 25.000 / porsi";
  } else if (params.id === '3') {
    namaPaket = "Paket Pendeta";
    deskripsi = "Capai puncak kenikmatan duniawi dengan A5 Olive Wagyu.tidak banyak orang yang dapat mencicipi kenikmatan mencapai surga ini. Daging sapi premium dari sapi yang diberi pakan zaitun dan dipijat setiap hari untuk tekstur marbling yang sempurna,hanya orang yang memiliki gaji di atas rata rata orang normal yang dapat mencicipi makanan ini, untuk mendapatkan gaji yang di atas rata rata , anda hanya perlu duduk di gedung mewah .biasa ini adalah hidangan utama KAUM DPR "
    harga = "Rp 1.000.500.000 / porsi";
  }

  return (
    <div className="container my-5 py-5">
    
      <div className="row justify-content-center">
      
        
        <div className="col-lg-8 d-flex flex-column justify-content-center text-center">
          <h1 className="display-5 text-capitalize fw-bold">{namaPaket}</h1>
          <p className="fs-4 text-primary fw-bold">{harga}</p>
          <p className="text-muted">{deskripsi}</p>
          <div className="mt-3">
            <Link href="/kontak" className="btn btn-primary btn-lg">
              <i className="bi bi-whatsapp me-2"></i> Pesan Sekarang
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaketDetailPage;