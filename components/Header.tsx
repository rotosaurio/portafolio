import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Edgar Rivera</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#proyectos">Proyectos</Link>
            </li>
            <li>
              <Link href="#sobre-mi">Sobre mí</Link>
            </li>
            <li>
              <Link href="#contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

