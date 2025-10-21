export function filterTopicNameBySlug(topicName: string): string | null {
  return topicName.replace(/^\d+(\.\d+)*\s*/, '');
}
