import { NavigateButton } from '.';

export const PortfolioNavBar = () => {
  return (
    <div className="flex justify-center mb-3 gap-6">
      <div>
        <NavigateButton path="experience" label="Experiencia Laboral" />
      </div>
      <div>
        <NavigateButton path="education" label="Formación" />
      </div>
      <div>
        <NavigateButton path="featured" label="Proyectos Destacados" />
      </div>
      <div>
        <NavigateButton path="about" label="Acerca de" />
      </div>
      <div>
        <NavigateButton path="contact" label="Contacto" />
      </div>
    </div>
  );
};
