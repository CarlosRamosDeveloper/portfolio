import { MilestoneData, RoadmapData } from '@/data';
import type { RoadmapMilestone, RoadmapPhase } from '@/interfaces';
import { useTranslation } from 'react-i18next';

export const useRoadmap = (): RoadmapPhase[] => {
  const { t } = useTranslation('roadmaps');

  return RoadmapData.map((roadmap) => ({
    name: 'a',
    description: 'b',
    id: roadmap.id,
    estimatedTime: roadmap.estimatedTime,
    milestones: roadmap.milestoneIds
      .map((milestoneId) => {
        const milestone = MilestoneData.find(
          (milestone) => milestone.id === milestoneId,
        );

        if (!milestone) return undefined;

        return {
          id: milestone.id,
          title: t(`milestones.${milestone.id}.title`),
          description: t(`milestones.${milestone.id}.description`),
          isCompleted: milestone.isCompleted,
        };
      })
      .filter(
        (milestone): milestone is RoadmapMilestone => milestone !== undefined,
      ),
  }));
};
