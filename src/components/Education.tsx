function Education(): React.JSX.Element {
  return (
    <div className="education-container">
      <h1>Education</h1>
      <div className="education-tiles">
        <div className="education-tile">
          <h3>IB Diploma</h3> Wellington International School <br />
          2013-2015
        </div>
        <div className="education-tile">
          <h3>BSc Biochemistry</h3> University of Leicester
          <br />
          2016-2019
        </div>
        <div className="education-tile">
          <h3>Software Development Bootcamp</h3> Northcoders <br />
          03/2025 - 07/2025
        </div>
        <div className="education-tile">
          <h3>Web Development Self Study</h3> The Odin Project <br />
          2023 - Present
        </div>
      </div>
    </div>
  );
}

export default Education;
