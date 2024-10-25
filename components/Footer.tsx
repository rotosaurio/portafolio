import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Edgar Rivera. Todos los derechos reservados.</p>
        <div className="flex space-x-4">
          <a href="https://github.com/rotosaurio" target="_blank" rel="noopener noreferrer">
            <Image src="/images/github.svg" alt="GitHub" width={24} height={24} />
          </a>
          <a href="mailto:edgarafedo123@gmail.com">
            <Image src="/images/email.svg" alt="Email" width={24} height={24} />
          </a>
          <a href="https://wa.me/526391689410" target="_blank" rel="noopener noreferrer">
            <Image src="/images/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

