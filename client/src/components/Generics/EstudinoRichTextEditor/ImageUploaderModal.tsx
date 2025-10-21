import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Modal from '@/components/Generics/Modal';
import GenericFileInput from '../Form/Input/GenericFileInput';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-2);
  border-radius: var(--br-md);
`;

const Header = styled.div`
  padding: 0.5rem 1rem;

  h5 {
    color: var(--color-white);
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--color-white);
  border-radius: 0 0 var(--br-md) var(--br-md);
`;

interface Props {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  onImageSelected: (base64Images: string[]) => void;
  onClose: () => void;
  existingImages: string[];
}

export default function ImageUploaderModal({
  showModal,
  setShowModal,
  onImageSelected,
  onClose,
  existingImages,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const fileToDataURL = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const filesDataUrls = await Promise.all(files.map(fileToDataURL));
    const newImages = filesDataUrls.filter((img) => !existingImages.includes(img));

    if (newImages.length > 0) {
      onImageSelected(newImages);
      onClose();
    } else {
      alert('Você já adicionou essas imagens.');
    }
  };

  return (
    <Modal showModal={showModal} setShowModal={setShowModal} contentMaxWidth={400}>
      <Wrapper>
        <Header>
          <h5>Selecione uma ou mais imagens</h5>
        </Header>
        <Body>
          <GenericFileInput
            label="Upload de imagens"
            accept="image/png, image/jpeg"
            multiple
            onChangeFn={handleFiles}
            existingBase64s={existingImages}
            onFilesSelected={(base64s, files) => {
              // console.log('Base64s:', base64s);
              // console.log('Arquivos originais:', files);
            }}
          />
        </Body>
      </Wrapper>
    </Modal>
  );
}
