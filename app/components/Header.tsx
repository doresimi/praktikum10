import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
    
      <nav className="navbar navbar-dark bg-dark shadow-sm py-5">
        
        <div className="container justify-content-center">
        
          <Link className="navbar-brand fw-bold fs-1" href="/">
          MELLY CATERING
          </Link>
          
          
        </div>
      </nav>
    </header>
  );
}

export default Header;