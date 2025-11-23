import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:omlohade@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:omlohade@gmail.com">omlohade@gmail.com</a>
        </div>
      </div>
    </Container>
  )
}