import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Research() {
  return (
    <Container id="research">
      <div className="research-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>📚 Research & Publications</h2>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={100}>
          <p className="intro-text">
            I have published <strong>3 research papers</strong> in the field of AI, Machine Learning, and Smart Systems.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={200}>
          <div className="publication-card">
            <h3>🔹 Automated Multiclass Skin Disease Diagnosis using Deep Learning</h3>
            <p className="publication-meta">Journal Publication • 2023</p>
            <p className="publication-desc">
              Developed a deep learning model for automated diagnosis of multiple skin disease classes with high accuracy.
            </p>
            <a 
              href="https://ijisae.org/index.php/IJISAE/article/view/4454" 
              target="_blank" 
              rel="noopener noreferrer"
              className="publication-link"
            >
              Read Paper →
            </a>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={300}>
          <div className="publication-card">
            <h3>🔹 Innovative Approaches for Skin Disease Identification in Machine Learning</h3>
            <p className="publication-meta">Journal Publication • 2024</p>
            <p className="publication-desc">
              A comprehensive study exploring novel machine learning techniques for skin disease identification and classification.
            </p>
            <a 
              href="https://www.sciencedirect.com/science/article/pii/S2772906024002115" 
              target="_blank" 
              rel="noopener noreferrer"
              className="publication-link"
            >
              Read Paper →
            </a>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={400}>
          <div className="publication-card">
            <h3>🔹 RefrigeratoSmart: A Comprehensive Home Refrigerator Management System</h3>
            <p className="publication-meta">Conference Publication • 2024</p>
            <p className="publication-desc">
              An IoT-based smart refrigerator management system that optimizes food storage and reduces waste.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
