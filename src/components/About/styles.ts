import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.2rem;
    background: rgba(35, 206, 107, 0.1);
    border-radius: 1rem;
    border: 2px solid transparent;
    transition: all 0.3s ease;
    cursor: pointer;

    img{
      width: 4rem;
      height: 4rem;
      transition: transform 0.3s ease;
    }

    &:hover{
      background: rgba(35, 206, 107, 0.2);
      border-color: var(--green);
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(35, 206, 107, 0.3);

      img{
        transform: scale(1.1) rotate(5deg);
      }
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size :3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
    text-align: justify;
    line-height: 1.8;
  }
  
  

  .about-image{
    text-align: center;
   img{
     margin-top: 2rem;
     width: 60%;
     max-width: 400px;
     height: auto;
     border-radius: 50%;
     border: 2px solid var(--green);
     filter: grayscale(0);
     transition: all 0.5s ease;
     box-shadow: 0 5px 2px rgba(35, 206, 107, 0.3);
     &:hover{
       filter: grayscale(0);
       transform: scale(1.05);
       box-shadow: 0 10px 30px rgba(35, 206, 107, 0.5);
       border-color: var(--pink);
     }
   }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      img{
        margin-top: 2rem;
        width: 70%;
        max-width: 300px;
        filter: grayscale(0);
        transition: all 0.5s ease;
        &:hover{
          filter: grayscale(0);
          transform: scale(1.05);
        }
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;
    
    .hard-skills{
      justify-content: center;
    }
    .about-image{
      display: flex;
      justify-content: center;
      max-width: 100%;
      margin-top: 3rem;
      img{
        margin-top: 2rem;
        width: 60%;
        max-width: 350px;
        filter: grayscale(0);
        transition: all 0.5s ease;
        &:hover{
          filter: grayscale(0);
          transform: scale(1.05);
        }
    }
    
    
  }

`