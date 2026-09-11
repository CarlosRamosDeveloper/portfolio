import { useMediaQuery } from '.';

export const useMaxTechPerRow = () => {
  const isMobile = useMediaQuery('(max-width: 639px)');
  const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 1023px)');

  return isMobile ? 2 : isTablet ? 3 : 5;
};
