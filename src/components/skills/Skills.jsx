import "./skills.css"

const Skills = () => {
  return (
    <div className="skills">
      <div className="container">
        <div className="skills-title">
          <h2>My Skills</h2>
        </div>
        <div className="skill-items">
          <div className="technical-skills">
            <div className="t-skills-title">
              <h3>Technical Skills</h3>
            </div>
            <div className="t-skills-items">
              <div className="skill-item">
                <div className="skill-info">
                  <p>HTML</p>
                  <p>90%</p>
                </div>
                <div className="progress-line" data-percent="90%">
                  <span style={{width: "90%"}}></span>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <p>CSS</p>
                  <p>80%</p>
                </div>
                <div className="progress-line" data-percent="80%">
                  <span style={{width: "80%"}}></span>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <p>JavaScript</p>
                  <p>65%</p>
                </div>
                <div className="progress-line" data-percent="65%">
                  <span style={{width: "65%"}}></span>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <p>React</p>
                  <p>65%</p>
                </div>
                <div className="progress-line" data-percent="65%">
                  <span style={{width: "65%"}}></span>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <p>Tailwind CSS</p>
                  <p>80%</p>
                </div>
                <div className="progress-line" data-percent="80%">
                  <span style={{width: "80%"}}></span>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <p>Git/Github</p>
                  <p>70%</p>
                </div>
                <div className="progress-line" data-percent="70%">
                  <span style={{width: "70%"}}></span>
                </div>
              </div>
            </div>
          </div>

          <div className="soft-skills">
            <div className="s-skills-title">
              <h3>Soft Skills</h3>
            </div>
            <div className="s-skills-items">
              <div className="skill-item">
                <div className="skill-info">
                  <p>Leadership</p>
                  <p>80%</p>
                </div>
                <div className="progress-line" data-percent="80%">
                  <span style={{width: "80%"}}></span>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <p>Communication</p>
                  <p>85%</p>
                </div>
                <div className="progress-line" data-percent="85%">
                  <span style={{width: "85%"}}></span>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <p>Teamwork</p>
                  <p>80%</p>
                </div>
                <div className="progress-line" data-percent="80%">
                  <span style={{width: "80%"}}></span>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <p>Time Management</p>
                  <p>75%</p>
                </div>
                <div className="progress-line" data-percent="75%">
                  <span style={{width: "75%"}}></span>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <p>Problem-Solving</p>
                  <p>75%</p>
                </div>
                <div className="progress-line" data-percent="75%">
                  <span style={{width: "75%"}}></span>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <p>Personal Motivation</p>
                  <p>90%</p>
                </div>
                <div className="progress-line" data-percent="90%">
                  <span style={{width: "90%"}}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills