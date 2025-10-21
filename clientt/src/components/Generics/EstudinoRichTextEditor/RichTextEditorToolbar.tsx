import React, { useState } from 'react';
import styled from 'styled-components';
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaImage,
  FaStrikethrough,
  FaListUl,
  FaListOl,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
} from 'react-icons/fa';
import { Editor } from '@tiptap/react';
import CardImagesPreview from './CardImagesPreview';
import ImageUploaderModal from './ImageUploaderModal';

const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: var(--color-gray4);
  border-radius: 0 0 var(--br-sm) var(--br-sm);
  overflow-x: auto;

  svg {
    fill: var(--color-1);
  }
`;

const MenuButton = styled.button`
  background: transparent;
  border: none;
  color: var(--color-white);
  font-size: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.4rem;

  &:hover {
    color: var(--color-primary);
  }
`;

interface RichTextEditorToolbarProps {
  onCommand: (command: string, value?: string | string[]) => void;
  images: string[];
  editor: Editor; // opcional, se quiser usar editor direto para comandos
}

export function RichTextEditorToolbar({ onCommand, images, editor }: RichTextEditorToolbarProps) {
  const [showImageModal, setShowImageModal] = useState(false);

  const handleImageUpload = (base64Images: string[]) => {
    const updatedImages = [...images, ...base64Images];
    onCommand('insertImage', updatedImages);
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    onCommand('insertImage', updatedImages);
  };

  const execCommand = (command: string) => {
    if (editor) {
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
      onCommand('update', editor.getHTML());
    } else {
      onCommand(command);
    }
  };

  return (
    <>
      {images.length > 0 && <CardImagesPreview images={images} onRemoveFn={handleRemoveImage} />}

      <MenuContainer>
        <MenuButton type="button" onClick={() => setShowImageModal(true)}>
          <FaImage />
        </MenuButton>
        <MenuButton type="button" onClick={() => execCommand('bold')}>
          <FaBold />
        </MenuButton>
        <MenuButton type="button" onClick={() => execCommand('italic')}>
          <FaItalic />
        </MenuButton>
        <MenuButton type="button" onClick={() => execCommand('underline')}>
          <FaUnderline />
        </MenuButton>
        <MenuButton type="button" onClick={() => execCommand('strikeThrough')}>
          <FaStrikethrough />
        </MenuButton>
        <MenuButton type="button" onClick={() => execCommand('bulletList')}>
          <FaListUl />
        </MenuButton>
        <MenuButton type="button" onClick={() => execCommand('orderedList')}>
          <FaListOl />
        </MenuButton>
        <MenuButton type="button" onClick={() => execCommand('alignLeft')}>
          <FaAlignLeft />
        </MenuButton>
        <MenuButton type="button" onClick={() => execCommand('alignCenter')}>
          <FaAlignCenter />
        </MenuButton>
        <MenuButton type="button" onClick={() => execCommand('alignRight')}>
          <FaAlignRight />
        </MenuButton>
      </MenuContainer>

      <ImageUploaderModal
        showModal={showImageModal}
        setShowModal={setShowImageModal}
        onImageSelected={handleImageUpload}
        onClose={() => setShowImageModal(false)}
        existingImages={images}
      />
    </>
  );
}
