// ---------------- activityMessageContentParser.utils.ts ----------------
import * as cheerio from 'cheerio';
import { IMessageContentPart } from '@/services/OpenRouter.service';
import { IEstudinoActivity } from '@/interfaces/IActivity';

/**
 * Parse HTML completo (com imagens).
 */
function parseHtmlToMessageContentParts(html: string): IMessageContentPart[] {
  const contentParts: IMessageContentPart[] = [];
  if (!html) return contentParts;

  const $ = cheerio.load(html);

  $('body')
    .contents()
    .each((_, elem) => {
      if (elem.type === 'text') {
        const text = $(elem).text().trim();
        if (text) contentParts.push({ type: 'text', text });
      } else if (elem.type === 'tag') {
        const tagName = elem.tagName.toLowerCase();

        if (tagName === 'p' || tagName === 'div' || tagName === 'span') {
          const text = $(elem).text().trim();
          if (text) contentParts.push({ type: 'text', text });

          $(elem)
            .find('img')
            .each((_, img) => {
              const src = $(img).attr('src');
              if (src) contentParts.push({ type: 'image_url', image_url: { url: src, detail: 'high' } });
            });
        } else if (tagName === 'img') {
          const src = $(elem).attr('src');
          if (src) contentParts.push({ type: 'image_url', image_url: { url: src, detail: 'high' } });
        } else {
          const text = $(elem).text().trim();
          if (text) contentParts.push({ type: 'text', text });

          $(elem)
            .find('img')
            .each((_, img) => {
              const src = $(img).attr('src');
              if (src) contentParts.push({ type: 'image_url', image_url: { url: src, detail: 'high' } });
            });
        }
      }
    });

  return contentParts;
}

/**
 * Parse HTML apenas texto (ignora imagens).
 */
function parseHtmlTextOnlyToMessageContentParts(html: string): IMessageContentPart[] {
  const contentParts: IMessageContentPart[] = [];
  if (!html) return contentParts;

  const $ = cheerio.load(html);

  $('body')
    .contents()
    .each((_, elem) => {
      if (elem.type === 'text') {
        const text = $(elem).text().trim();
        if (text) contentParts.push({ type: 'text', text });
      } else if (elem.type === 'tag') {
        const text = $(elem).text().trim();
        if (text) contentParts.push({ type: 'text', text });
      }
    });

  return contentParts;
}

/**
 * Alternativas com imagens (completo).
 */
function parseAlternativesToMessageContentParts(
  alternatives: IEstudinoActivity['alternatives'],
): IMessageContentPart[] {
  const contentParts: IMessageContentPart[] = [];

  alternatives.forEach(({ label, text }, idx) => {
    const parts = parseHtmlToMessageContentParts(text);
    contentParts.push({ type: 'text', text: `${label})` });
    contentParts.push(...parts);
    if (idx < alternatives.length - 1) {
      contentParts.push({ type: 'text', text: '\n' });
    }
  });

  return contentParts;
}

/**
 * Alternativas sem imagens (texto apenas).
 */
function parseAlternativesTextOnlyToMessageContentParts(
  alternatives: IEstudinoActivity['alternatives'],
): IMessageContentPart[] {
  const contentParts: IMessageContentPart[] = [];

  alternatives.forEach(({ label, text }, idx) => {
    const parts = parseHtmlTextOnlyToMessageContentParts(text);
    contentParts.push({ type: 'text', text: `${label})` });
    contentParts.push(...parts);
    if (idx < alternatives.length - 1) {
      contentParts.push({ type: 'text', text: '\n' });
    }
  });

  return contentParts;
}

// ---------------- agrupadores (mantidos) ----------------
function groupConsecutiveTexts(parts: IMessageContentPart[]): IMessageContentPart[] {
  const grouped: IMessageContentPart[] = [];
  let buffer = '';

  for (const part of parts) {
    if (part.type === 'text') {
      if (part.text.length < 50) {
        buffer += (buffer ? ' ' : '') + part.text.trim();
      } else {
        if (buffer) {
          grouped.push({ type: 'text', text: buffer });
          buffer = '';
        }
        grouped.push(part);
      }
    } else {
      if (buffer) {
        grouped.push({ type: 'text', text: buffer });
        buffer = '';
      }
      grouped.push(part);
    }
  }
  if (buffer) grouped.push({ type: 'text', text: buffer });

  return grouped;
}

function groupAlternatives(parts: IMessageContentPart[]): IMessageContentPart[] {
  const grouped: IMessageContentPart[] = [];
  let currentLabel = '';
  let currentText = '';

  for (const part of parts) {
    if (part.type === 'text') {
      if (/^[A-E]\)$/.test(part.text.trim())) {
        if (currentLabel) {
          grouped.push({ type: 'text', text: `${currentLabel} ${currentText.trim()}` });
          currentText = '';
        }
        currentLabel = part.text.trim();
      } else {
        currentText += ' ' + part.text.trim();
      }
    } else {
      if (currentLabel) {
        grouped.push({ type: 'text', text: `${currentLabel} ${currentText.trim()}` });
        currentLabel = '';
        currentText = '';
      }
      grouped.push(part);
    }
  }
  if (currentLabel) {
    grouped.push({ type: 'text', text: `${currentLabel} ${currentText.trim()}` });
  }

  return grouped;
}

export {
  parseHtmlToMessageContentParts,
  parseHtmlTextOnlyToMessageContentParts,
  parseAlternativesToMessageContentParts,
  parseAlternativesTextOnlyToMessageContentParts,
  groupConsecutiveTexts,
  groupAlternatives,
};
