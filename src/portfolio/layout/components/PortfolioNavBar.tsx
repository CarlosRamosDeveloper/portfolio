import { ROUTES } from '@/constants/routes';
import { NavigateButton } from '.';

export const PortfolioNavBar = () => {
  return (
    <div className="flex justify-center mb-3 gap-6">
      <div>
        <NavigateButton path={ROUTES.experience} label="Experiencia Laboral" />
      </div>
      <div>
        <NavigateButton path={ROUTES.education} label="Formación" />
      </div>
      <div>
        <NavigateButton path={ROUTES.featured} label="Proyectos Destacados" />
      </div>
      <div>
        <NavigateButton path={ROUTES.about} label="Acerca de" />
      </div>
      <div>
        <NavigateButton path={ROUTES.contact} label="Contacto" />
      </div>
    </div>
  );
};
