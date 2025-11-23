import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Experience() {
  return (
    <Container id="experience">
      <div className="experience-content">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>💼 Experience</h2>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={100}>
          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3>AI Software Developer Intern</h3>
                <p className="company">UDNAV Software</p>
              </div>
              <div className="duration">
                <p>June 2024 - Dec 2024</p>
                <p className="location">Pune, India</p>
              </div>
            </div>

            <div className="experience-details">
              <div className="detail-item">
                <span className="checkmark">✅</span>
                <p>Built <strong>document verification system</strong> using <strong>SHA-256 + Blockchain</strong> technology for secure and tamper-proof verification</p>
              </div>

              <div className="detail-item">
                <span className="checkmark">✅</span>
                <p>Integrated <strong>OCR + NLP</strong> for automated document extraction and processing, improving efficiency by 70%</p>
              </div>

              <div className="detail-item">
                <span className="checkmark">✅</span>
                <p>Developed <strong>modular Node.js backend</strong> with <strong>REST APIs</strong> for scalability and maintainability</p>
              </div>

              <div className="detail-item">
                <span className="checkmark">✅</span>
                <p>Worked with <strong>cloud deployment workflows</strong> for production environments on AWS</p>
              </div>

              <div className="detail-item">
                <span className="checkmark">✅</span>
                <p>Implemented secure authentication and data integrity mechanisms using industry best practices</p>
              </div>
            </div>

            <div className="tech-stack">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Blockchain</span>
              <span className="tech-tag">OCR</span>
              <span className="tech-tag">NLP</span>
              <span className="tech-tag">REST API</span>
              <span className="tech-tag">AWS</span>
              <span className="tech-tag">SHA-256</span>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
