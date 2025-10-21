import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import TextAlign from '@tiptap/extension-text-align';
import { RichTextEditorToolbar } from './RichTextEditorToolbar';

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  position: relative;
`;

const Wrapper = styled.div`
  flex: 1;
  position: relative;

  background-color: var(--color-white);
  border-radius: var(--br-sm);

  display: flex;
  flex-direction: column;
`;

const EditorContentStyled = styled.div`
  .ProseMirror {
    outline: none;
    width: 100%;
    min-height: 180px;
    max-height: 180px;
    padding: 1rem;
    overflow-y: auto;
    scrollbar-width: none;

    p {
      color: var(--color-1) !important;
      font-family: var(--font-primary);
      font-weight: 400;
      white-space: pre-wrap;
      overflow-wrap: break-word;
      word-break: break-word;
      outline: none;
    }
  }

  .ProseMirror ul {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin: 0.5rem 0;
  }

  .ProseMirror ol {
    list-style-type: decimal;
    padding-left: 1.5rem;
    margin: 0.5rem 0;
  }

  .ProseMirror li {
    margin-bottom: 0.5rem;
  }
`;

const Placeholder = styled.span<{ $isAnswered: boolean }>`
  pointer-events: none;
  user-select: none;
  position: absolute;
  z-index: 0;
  top: 1rem;
  left: 1rem;
  color: ${({ $isAnswered }) => ($isAnswered ? 'var(--color-2)' : 'var(--color-gray)')};
  opacity: ${({ $isAnswered }) => ($isAnswered ? '1' : '0.5')};
  font-weight: 500;
`;

interface RichTextEditorProps {
  text?: string;
  images?: string[];
  placeholder?: string;
  onUpdateTextFn: (html: string) => void;
  onUpdateImagesFn: (images: string[]) => void;
  error?: string;
}

export function EstudinoRichTextEditor({
  text = '',
  images = [],
  placeholder = 'Digite aqui...',
  onUpdateTextFn,
  onUpdateImagesFn,
  error,
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: false,
        orderedList: false,
      }),
      Underline,
      BulletList,
      OrderedList,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: text,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onUpdateTextFn(html);
    },
  });

  const handleCommand = (command: string, value?: string | string[]) => {
    if (!editor) return;

    if (command === 'insertImage' && Array.isArray(value)) {
      onUpdateImagesFn(value);
    }

    if (command !== 'insertImage' && typeof value === 'string') {
      switch (command) {
        case 'bold':
          editor.chain().focus().toggleBold().run();
          break;
        case 'italic':
          editor.chain().focus().toggleItalic().run();
          break;
        case 'underline':
          editor.chain().focus().toggleUnderline().run();
          break;
        case 'strikeThrough':
          editor.chain().focus().toggleStrike().run();
          break;
        case 'bulletList':
          editor.chain().focus().toggleBulletList().run();
          break;
        case 'orderedList':
          editor.chain().focus().toggleOrderedList().run();
          break;
        case 'alignLeft':
          editor.chain().focus().setTextAlign('left').run();
          break;
        case 'alignCenter':
          editor.chain().focus().setTextAlign('center').run();
          break;
        case 'alignRight':
          editor.chain().focus().setTextAlign('right').run();
          break;
        default:
          break;
      }

      onUpdateTextFn(value);
    }
  };

  const isEmpty = !editor?.getText().trim();

  useEffect(() => {
    if (editor && text === '') {
      // Só limpa se o conteúdo atual for diferente
      if (editor.getHTML() !== '') {
        editor.commands.setContent('');
      }
    }
  }, [text, editor]);

  useEffect(() => {
    if (editor && text !== editor.getHTML()) {
      editor.commands.setContent(text, false); // false para não adicionar no histórico de undo
    }
  }, [text, editor]);

  return (
    <Container>
      <Wrapper>
        {isEmpty && <Placeholder $isAnswered={false}>{placeholder}</Placeholder>}
        <EditorContentStyled>{editor && <EditorContent editor={editor} />}</EditorContentStyled>

        {editor && <RichTextEditorToolbar onCommand={handleCommand} images={images} editor={editor} />}
      </Wrapper>
      {error && <span style={{ color: 'red', fontSize: '0.9rem' }}>{error}</span>}
    </Container>
  );
}
