import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { GetStaticProps } from "next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../next-i18next.config.js';
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
      title: "Pokeejemplo API",
      description: "API RESTful para datos de Pokémon.",
      link: "https://pokeejemploapi.vercel.app/",
    },
    {
      title: "Optimia Nine",
      description: "Herramienta de análisis de datos financieros.",
      link: "https://optimia-nine.vercel.app/",
    },
    {
      title: "DocTokens",
      description: "Plataforma para la gestión de documentos digitales.",
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
      <main className="container mx-auto px-4 py-8">
        {/* Sección Sobre Mí - Ahora al inicio */}
        <section id="sobre-mi" className="mb-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">
              {t('hello')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t('fullStackDeveloper')}
            </p>
          </div>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 text-center">
            <p>{t('sobreM')}</p>
          </div>
        </section>

        {/* Sección de Tecnologías */}
        <section id="tecnologias" className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              {t('Tecnologias')}
            </span>
          </h2>
          
          {/* Frontend Technologies */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">{t('frontend')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {getTechnologiesByCategory('frontend').map((tech, index) => (
                <TechnologyCard key={index} {...tech} />
              ))}
            </div>
          </div>

          {/* Backend Technologies */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">{t('backend')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {getTechnologiesByCategory('backend').map((tech, index) => (
                <TechnologyCard key={index} {...tech} />
              ))}
            </div>
          </div>

          {/* Database Technologies */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">{t('databases')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {getTechnologiesByCategory('database').map((tech, index) => (
                <TechnologyCard key={index} {...tech} />
              ))}
            </div>
          </div>

          {/* Development Tools */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{t('developmentTools')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {getTechnologiesByCategory('tools').map((tech, index) => (
                <TechnologyCard key={index} {...tech} />
              ))}
            </div>
          </div>
        </section>

        {/* Sección Proyectos Destacados */}
        <section id="proyectos" className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              {t('featuredProjects')}
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectosDestacados.map((proyecto: Proyecto, index: number) => (
              <ProjectCard
                key={index}
                title={proyecto.title}
                description={proyecto.description}
                link={proyecto.link}
              />
            ))}
          </div>
        </section>

        {/* Sección GitHub Projects */}
        <section id="github" className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              {t('moreProjects')}
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {githubProjects.map((proyecto, index) => (
              <ProjectCard
                key={index}
                title={proyecto.title}
                description={proyecto.description}
                image={proyecto.image}
                link={proyecto.link}
              />
            ))}
          </div>
        </section>

        {/* Sección Contacto */}
        <section id="contacto" className="mb-16">
          <h3 className="text-4xl font-bold text-center mb-12 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              {t('contact')}
            </span>
          </h3>
          <div className="flex flex-col items-center space-y-6">
            <a
              href="mailto:edgarafedo123@gmail.com"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
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
