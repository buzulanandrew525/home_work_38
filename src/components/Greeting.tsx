interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => <p>Привіт, {name}!</p>;

export default Greeting;
