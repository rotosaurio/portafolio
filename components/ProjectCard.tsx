import Image from "next/image";
import { useTranslation } from 'next-i18next';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link }) => {
  const { t } = useTranslation('common');
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl border border-gray-200 dark:border-gray-700">
      {image && (
        <div className="relative h-48">
          <Image 
            src={image} 
            alt={title} 
            layout="fill" 
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-110"
          />
        </div>
      )}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
        >
          <span>{t('verProyecto')}</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
