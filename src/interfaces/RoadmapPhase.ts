import type { RoadmapMilestone } from './RoadmapMilestone';

export interface RoadmapPhase {
  id: number;
  name: string;
  description: string;
  estimatedTime: string;
  milestones: RoadmapMilestone[];
}
