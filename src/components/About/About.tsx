import { Container } from "./styles";
import OmPhoto from "../../assets/myimg.png";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">

        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={100}>
          <p>
            Hi there! I'm Om, an enthusiastic Software Engineer skilled in full-stack development, Generative AI, and scalable software solutions.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={200} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I build responsive web applications, fine-tune ML models, implement robust backend services, and engineer advanced Generative AI solutions.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={300}>
          <p>
            I also deploy applications on cloud platforms, optimize end-to-end ML workflows, and streamline automation using modern backend and DevOps practices.
          </p>
        </ScrollAnimation>

        {/* ===== EDUCATION ===== */}
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4>Bachelor in Technology (B.Tech)</h4>
            <p>Vishwakarma Institute of Technology, Pune | July 2023 - Present</p>
            <p>9.15 CGPA</p>
          </div>
        </ScrollAnimation>

        {/* ===== EXPERIENCE ===== */}
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
            <h3>Experience:</h3>
            <h4>AI Software Developer Intern</h4>
            <p>UDNAV Software (Eduplus Campus) | June 2024 - Dec 2024</p>
            <p>Pune</p>
          </div>
        </ScrollAnimation>

        {/* ===== SKILL HEADER ===== */}
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>

        {/* ===== SKILL ICON GRID ===== */}
        <div className="hard-skills">

          {/* === AI / ML === */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={100}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={110}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={120}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" />
            </ScrollAnimation>
          </div>

          {/* === Backend === */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={130}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={140}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" />
            </ScrollAnimation>
          </div>

          {/* === Databases === */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={150}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={160}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
            </ScrollAnimation>
          </div>

          {/* === DevOps / Cloud === */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={170}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={180}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={190}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
            </ScrollAnimation>
          </div>

          {/* === Frontend === */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={200}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={210}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={220}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={230}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
            </ScrollAnimation>
          </div>

        </div>

      </div>

      {/* ===== PROFILE IMAGE ===== */}
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={210}>
          <img src={OmPhoto} alt="Om Lohade" />
        </ScrollAnimation>
      </div>

    </Container>
  );
}
