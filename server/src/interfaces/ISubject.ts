export interface ISubject {
  slug: string;
  topics: string[];
  subtopics: { [topicSlug: string]: string[] };
}
