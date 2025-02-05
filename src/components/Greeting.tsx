interface GreetingProps {
  name: string;
}

const Greeting: GreetingProps = ({ name }) => <p>Привіт, {name}!</p>;

export default Greeting;