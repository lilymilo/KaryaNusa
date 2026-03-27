import { Link } from 'react-router-dom';

export default function Navbar () {
  return (
    <nav>
      <Link to="/">Marketplace</Link>
      <Link to="/jobs">Lowongan</Link>
      <Link to="/marketplace">Markerplace</Link>
      <Link to="/projek">Projek</Link>
      <Link to="/detail">Detail</Link>

      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>

    </nav>
  );
}

 
