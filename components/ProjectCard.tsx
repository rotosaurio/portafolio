import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string; // Hacer la imagen opcional
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link }) => {
  return (
    <div
      className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
    >
      {image && (
        <Image src={image} alt={title} width={400} height={250} className="object-cover" />
      )}
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Ver Proyecto →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
