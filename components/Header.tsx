import Link from "next/link";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Header = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLocale = () => {
    const newLocale = locale === 'es' ? 'en' : 'es';
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <header className="w-full bg-primary text-white shadow-md fixed top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Edgar Rivera</h1>
          
          {/* Botón menú móvil */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Navegación desktop */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link href="#sobre-mi" className="hover:text-gray-200">{t('aboutMe')}</Link></li>
              <li><Link href="#tecnologias" className="hover:text-gray-200">{t('technologies')}</Link></li>
              <li><Link href="#proyectos" className="hover:text-gray-200">{t('featuredProjects')}</Link></li>
              <li><Link href="#contacto" className="hover:text-gray-200">{t('contact')}</Link></li>
              <li>
                <button onClick={toggleLocale} className="bg-white text-primary px-3 py-1 rounded-full hover:bg-gray-100">
                  {locale === 'es' ? 'EN' : 'ES'}
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Menú móvil */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
          <ul className="flex flex-col space-y-4">
            <li><Link href="#sobre-mi" onClick={() => setIsMenuOpen(false)} className="block py-2">{t('aboutMe')}</Link></li>
            <li><Link href="#tecnologias" onClick={() => setIsMenuOpen(false)} className="block py-2">{t('technologies')}</Link></li>
            <li><Link href="#proyectos" onClick={() => setIsMenuOpen(false)} className="block py-2">{t('featuredProjects')}</Link></li>
            <li><Link href="#contacto" onClick={() => setIsMenuOpen(false)} className="block py-2">{t('contact')}</Link></li>
            <li>
              <button onClick={toggleLocale} className="bg-white text-primary px-3 py-1 rounded-full">
                {locale === 'es' ? 'EN' : 'ES'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
