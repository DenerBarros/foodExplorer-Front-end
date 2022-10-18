import { Container } from "./styles";

export function Footer(){
  return (
    <Container>
      <div className="logo">
        <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.0635 0.550964L25.7096 7.85214V22.4545L13.0635 29.7557L0.417527 22.4545V7.85214L13.0635 0.550964Z" fill="white" fillOpacity="0.3"/>
        </svg>
        <h2>food explorer</h2>
      </div>
      
      <div>
        <p>© 2022 - Todos os direitos reservados.</p>
      </div>

    </Container>
  )
}