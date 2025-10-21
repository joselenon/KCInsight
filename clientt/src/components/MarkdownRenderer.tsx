// components/Generics/MarkdownRenderer.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import styled from 'styled-components';

// ---------- UTILS ----------

// Detecta se o texto contém expressões LaTeX
export const containsLatex = (text: string): boolean => {
  if (!text) return false;
  const latexRegex = /(\\\[.*?\\\])|(\$\$.*?\$\$)|(\\\(.*?\\\))/s;
  return latexRegex.test(text);
};

// Normaliza expressões LaTeX para formato padrão $$...$$
export function normalizeLatex(text: string): string {
  return (
    text
      // Converte \[...\] e \(...\) em $$...$$
      .replace(/\\\[/g, '$$')
      .replace(/\\\]/g, '$$')
      .replace(/\\\(/g, '$$')
      .replace(/\\\)/g, '$$')
      // Converte [ LaTeX ] em $$ LaTeX $$
      .replace(/\[\s*(\\?.*?)\s*\]/gs, (_, inner) => {
        if (/^\$\$.*\$\$$/.test(inner)) return inner;
        return `$$${inner}$$`;
      })
      // Garante que $$...$$ fiquem isolados por quebras de linha
      .replace(/\$\$(.*?)\$\$/gs, (_, expr) => `\n\n$$\n${expr.trim()}\n$$\n\n`)
  );
}

const Wrapper = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span,
  p,
  ul,
  li {
    font-size: 16px;
  }

  .katex {
    display: inline-block;
    vertical-align: middle;
    margin: 0 0.15em;
    line-height: 1.4;
  }

  .katex-display {
    margin: 1.2em 0 !important; /* espaço extra antes e depois */
  }
`;

// ---------- COMPONENTE PRINCIPAL ----------

type MarkdownRendererProps = {
  text: string;
  className?: string;
  enableMath?: boolean; // opcional — permite desativar math se quiser
};

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ text, className, enableMath = true }) => {
  const shouldRenderLatex = enableMath && containsLatex(text);
  const processed = shouldRenderLatex ? normalizeLatex(text) : text;

  return (
    <Wrapper className={className}>
      <ReactMarkdown
        remarkPlugins={[[remarkMath, { inlineMathDouble: false }]]}
        rehypePlugins={[[rehypeKatex, { strict: false }]]}
      >
        {processed}
      </ReactMarkdown>
    </Wrapper>
  );
};

export default MarkdownRenderer;
