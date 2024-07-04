// utils/downloadFile.js
import { saveAs } from 'file-saver';

export const downloadTextFile = (filename, content) => {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  saveAs(blob, filename);
};
