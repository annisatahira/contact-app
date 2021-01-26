import React from 'react';
import { Button } from '../Button';
import { FaPlus } from 'react-icons/fa';
import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        Kelola Kontak
      </div>
      <Button
        buttonStyle="btn--add"
      >
        <FaPlus className="btn-icon"/>
        Tambah Kontak
      </Button>
    </nav>
  )
};

export default Navbar;