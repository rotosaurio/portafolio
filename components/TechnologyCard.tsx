import { t } from 'i18next';
import { FC } from 'react';

interface TechnologyCardProps {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  frameworks?: string[];
}

const TechnologyCard: FC<TechnologyCardProps> = ({ name, icon, frameworks }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img 
        src={icon} 
        alt={name} 
        className="w-16 h-16 mb-3 hover:scale-110 transition-transform duration-300"
      />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {name}
      </span>
      {frameworks && frameworks.length > 0 && (
        <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
          <p className="mb-1">{t('frameworks')}:</p>
          <div className="flex flex-wrap justify-center gap-1">
            {frameworks.map((framework, idx) => (
              <span 
                key={idx}
                className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full"
              >
                {framework}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TechnologyCard;
