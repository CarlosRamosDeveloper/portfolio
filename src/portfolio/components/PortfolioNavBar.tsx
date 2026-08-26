import { NavigateButton } from '.';

export const PortfolioNavBar = () => {
  return (
    <div className="flex justify-center mb-3 gap-6">
      <div>
        <NavigateButton path="projects" label="Ver Proyectos" />
      </div>
      <div>
        <NavigateButton path="about" label="Acerca de" />
      </div>
    </div>
  );
};
