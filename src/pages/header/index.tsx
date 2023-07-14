import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';

const header = () => {
  const router = useRouter()
  const handleLogout = ()=>{
    localStorage.setItem("loginVal",JSON.stringify(false));
    router.push("/login")
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">My Website</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/product">Product</a>
          </li>
          <li className="nav-item active">
            <a onClick={()=>handleLogout()} className="nav-link">Log Out</a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default header;
