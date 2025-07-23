import { skills } from "./skills";

function Skills(): React.JSX.Element {
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div>Frontend</div>
      <ul className="skill-list">
        {skills.frontend.map(({ name, icon: Icon }) => (
          <li key={name} className="skill-item">
            <Icon />
          </li>
        ))}
      </ul>
      <div>Backend</div>

      <ul className="skill-list">
        {skills.backend.map(({ name, icon: Icon }) => (
          <li key={name} className="skill-item">
            <Icon />
          </li>
        ))}
      </ul>
      <div>Tooling & Workflow</div>

      <ul className="skill-list">
        {skills.tooling.map(({ name, icon: Icon }) => (
          <li key={name} className="skill-item">
            <Icon />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
