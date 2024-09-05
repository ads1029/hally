'use client';

import ProjectCard from "../components/ProjectCard";
import Navigation from "../components/Navigation";

const works = [
  { id: 1, title: 'Urban Landscapes', description: 'Exploring the beauty of city architecture and street life', image: '/urban1.jpg' },
  { id: 2, title: 'Wildlife in Motion', description: 'Capturing the dynamic movements of animals in their natural habitats', image: '/wildlife1.jpg' },
  { id: 3, title: 'Portraits of Strangers', description: 'A series of impromptu portraits showcasing the diversity of human expressions', image: '/portrait1.jpg' },
  { id: 4, title: 'Night Sky Wonders', description: 'Revealing the magic of the cosmos through long-exposure photography', image: '/night1.jpg' },
  { id: 5, title: 'Macro World', description: 'Discovering the intricate details of tiny subjects in nature', image: '/macro1.jpg' },
];

export default function Work() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navigation />
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">My Work</h1>
        <div className="space-y-8">
          {works.map((work) => (
            <ProjectCard key={work.id} {...work} />
          ))}
        </div>
      </main>
    </div>
  );
}