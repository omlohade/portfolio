import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  padding: 0 2rem;

  .research-text {
    max-width: 1200px;
    margin: 0 auto;
  }

  h2 {
    display: inline-block;
    margin-bottom: 3rem;
    font-size: 3rem;
    color: var(--green);
    border-bottom: 3px solid var(--green);
    padding-bottom: 1rem;
  }

  .intro-text {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 4rem;
    color: #fff;
    
    strong {
      color: var(--green);
      font-weight: 700;
    }
  }

  .publication-card {
    background: rgba(35, 206, 107, 0.05);
    border: 2px solid rgba(35, 206, 107, 0.2);
    border-radius: 1.5rem;
    padding: 3rem;
    margin-bottom: 3rem;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      background: rgba(35, 206, 107, 0.1);
      border-color: var(--green);
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(35, 206, 107, 0.3);
    }

    h3 {
      color: var(--green);
      font-size: 2.2rem;
      margin-bottom: 1rem;
      line-height: 1.4;
    }

    .publication-meta {
      color: rgba(255, 255, 255, 0.7);
      font-size: 1.4rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
    }

    .publication-desc {
      font-size: 1.6rem;
      line-height: 1.8;
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 2rem;
    }

    .publication-link {
      display: inline-block;
      color: var(--green);
      font-size: 1.6rem;
      font-weight: 600;
      text-decoration: none;
      border-bottom: 2px solid transparent;
      transition: all 0.3s ease;

      &:hover {
        color: var(--pink);
        border-bottom-color: var(--pink);
        transform: translateX(5px);
      }
    }
  }

  @media (max-width: 768px) {
    margin-top: 8rem;
    padding: 0 1.5rem;

    h2 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }

    .intro-text {
      font-size: 1.6rem;
      margin-bottom: 3rem;
    }

    .publication-card {
      padding: 2rem;
      margin-bottom: 2rem;

      h3 {
        font-size: 1.8rem;
      }

      .publication-meta {
        font-size: 1.2rem;
      }

      .publication-desc {
        font-size: 1.4rem;
      }

      .publication-link {
        font-size: 1.4rem;
      }
    }
  }
`;
