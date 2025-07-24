import { skills } from "./skills";

function Skills(): React.JSX.Element {
  return (
    <div className="skills-container">
      <div className="skills-sub-container">
        <h1 className="skills-title">Skills</h1>
        <h3 className="skills-heading">Frontend</h3>
        <ul className="skill-list">
          {skills.frontend.map(({ name, icon: Icon }) => (
            <li key={name} className="skill-item">
              <Icon />
            </li>
          ))}
        </ul>
      </div>

      <div className="skills-sub-container">
        <h3 className="skills-heading">Backend</h3>
        <ul className="skill-list">
          {skills.backend.map(({ name, icon: Icon }) => (
            <li key={name} className="skill-item">
              <Icon />
            </li>
          ))}
        </ul>
      </div>

      <div className="skills-sub-container">
        <h3 className="skills-heading">Tooling & Workflow</h3>
        <ul className="skill-list">
          {skills.tooling.map(({ name, icon: Icon }) => (
            <li key={name} className="skill-item">
              <Icon />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
