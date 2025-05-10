
import React from "react";

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number; // 1-5
}

const skillCategories: SkillCategory[] = [
  {
    name: "Design",
    skills: [
      { name: "UI/UX Design", level: 5 },
      { name: "Visual Design", level: 4 },
      { name: "Wireframing", level: 5 },
      { name: "Prototyping", level: 4 },
    ],
  },
  {
    name: "Development",
    skills: [
      { name: "HTML/CSS", level: 5 },
      { name: "JavaScript", level: 4 },
      { name: "React", level: 4 },
      { name: "TypeScript", level: 3 },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Figma", level: 5 },
      { name: "Adobe XD", level: 4 },
      { name: "VS Code", level: 5 },
      { name: "Git", level: 3 },
    ],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="bg-background py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category) => (
            <div key={category.name} className="bg-card rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-6 font-display">{category.name}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">
                        {skill.level}/5
                      </span>
                    </div>
                    
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
            <h3 className="text-xl md:text-2xl font-bold font-display mb-4 text-center">
              Other Skills & Interests
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Docker", "AWS", "Responsive Design", "SEO", 
                "Accessibility", "Performance Optimization",
                "User Research", "Content Strategy", "Animation"
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-background rounded-full text-sm border border-border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
