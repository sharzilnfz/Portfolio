import Link from 'next/link';

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 md:top-5 w-full z-10">
      <nav className="flex gap-1 p-0.5 border-white/15 rounded-full bg-gray-800 bg-white/10 backdrop-blur transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
        <Link href="#home" className="nav-item">
          Home
        </Link>
        <Link href="#about" className="nav-item">
          About
        </Link>
        <Link href="#projects" className="nav-item">
          Projects
        </Link>
        <a
          href="https://w.app/nafisx"
          className="nav-item bg-white text-black hover:bg-white/70 hover:text-gray-900 transition-colors duration-200 ease-in-out"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
