import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex gap-[300px]">
      <div className="ms-[50px] mt-4 mb-3">
        <Link to="/">
          <img
            src="https://brandlogos.net/wp-content/uploads/2017/02/pizza_hut-logo_brandlogos.net_kuxu6-512x478.png"
            alt=""
            className="w-12 h-auto object-cover rounded-full "
          />
        </Link>
      </div>
      <nav className="sticky top-0 z-50 p-4 flex justify-center gap-10">
        <Link to="/pizza" className="text-lg font-medium hover:text-red-600">
          Pizza
        </Link>
        <Link to="/shawarma" className="text-lg font-medium hover:text-red-600">
          Shawarma
        </Link>
        <Link to="/burger" className="text-lg font-medium hover:text-red-600">
          Burger
        </Link>
        <Link to="/drinks" className="text-lg font-medium hover:text-red-600">
          Drinks
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
