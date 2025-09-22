import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center max-w-6xl mx-auto px-4 bg-white/80 text-white py-4 rounded-xl sticky top-4 tracking-wide md:px-20 shadow-md shadow-gray-300 border-l-4 md:border-l-8 border-emerald-800">
      <Link to="/" className="font-thin text-2xl tracking-wide hidden md:block cursor-pointer bg-emerald-600 px-3 py-2 rounded-lg">Zarurat <span className="text-rose-600 bg-white rounded-lg px-2 underline decoration-2 underline-offset-2">Care</span></Link>
      <Link to="/" className="font-thin text-3xl tracking-wide block md:hidden cursor-pointer underline-offset-4 underline decoration-2 decoration-rose-600 bg-emerald-600 p-2 rounded-lg">ZC</Link>
      <div className="space-x-4 md:space-x-8 md:text-xl text-green-800 font-thin">
        <NavLink to="/" className="cursor-pointer hover:underline underline-offset-4 hover:bg-emerald-600 hover:p-2 transition-all rounded-lg hover:text-white style" style={({ isActive }) => ({
          textDecoration: isActive ? "underline" : "none",
        })}>Home</NavLink>
        <NavLink to="/patients" className="cursor-pointer hover:underline underline-offset-4 hover:bg-emerald-600 hover:p-2 transition-all rounded-lg hover:text-white" style={({ isActive }) => ({
          textDecoration: isActive ? "underline" : "none",
        })}>Patients</NavLink>
        <NavLink to="/about" className="cursor-pointer hover:underline underline-offset-4 hover:bg-emerald-600 hover:p-2 transition-all rounded-lg hover:text-white" style={({ isActive }) => ({
          textDecoration: isActive ? "underline" : "none",
        })}>About</NavLink>
      </div>
    </nav>
  );
}
export default Navbar;
