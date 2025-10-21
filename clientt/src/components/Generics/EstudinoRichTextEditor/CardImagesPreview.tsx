import IconButton from '@/components/Generics/Buttons/IconButton';
import URLS from '@/config/URLs';
import React from 'react';
import { FiX } from 'react-icons/fi';
import styled from 'styled-components';

const ImagePreviewWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
`;

const ImageBox = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: var(--color-gray5);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    background: var(--color-secondary);
    border: none;
    border-radius: 0 0 0 0.5rem;
    color: white;
    cursor: pointer;
    padding: 0.2rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;

  background: var(--color-1);
  border-radius: var(--br-md);
`;

export default function CardImagesPreview({
  images,
  onRemoveFn,
  showRemoveButton = true,
}: {
  images: string[];
  onRemoveFn: (any: any) => void;
  showRemoveButton?: boolean;
}) {
  const isBase64Image = (str: string) => /^data:image\/\w+;base64,/.test(str);

  return (
    <ImagePreviewWrapper style={{ padding: images.length ? '.5rem' : '.25rem' }}>
      {images.map((img: string, index: number) => {
        const isNewImage = isBase64Image(img);

        return (
          <ImageBox key={index}>
            {isNewImage && <img src={img} alt={`imagem-${index}`} />}
            {!isNewImage && <img src={`${URLS.MAIN_URLS.ASSETS_URL}${img}`} alt={`imagem-${index}`} />}
            {showRemoveButton && (
              <IconButton attributes={{ onClick: () => onRemoveFn(index) }}>
                <IconWrapper>
                  <FiX size={14} />
                </IconWrapper>
              </IconButton>
            )}
          </ImageBox>
        );
      })}
    </ImagePreviewWrapper>
  );
}
