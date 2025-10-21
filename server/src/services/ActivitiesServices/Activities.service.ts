import path from 'path';
import fs from 'fs/promises';
import {
  IEstudinoActivity,
  IEstudinoActivityPublic,
  IActivityFeedback,
  IEstudinoActivityPublicWithAnswer,
} from '@/interfaces/IActivity';

import { KnowledgeCheckUnavailableForThisSubtopic, QuestionNotFoundError } from '@/config/errors/classes/ClientErrors';
import { UnknownError } from '@/config/errors/classes/SystemErrors';

const activitiesJSONName = 'activities.json';

class ActivityService {
  private readonly basePath = path.resolve(__dirname, '../../data/activities/subjects');

  private activityToPublic(activity: IEstudinoActivity): IEstudinoActivityPublic {
    return {
      id: activity.id,
      disciplineSlug: activity.disciplineSlug,
      sourceExam: activity.sourceExam,
      examYear: activity.examYear,
      tags: activity.tags,
      difficultyLevel: activity.difficultyLevel,
      questionStemHTML: activity.questionStemHTML,
      alternatives: activity.alternatives,
    };
  }

  private async readJsonFile<T>(filePath: string): Promise<T | null> {
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      return JSON.parse(content) as T;
    } catch (err: unknown) {
      if ((err as NodeJS.ErrnoException).code === 'ENOENT') return null;
      throw new UnknownError(`Erro ao ler o arquivo ${filePath}`);
    }
  }

  async getActivityBySlugsAndId({
    activityId,
    disciplineSlug,
  }: {
    activityId: string;
    disciplineSlug: string;
  }): Promise<IEstudinoActivityPublicWithAnswer> {
    const filePath = path.join(this.basePath, disciplineSlug, activitiesJSONName);
    const activities = await this.readJsonFile<IEstudinoActivity[]>(filePath);
    if (!activities) throw new QuestionNotFoundError();

    const found = activities.find((activity) => activity.id === activityId);
    if (!found) throw new QuestionNotFoundError();

    return { ...this.activityToPublic(found), correctAlternative: found.correctAlternative };
  }
}

export default new ActivityService();
