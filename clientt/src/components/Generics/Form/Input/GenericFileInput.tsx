import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const FileInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const HiddenInput = styled.input`
  display: none;
`;

const FileLabel = styled.label`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: var(--color-gray5);
  border: 1px solid var(--color-gray4);
  border-radius: var(--br-md);
  cursor: pointer;
  font-size: 0.9rem;
  text-align: center;
  width: fit-content;
`;

const FileNameText = styled.span`
  font-size: 0.85rem;
  color: var(--color-darkgray);
`;

interface GenericFileInputProps {
  label?: string;
  multiple?: boolean;
  accept?: string;
  onFilesSelected?: (contents: string[], originalFiles: File[]) => void;
  existingBase64s?: string[];
  onChangeFn?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readAsText?: boolean;
}

export default function GenericFileInput({
  label,
  multiple = false,
  accept = '*/*',
  onFilesSelected,
  existingBase64s = [],
  onChangeFn,
  readAsText,
}: GenericFileInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const fileToContent = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      readAsText ? reader.readAsText(file) : reader.readAsDataURL(file);
    });

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChangeFn) onChangeFn(e);

    const files = Array.from(e.target.files || []);
    const fileContents = await Promise.all(files.map(fileToContent));

    const newContents = fileContents.filter((content) => !existingBase64s.includes(content));
    if (newContents.length > 0 && onFilesSelected) {
      onFilesSelected(newContents, files);
      if (!multiple) setFileName(files[0].name);
    } else {
      alert('Todos os arquivos selecionados já foram adicionados.');
    }
  };

  return (
    <FileInputWrapper>
      {label && <span>{label}</span>}
      <HiddenInput
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleFileChange}
        id="custom-file-upload"
      />
      <FileLabel htmlFor="custom-file-upload">{fileName ? 'Trocar Arquivo' : 'Selecionar Arquivo'}</FileLabel>
      {fileName && (
        <FileNameText>
          Arquivo selecionado: <strong>{fileName}</strong>
        </FileNameText>
      )}
    </FileInputWrapper>
  );
}
