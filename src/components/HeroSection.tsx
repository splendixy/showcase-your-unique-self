
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 -z-10"></div>
      
      <div className="section-container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight">
            Hi! I'm <span className="text-primary">Your Name</span>
            <br />
            <span>
              I create amazing
              <br />
              digital experiences
            </span>
          </h1>
          
          <p className="text-lg text-foreground/80 max-w-lg">
            I'm a passionate designer/developer focused on crafting beautiful and functional designs with exceptional user experiences.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        
        <div className="relative h-80 md:h-full min-h-[400px] animate-fade-in">
          <div className="absolute inset-0 bg-primary/10 rounded-3xl overflow-hidden flex items-center justify-center">
            <div className="w-52 h-52 bg-primary/20 rounded-full flex items-center justify-center">
              <div className="w-32 h-32 bg-primary/30 rounded-full"></div>
            </div>
          </div>
          
          {/* You would ideally place your profile image here */}
          <div className="absolute -bottom-6 right-8">
            <span className="text-3xl animate-bounce inline-block">👋</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
