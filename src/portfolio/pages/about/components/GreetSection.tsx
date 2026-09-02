import { AboutBubble } from '.';

interface Props {
  data: string[];
}

export const GreetSection = ({ data }: Props) => {
  if (data.length === 0) return;
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-2xl">Hola, bienvenido/a a mi Portfolio.</h3>
      <div>
        {data.map((text, index) => (
          <AboutBubble key={index} text={text} />
        ))}
      </div>
    </div>
  );
};
