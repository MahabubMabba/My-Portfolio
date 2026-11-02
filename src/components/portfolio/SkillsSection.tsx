import { skillCategories, skills } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import TechnologyIcon from "./TechnologyIcon";

function SkillCard({
  id,
  name,
  status,
  index,
}: {
  id: string;
  name: string;
  status?: string;
  index: number;
}) {
  return (
    <div
      className="skill-item"
      data-reveal
      style={{ transitionDelay: `${Math.min(index * 45, 225)}ms` }}
    >
      <TechnologyIcon id={id} />
      <span className="skill-name">{name}</span>
      {status ? <span className="skill-status">{status}</span> : null}
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section className="content-section skills-section" id="skills">
      <SectionHeading title="SKILLS" />
      <div className="skill-groups">
        {skillCategories.map((category) => (
          <section
            aria-label={`${category} technologies`}
            className="skill-group"
            data-reveal
            key={category}
          >
            <h3 className="skill-category" data-reveal>
              {category}
            </h3>
            <div className="skills-grid">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <SkillCard
                    id={skill.id}
                    index={index}
                    key={skill.id}
                    name={skill.name}
                  />
                ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
