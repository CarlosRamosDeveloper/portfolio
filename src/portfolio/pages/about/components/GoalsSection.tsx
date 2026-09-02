import { AboutBubble } from '.';

interface Props {
  data: string[];
}

export const GoalsSection = ({ data }: Props) => {
  return (
    <div className="text-xl flex flex-col items-center mt-5">
      <h3>Objetivos a largo plazo</h3>
      <div>
        {data.map((text, index) => (
          <AboutBubble text={text} key={index} />
        ))}
      </div>
    </div>
  );
};
