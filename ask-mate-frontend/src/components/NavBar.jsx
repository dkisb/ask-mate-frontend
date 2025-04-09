import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/home">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Home</button>
        </Link>
      </div>
      <div className="flex-none">
        <Link to="/login">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Logout</button>
        </Link>
      </div>
    </div>
  );
}
