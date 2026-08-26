import { NavigateButton } from '.';

export const PortfolioNavBar = () => {
  return (
    <div className="flex justify-center gap-6">
      <div>
        <NavigateButton path="projects" label="Ver Proyectos" />
      </div>
      <div>
        <NavigateButton path="about" label="Acerca de" />
      </div>
    </div>
  );
};
