import Link from "next/link";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

const Header = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;

  const toggleLocale = () => {
    const newLocale = locale === 'es' ? 'en' : 'es';
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <header className="w-full bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Edgar Rivera</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#proyectos">{t('featuredProjects')}</Link>
            </li>
            <li>
              <Link href="#sobre-mi">{t('aboutMe')}</Link>
            </li>
            <li>
              <Link href="#contacto">{t('contact')}</Link>
            </li>
            <li>
              <button onClick={toggleLocale} className="bg-white text-primary px-2 py-1 rounded">
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
