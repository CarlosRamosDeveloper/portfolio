import { Link } from 'react-router';

export const LandingAbout = () => {
  return (
    <div>
      <div className="my-2 w-full max-w-3xl flex flex-col text-center mx-auto text-base">
        Soy un apasionado del desarrollo de software con poca experiencia
        laboral pero gran recorrido a nivel autodidacta y con multiples cursos
        reglados
        <Link to="/about" className="mt-3 font-semibold">
          [Aquí puedes ver más acerca de mi]
        </Link>
      </div>
    </div>
  );
};
