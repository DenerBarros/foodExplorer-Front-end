import { Container } from './styles';

export function TextArea({ value, description, ...rest }) {
  return (
    <Container {...rest}>
      {description}
    </Container>
  )
}