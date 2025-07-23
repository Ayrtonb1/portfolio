import { skills } from "./skills";

function Skills(): React.JSX.Element {
  return (
    <div className="skills-container">
      <div>Frontend</div>
      <ul className="skill-list">
        {skills.frontend.map(({ name, icon: Icon }) => (
          <li key={name} className="skill-item">
            <Icon fontSize={"4rem"} />
          </li>
        ))}
      </ul>
      <div>Backend</div>
      <ul className="skill-list">
        <ul className="skill-list">
          {skills.backend.map(({ name, icon: Icon }) => (
            <li key={name} className="skill-item">
              <Icon fontSize={"4rem"} />
            </li>
          ))}
        </ul>
      </ul>
      <div>Tooling & Workflow</div>
      <ul className="skill-list">
        <ul className="skill-list">
          {skills.tooling.map(({ name, icon: Icon }) => (
            <li key={name} className="skill-item">
              <Icon fontSize={"4rem"} />
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
}

export default Skills;
