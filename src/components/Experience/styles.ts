import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  padding: 0 2rem;

  .experience-content {
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

  .experience-card {
    background: rgba(35, 206, 107, 0.05);
    border: 2px solid rgba(35, 206, 107, 0.2);
    border-radius: 1.5rem;
    padding: 3rem;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(35, 206, 107, 0.1);
      border-color: var(--green);
      box-shadow: 0 10px 30px rgba(35, 206, 107, 0.3);
    }
  }

  .experience-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 2px solid rgba(35, 206, 107, 0.2);

    h3 {
      color: var(--green);
      font-size: 2.4rem;
      margin-bottom: 0.5rem;
      font-weight: 700;
    }

    .company {
      color: rgba(255, 255, 255, 0.9);
      font-size: 1.8rem;
      font-weight: 600;
      margin-top: 0.5rem;
    }

    .duration {
      text-align: right;

      p {
        color: rgba(255, 255, 255, 0.8);
        font-size: 1.5rem;
        font-weight: 500;
        margin-bottom: 0.3rem;
      }

      .location {
        color: rgba(255, 255, 255, 0.6);
        font-size: 1.4rem;
      }
    }
  }

  .experience-details {
    margin-bottom: 3rem;
  }

  .detail-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 2rem;
    gap: 1.5rem;

    .checkmark {
      font-size: 2rem;
      flex-shrink: 0;
      margin-top: 0.2rem;
    }

    p {
      font-size: 1.7rem;
      line-height: 1.8;
      color: rgba(255, 255, 255, 0.9);

      strong {
        color: var(--green);
        font-weight: 700;
      }
    }
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;
  }

  .tech-tag {
    background: rgba(35, 206, 107, 0.15);
    color: var(--green);
    padding: 0.8rem 1.6rem;
    border-radius: 2rem;
    font-size: 1.4rem;
    font-weight: 600;
    border: 1px solid rgba(35, 206, 107, 0.3);
    transition: all 0.3s ease;

    &:hover {
      background: rgba(35, 206, 107, 0.25);
      border-color: var(--green);
      transform: translateY(-2px);
    }
  }

  @media (max-width: 768px) {
    margin-top: 8rem;
    padding: 0 1.5rem;

    h2 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }

    .experience-card {
      padding: 2rem;
    }

    .experience-header {
      flex-direction: column;
      gap: 2rem;

      h3 {
        font-size: 2rem;
      }

      .company {
        font-size: 1.6rem;
      }

      .duration {
        text-align: left;

        p {
          font-size: 1.4rem;
        }

        .location {
          font-size: 1.3rem;
        }
      }
    }

    .detail-item {
      gap: 1rem;

      p {
        font-size: 1.5rem;
      }

      .checkmark {
        font-size: 1.8rem;
      }
    }

    .tech-tag {
      font-size: 1.2rem;
      padding: 0.6rem 1.2rem;
    }
  }
`;
