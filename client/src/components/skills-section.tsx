import { useEffect, useRef, useState } from "react";
import { Globe, Brain, Wrench } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  proficiency: string;
}

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  color: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "AI & Data",
    icon: <Brain className="w-5 h-5" />,
    color: "text-violet-500",
    skills: [
      { name: "Python", level: 75, proficiency: "Intermediate" },
      { name: "TensorFlow", level: 75, proficiency: "Intermediate" },
      { name: "OpenCV", level: 80, proficiency: "Advanced" },
      { name: "NLP", level: 65, proficiency: "Intermediate" },
      { name: "Pandas / NumPy", level: 78, proficiency: "Intermediate" },
    ],
  },
  {
    title: "Web Development",
    icon: <Globe className="w-5 h-5" />,
    color: "text-blue-500",
    skills: [
      { name: "Next.js", level: 70, proficiency: "Intermediate" },
      { name: "React", level: 65, proficiency: "Intermediate" },
      { name: "Tailwind CSS", level: 80, proficiency: "Intermediate" },
      { name: "HTML / CSS", level: 85, proficiency: "Advanced" },
      { name: "Firebase", level: 90, proficiency: "Advanced" },
    ],
  },
  {
    title: "Tools & Databases",
    icon: <Wrench className="w-5 h-5" />,
    color: "text-emerald-500",
    skills: [
      { name: "C++", level: 85, proficiency: "Advanced" },
      { name: "MySQL", level: 75, proficiency: "Intermediate" },
      { name: "Git", level: 80, proficiency: "Advanced" },
      { name: "API Integration", level: 70, proficiency: "Intermediate" },
      { name: "Automation", level: 72, proficiency: "Intermediate" },
    ],
  },
];

const proficiencyColors: Record<string, string> = {
  Advanced: "bg-primary",
  Intermediate: "bg-blue-400",
  Basic: "bg-slate-400",
};

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-slate-50" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Programming languages and technologies I work with to bring ideas to life
          </p>
        </div>

        {/* 3-Column Category Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Category Header */}
              <div className={`flex items-center gap-2 mb-6 ${category.color}`}>
                {category.icon}
                <h3 className="font-bold text-lg text-secondary">{category.title}</h3>
              </div>

              {/* Skill Bars */}
              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-semibold text-secondary">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted">{skill.proficiency}</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full transition-all duration-700 ease-out ${
                          proficiencyColors[skill.proficiency] ?? "bg-primary"
                        }`}
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${index * 0.08}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-8 mt-10 text-sm text-muted">
          <span className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-primary" />
            Advanced
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-blue-400" />
            Intermediate
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-slate-400" />
            Basic
          </span>
        </div>

      </div>
    </section>
  );
}