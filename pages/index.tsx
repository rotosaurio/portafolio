import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { GetStaticProps } from "next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../next-i18next.config';
import { useTranslation } from 'next-i18next';
import TechnologyCard from "@/components/TechnologyCard";

interface Project {
  title: string;
  description: string;
  image?: string;
  link: string;
}

interface HomeProps {
  githubProjects: Project[];
}

// Primero, definimos la interfaz para una tecnología
interface Technology {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  frameworks?: string[];
}

// Definimos la interfaz para un proyecto
interface Proyecto {
  title: string;
  description: string;
  link: string;
}

const Home: React.FC<HomeProps> = ({ githubProjects }) => {
  const { t } = useTranslation('common');

  const technologies: Technology[] = [
    // Frontend Technologies
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      category: "frontend"
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      category: "frontend"
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      category: "frontend",
      frameworks: ["React", "Next.js", "Vite", "Vue.js"]
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      category: "frontend",
      frameworks: ["React", "Next.js", "Vite", "Vue.js"]
    },

    // Backend Technologies
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      category: "backend",
      frameworks: ["Node.js", "Express.js"]
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      category: "backend",
      frameworks: ["Spring Boot"]
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      category: "backend",
      frameworks: ["Laravel"]
    },
    {
      name: "Rust",
      icon: "https://raw.githubusercontent.com/rust-lang/rust-artwork/master/logo/rust-logo-512x512.png",
      category: "backend",
      frameworks: ["Anchor"]
    },

    // Database Technologies
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      category: "database"
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      category: "database"
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      category: "database"
    },

    // Development Tools
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      category: "tools"
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      category: "tools"
    },
    {
      name: "Postman",
      icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      category: "tools"
    }
  ];

  // Función actualizada para filtrar tecnologías por categoría
  const getTechnologiesByCategory = (category: 'frontend' | 'backend' | 'database' | 'tools') => {
    return technologies.filter(tech => tech.category === category);
  };

  // Definimos el array de proyectos destacados con su tipo
  const proyectosDestacados: Proyecto[] = [
    {
      title: "CosmoXplora",
      description: "Exploración de datos espaciales en tiempo real.",
      link: "https://cosmoxplora.vercel.app/",
    },
    {
      title: "Scicodehub1",
      description: "Plataforma colaborativa para desarrolladores.",
      link: "https://scicodehub1-nfyy.vercel.app/",
    },
    {
      title: "Pokedex",
      description: "API RESTful para datos de Pokémon.",
      link: "https://pokeejemploapi.vercel.app/",
    },
    {
      title: "Optimia",
      description: "Herramienta de análisis de datos sobre medicinas en mexico.",
      link: "https://optimia-nine.vercel.app/",
    },
    {
      title: "DocTokens",
      description: "Plataforma para la gestión de documentos digitales atravez de blockchain.",
      link: "https://doctokens-zbvn.vercel.app/",
    },
    {
      title: "AthenaDexFi",
      description: "Plataforma DeFi para finanzas descentralizadas.",
      link: "https://athenadexfi.io/",
    },
    {
      title: "Proyectos en Vercel",
      description: "Colección de proyectos desplegados en Vercel.",
      link: "https://vercel.com/rotosaurios-projects",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-8">
        {/* Sección Sobre Mí */}
        <section id="sobre-mi" className="mb-16">
          <div className="text-center mb-8 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('hello')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              {t('fullStackDeveloper')}
            </p>
          </div>
          <div className="max-w-3xl mx-auto text-base md:text-lg text-gray-700 dark:text-gray-300 text-center px-4">
            <p>{t('sobreM')}</p>
          </div>
        </section>

        {/* Sección de Tecnologías */}
        <section id="tecnologias" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              {t('technologies')}
            </span>
          </h2>
          
          {/* Grid de tecnologías */}
          <div className="space-y-8">
            {['frontend', 'backend', 'database', 'tools'].map((category) => (
              <div key={category} className="mb-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4">{t(category)}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
                  {getTechnologiesByCategory(category as any).map((tech, index) => (
                    <TechnologyCard key={index} {...tech} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Proyectos Destacados */}
        <section id="proyectos" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              {t('featuredProjects')}
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {proyectosDestacados.map((proyecto, index) => (
              <ProjectCard
                key={index}
                {...proyecto}
              />
            ))}
          </div>
        </section>

        {/* Sección Contacto */}
        <section id="contacto" className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              {t('contact')}
            </span>
          </h3>
          <div className="flex flex-col items-center space-y-6">
            <a
              href="mailto:edgarafedo123@gmail.com"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:opacity-90 transition-opacity text-center"
            >
              {t('sendEmail')}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const response = await fetch("https://api.github.com/users/rotosaurio/repos");
  const data = await response.json();

  const githubProjects = data.map((repo: any) => ({
    title: repo.name,
    description: repo.description || "Sin descripción",
    image: repo.owner.avatar_url,
    link: repo.html_url,
  }));

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'es', ['common'])),
      githubProjects,
    },
    revalidate: 3600,
  };
};

export default Home;
