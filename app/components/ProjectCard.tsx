import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function ProjectCard({ id, title, description, image }: ProjectCardProps) {
  return (
    <Link href={`/work/${id}`} className="group block">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative h-64 md:w-1/2 overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}