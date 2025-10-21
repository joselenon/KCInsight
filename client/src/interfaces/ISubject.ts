export interface ISubject {
  slug: string;
  topics: string[];
  subtopics: { [topicSlug: string]: string[] };
}

export interface ISubtopicProgresseses {
  [subtopicSlug: string]: { learntAt: number; isLearnt: boolean };
}

export interface ISubjectProgresses {
  [disciplineSlug: string]: {
    [topicSlug: string]: ISubtopicProgresseses;
  };
}
