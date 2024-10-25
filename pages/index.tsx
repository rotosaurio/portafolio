import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { GetStaticProps } from "next";

interface Project {
  title: string;
  description: string;
  image?: string;
  link: string;
}

interface HomeProps {
  githubProjects: Project[];
}

const Home: React.FC<HomeProps> = ({ githubProjects }) => {
  const proyectosDestacados: Project[] = [
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
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-16">
        {/* Sección de Introducción */}
        <section id="inicio" className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Hola, soy Edgar Rivera</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Desarrollador Full-Stack especializado en blockchain y aplicaciones web.
          </p>
        </section>

        {/* Sección de Proyectos Destacados */}
        <section id="proyectos" className="mb-16">
          <h3 className="text-3xl font-semibold text-center mb-8">Proyectos Destacados</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectosDestacados.map((proyecto, index) => (
              <ProjectCard
                key={index}
                title={proyecto.title}
                description={proyecto.description}
                link={proyecto.link}
              />
            ))}
          </div>
        </section>

        {/* Sección de Proyectos de GitHub */}
        <section id="github-projects" className="mb-16">
          <h3 className="text-3xl font-semibold text-center mb-8">Más Proyectos en GitHub</h3>
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

        {/* Sección Sobre Mí */}
        <section id="sobre-mi" className="mb-16">
          <h3 className="text-3xl font-semibold text-center mb-8">Sobre Mí</h3>
          <div className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            <p>
              Soy Edgar Alfredo Rivera Díaz, un desarrollador full-stack con experiencia en el desarrollo de aplicaciones web y contratos inteligentes en las redes blockchain de Solana y Ethereum. Apasionado por la tecnología y siempre buscando nuevas formas de innovar y resolver problemas complejos.
            </p>
            <p className="mt-4">
              He participado en hackathones de alto nivel, incluyendo el NASA SpaceApps Challenge y eventos centrados en blockchain e inteligencia artificial, lo que me ha permitido ampliar mis conocimientos y habilidades en programación y desarrollo de software.
            </p>
          </div>
        </section>

        {/* Sección Contacto */}
        <section id="contacto" className="mb-16">
          <h3 className="text-3xl font-semibold text-center mb-8">Contacto</h3>
          <div className="flex justify-center">
            <a
              href="mailto:edgarafedo123@gmail.com"
              className="bg-primary text-white px-6 py-3 rounded-full hover:bg-indigo-600 transition"
            >
              Envíame un Email
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://api.github.com/users/rotosaurio/repos");
  const data = await response.json();

  const githubProjects: Project[] = data.map((repo: any) => ({
    title: repo.name,
    description: repo.description || "Sin descripción",
    image: repo.owner.avatar_url, // Considera reemplazar con imágenes específicas de cada proyecto
    link: repo.html_url,
  }));

  return {
    props: {
      githubProjects,
    },
    revalidate: 3600, // Revalidar cada hora
  };
};

export default Home;
