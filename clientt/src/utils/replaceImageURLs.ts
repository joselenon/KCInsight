export function replaceImageURLs(html: string, disciplineSlug: string): string {
  if (import.meta.env.VITE_APP_MODE !== 'DEVELOPMENT') return html;

  const prodBase = `https://api.estudino.com/activities/subjects/${disciplineSlug}/images/`;
  const devBase = `http://localhost:3005/activities/subjects/${disciplineSlug}/images/`;

  return html.replace(new RegExp(prodBase.replace(/\//g, '\\/'), 'g'), devBase);
}
