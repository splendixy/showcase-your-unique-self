
import React from "react";
import { Button } from "@/components/ui/button";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-background py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-400/20"></div>
            
            {/* This would be replaced with an actual image */}
            <div className="absolute inset-0 flex items-center justify-center text-primary/30">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-display">
              Creating digital <span className="text-primary">masterpieces</span> with passion and purpose
            </h3>
            
            <p className="text-foreground/80">
              With over X years of experience in design and development, I've honed my skills to deliver stunning digital experiences that make an impact. I believe in creating work that not only looks beautiful but also serves a purpose and solves real problems.
            </p>
            
            <p className="text-foreground/80">
              My journey began with a deep curiosity for how things work and a passion for visual storytelling. Today, I combine technical expertise with creative vision to build unique digital solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <a href="#contact">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  Get In Touch
                </a>
              </Button>
              
              <Button variant="ghost" className="flex items-center gap-2" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
