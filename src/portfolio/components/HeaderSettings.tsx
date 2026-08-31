import { useTheme } from '../hooks/useTheme';

export const HeaderSettings = () => {
  const { setTheme } = useTheme();
  return (
    <>
      <button onClick={() => setTheme('light')}>Modo Claro</button>
      <button onClick={() => setTheme('dark')}>Modo Oscuro</button>
      <button onClick={() => setTheme('colorblind')}>Modo Daltónico</button>
    </>
  );
};
