
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Portfolio Website",
    description: "A sleek, responsive portfolio website built with React and Tailwind CSS. Features smooth animations and a clean design.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    link: "#",
  },
  {
    id: 2,
    title: "E-commerce Dashboard",
    description: "A comprehensive admin dashboard for e-commerce platforms with data visualization, inventory management, and order tracking.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    technologies: ["React", "Chart.js", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    id: 3,
    title: "Travel Blog Platform",
    description: "A feature-rich platform for travel bloggers with a content management system, image galleries, and social sharing.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    technologies: ["Next.js", "Prisma", "Supabase", "Tailwind CSS"],
    link: "#",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter>
                <Button asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="#" className="flex items-center gap-2">
              View All Projects
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
