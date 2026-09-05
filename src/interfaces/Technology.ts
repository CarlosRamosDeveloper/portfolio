import type { IconType } from 'react-icons/lib';
import type { TechArea, TechCategory } from '.';

export interface Technology {
  name: string;
  icon?: IconType;
  color?: string;
  category: TechCategory;
  areas: TechArea[];
}
