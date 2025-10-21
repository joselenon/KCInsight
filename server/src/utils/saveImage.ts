import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export class ImageStorageService {
  /**
   * Salva uma imagem vinda em base64.
   * @param base64 - string da imagem base64
   * @param fileName - nome base para o arquivo
   * @param folder - subpasta em /assets para armazenar
   * @returns caminho relativo do arquivo salvo
   */
  static async saveBase64Image(base64: string, fileName: string, folder: string): Promise<string> {
    const matches = base64.match(/^data:(image\/\w+);base64,(.+)$/);
    if (!matches) throw new Error('Formato de imagem inválido');

    const ext = matches[1].split('/')[1];
    const data = matches[2];
    const buffer = Buffer.from(data, 'base64');

    const folderPath = path.join(__dirname, '../assets', folder);
    if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath, { recursive: true });

    const fullFileName = `${fileName}.${ext}`;
    const filePath = path.join(folderPath, fullFileName);
    fs.writeFileSync(filePath, new Uint8Array(buffer));

    return `${fullFileName}`;
  }

  /**
   * Baixa uma imagem a partir de uma URL e salva localmente.
   * @param imageUrl - URL da imagem a ser baixada
   * @param folder - subpasta em /assets para armazenar
   * @returns caminho relativo do arquivo salvo
   */
  static async downloadImageFromUrl(imageUrl: string, folder: string): Promise<string> {
    const folderPath = path.join(__dirname, '../assets', folder);
    if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath, { recursive: true });

    const ext = path.extname(new URL(imageUrl).pathname) || '.jpg';
    const fileName = `${uuidv4()}${ext}`;
    const filePath = path.join(folderPath, fileName);

    const writer = fs.createWriteStream(filePath);

    const response = await axios.get(imageUrl, { responseType: 'stream' });
    response.data.pipe(writer);

    await new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });

    console.log('Image downloaded:', fileName);

    return `/${folder}/${fileName}`;
  }

  /**
   * Deleta uma imagem do diretório de assets.
   * @param relativeImagePath - caminho relativo da imagem (ex: /userAvatars/image.jpg)
   */
  static async deleteImage(relativeImagePath: string): Promise<void> {
    try {
      const filePath = path.join(__dirname, '../assets', relativeImagePath);

      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`Image deleted: ${relativeImagePath}`);
      } else {
        console.warn(`Image not found: ${relativeImagePath}`);
      }
    } catch (error) {
      console.error(`Error deleting image: ${relativeImagePath}`, error);
      throw new Error('Erro ao deletar a imagem');
    }
  }

  static async duplicateImage(fileName: string, folder: string): Promise<string> {
    const folderPath = path.join(__dirname, '../assets', folder);
    if (!fs.existsSync(folderPath)) {
      throw new Error(`Folder not found: ${folderPath}`);
    }

    const sourcePath = path.join(folderPath, fileName);
    if (!fs.existsSync(sourcePath)) {
      throw new Error(`Image not found: ${sourcePath}`);
    }

    // Novo nome para a cópia
    const ext = path.extname(fileName);
    const newFileName = `${uuidv4()}${ext}`;
    const destPath = path.join(folderPath, newFileName);

    fs.copyFileSync(sourcePath, destPath);

    return newFileName;
  }
}
