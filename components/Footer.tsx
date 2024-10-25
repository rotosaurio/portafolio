import { useTranslation } from 'next-i18next';

const Footer = () => {
  const { t } = useTranslation('common');
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-4">Edgar Rivera</h4>
            <p className="text-gray-400">full-stack developer specialized in blockchain and web applications</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4">{t('technologiesUsed')}</h4>
            <div className="flex justify-center space-x-4">
              <span className="text-gray-400">Node.js</span>
              <span className="text-gray-400">TypeScript</span>
              <span className="text-gray-400">Next.js</span>
            </div>
          </div>
          <div className="text-center md:text-right">
            <h4 className="text-xl font-bold mb-4">{t('contact')}</h4>
            <div className="flex justify-center md:justify-end space-x-6">
              <a href="https://github.com/rotosaurio" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                  alt="GitHub" 
                  className="w-6 h-6 hover:opacity-80 transition-opacity"
                />
              </a>
              <a href="mailto:edgarafedo123@gmail.com">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mail/mail-original.svg" 
                  alt="Email" 
                  className="w-6 h-6 hover:opacity-80 transition-opacity"
                />
              </a>
              <a href="https://wa.me/526391689410" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/whatsapp/whatsapp-original.svg" 
                  alt="WhatsApp" 
                  className="w-6 h-6 hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Edgar Rivera. {t('rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
