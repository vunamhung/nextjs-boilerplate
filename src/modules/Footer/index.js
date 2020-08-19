import Container from '@/components/Container';

export default function FooterSection() {
  return (
    <footer>
      <Container>
        © {new Date().getFullYear()}, Built with <a href='https://nextjs.org/'>Next.js</a>
        &#128293;
      </Container>
    </footer>
  );
}
