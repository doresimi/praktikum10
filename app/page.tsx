import Link from 'next/link';
import React from 'react';



const Home: React.FC = () => {
  return (
    <>
      
      <div className="bg-light">
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row align-items-center g-5 py-5">
            <div className="col-lg-12 text-center">
              <h1 className="display-3 fw-bold lh-1 mb-3">Sempurnakan Momen Anda</h1>
              <p className="lead col-lg-8 mx-auto">
                Dengan hidangan istimewa dari kami, setiap acara menjadi tak terlupakan.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                <Link href="/catering" className="btn btn-primary btn-lg px-4 me-md-2">Lihat Paket Kami</Link>
                <Link href="/kontak" className="btn btn-outline-secondary btn-lg px-4">Hubungi Kami</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div className="container my-5 py-5">
        <h2 className="text-center fw-bold mb-5">Paket Katering Paling Populer</h2>
        <div className="row">
          {/* Paket Kaum Tani (ID: 1) */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 border-0 shadow-sm">
             
             
              <div className="card-body">
                <h5 className="card-title">Paket Kaum Tani (peasants)</h5>
                <p className="card-text">Nasi kemarin campur garam ditambah kecap manis.</p>
              </div>
              <div className="card-footer bg-white border-0 pb-3">
                
                <Link href="/paket/1" className="btn btn-outline-primary w-100">Lihat Detail</Link>
              </div>
            </div>
          </div>
          
          {/* Paket Ksatria (ID: 2) */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 border-0 shadow-sm">
        
            
              <div className="card-body">
                <h5 className="card-title">Paket Ksatria</h5>
                <p className="card-text">Nasi padang Ayam Kari dengan Telur BALADO dibaluti bumbu rendang biasa aja.</p>
              </div>
              <div className="card-footer bg-white border-0 pb-3">
                <Link href="/paket/2" className="btn btn-outline-primary w-100">Lihat Detail</Link>
              </div>
            </div>
          </div>

          {/* Paket Pendeta (ID: 3) */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 border-0 shadow-sm">
             
              
              <div className="card-body">
                <h5 className="card-title">Paket Pendeta</h5>
                <p className="card-text">Nikmati puncak kenikmatan dunia dengan A5 Olive Wagyu.</p>
              </div>
              <div className="card-footer bg-white border-0 pb-3">
                <Link href="/paket/3" className="btn btn-outline-primary w-100">Lihat Detail</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Mengapa Memilih Kami?</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <i className="bi bi-award-fill fs-1 text-primary"></i>
              <h4 className="mt-3">Bahan Baku Terbaik</h4>
              <p className="text-muted">Kami hanya menggunakan bahan baku segar dan berkualitas tinggi dari pemasok terpercaya.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="bi bi-people-fill fs-1 text-primary"></i>
              <h4 className="mt-3">Chef Profesional</h4>
              <p className="text-muted">Dimasak oleh tim chef berpengalaman untuk menjamin cita rasa yang konsisten dan lezat.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="bi bi-truck fs-1 text-primary"></i>
              <h4 className="mt-3">Pengiriman Tepat Waktu</h4>
              <p className="text-muted">Layanan pengiriman kami memastikan pesanan Anda tiba di lokasi tepat waktu dan dalam kondisi prima.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;