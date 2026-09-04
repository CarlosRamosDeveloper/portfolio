import { ROUTES } from '@/constants/routes';
import { Link } from 'react-router';

export const LandingHero = () => {
  return (
    <div className="my-6 w-full max-w-3xl flex flex-col text-center mx-auto text-xl">
      <span>Bienvenido o bienvenida, soy Carlos Ramos,</span>
      <span>Desarrollador de Software fullstack.</span>
      <div className="flex justify-around mt-3">
        <Link to={ROUTES.projects}>[Proyectos]</Link>
        <Link to={ROUTES.contact}>[Contactar]</Link>
      </div>
    </div>
  );
};
