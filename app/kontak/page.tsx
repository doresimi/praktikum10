import React from 'react';

const KontakPage: React.FC = () => {
  return (
    <div className="bg-light">
      <div className="container py-5 my-5">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">Hubungi Kami</h1>
          <p className="lead text-muted">Kami siap membantu merencanakan acara Anda. Silakan isi form di bawah atau hubungi kami langsung.</p>
        </div>

        <div className="row g-5">
          {/* Kolom Informasi Kontak */}
          <div className="col-md-5 col-lg-4">
            <h4 className="mb-3">Informasi Kontak</h4>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-start">
                <i className="bi bi-geo-alt-fill fs-4 me-3 text-primary"></i>
                <div>
                  <strong>Alamat:</strong><br />
                  Jalan BAPAKjustin,<br />
                  Jakarta Timur, 14450
                </div>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <i className="bi bi-telephone-fill fs-4 me-3 text-primary"></i>
                <div>
                  <strong>Telepon:</strong><br />
                  <a href="tel:+62211234567" className="text-decoration-none text-dark">+62 21 1234 567</a>
                </div>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <i className="bi bi-envelope-fill fs-4 me-3 text-primary"></i>
                <div>
                  <strong>Email:</strong><br />
                  <a href="mailto:order@nightmarket.com" className="text-decoration-none text-dark">order@nightmarket.com</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Kolom Form Kontak */}
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Kirim Pesan</h4>
            <form>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">Nama Depan</label>
                  <input type="text" className="form-control" id="firstName" required />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">Nama Belakang</label>
                  <input type="text" className="form-control" id="lastName" />
                </div>
                <div className="col-12">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="anda@contoh.com" required />
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="form-label">Pesan</label>
                  <textarea className="form-control" id="message" rows={5} required></textarea>
                </div>
              </div>
              <button className="btn btn-primary btn-lg mt-4" type="submit">Kirim Pesan</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KontakPage;