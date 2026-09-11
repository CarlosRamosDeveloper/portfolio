import type { IconType } from 'react-icons/lib';
import type { TechArea, TechCategory } from '.';

export interface Technology {
  id: string;
  name: string;
  isRelevant?: boolean;
  icon?: IconType;
  color?: string;
  category: TechCategory;
  areas: TechArea[];
}
