'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Navigation from "../../components/Navigation";

// This would typically come from a database or API
const projects = [
  {
    id: 1,
    title: "Urban Landscapes",
    shotTime: "Spring 2023",
    equipment: "Sony A7III, 16-35mm f/2.8 GM lens",
    photos: ["/urban1.jpg", "/urban2.jpg", "/urban3.jpg", "/urban4.jpg"],
  },
  {
    id: 2,
    title: "Wildlife in Motion",
    shotTime: "Summer 2023",
    equipment: "Canon EOS R5, 100-400mm f/4.5-5.6L IS II USM lens",
    photos: ["/wildlife1.jpg", "/wildlife2.jpg", "/wildlife3.jpg", "/wildlife4.jpg"],
  },
  {
    id: 3,
    title: "Portraits of Strangers",
    shotTime: "Fall 2022",
    equipment: "Fujifilm X-T4, 56mm f/1.2 R lens",
    photos: ["/portrait1.jpg", "/portrait2.jpg", "/portrait3.jpg", "/portrait4.jpg"],
  },
  {
    id: 4,
    title: "Night Sky Wonders",
    shotTime: "Winter 2023",
    equipment: "Nikon D850, 14-24mm f/2.8G ED lens",
    photos: ["/night1.jpg", "/night2.jpg", "/night3.jpg", "/night4.jpg"],
  },
  {
    id: 5,
    title: "Macro World",
    shotTime: "Spring 2024",
    equipment: "Olympus OM-D E-M1 Mark III, 60mm f/2.8 Macro lens",
    photos: ["/macro1.jpg", "/macro2.jpg", "/macro3.jpg", "/macro4.jpg"],
  },
];

export default function Project({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [project, setProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    const foundProject = projects.find(p => p.id === parseInt(params.id));
    if (foundProject) {
      setProject(foundProject);
    } else {
      router.push('/404'); // Redirect to 404 page if project not found
    }
  }, [params.id, router]);

  if (!project) {
    return <div>Loading...</div>; // Or any loading indicator
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navigation />
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
        <div className="mb-6">
          <p><strong>Shot Time:</strong> {project.shotTime}</p>
          <p><strong>Equipment:</strong> {project.equipment}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.photos.map((photo, index) => (
            <div key={index} className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src={photo}
                alt={`${project.title} photo ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}