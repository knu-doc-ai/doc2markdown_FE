import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

export const uploadDocument = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  const response = await axios.post(`${API_BASE_URL}/documents/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data; // { documentId: string, filename: string, ... }
};

export const startConversion = async (documentId: string, format: string) => {
  // Map our UI format strings or send directly, BE might expect specific enum
  let targetFormat = 'gfm';
  if (format === 'CommonMark') targetFormat = 'commonmark';
  if (format === 'AsciiDoc') targetFormat = 'asciidoc';

  const response = await axios.post(
    `${API_BASE_URL}/documents/${documentId}/convert`,
    { format: targetFormat },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return response.data; // { status: "PROCESSING", ... }
};

export const checkStatus = async (documentId: string) => {
  const response = await axios.get(`${API_BASE_URL}/documents/${documentId}/status`);
  return response.data; // { documentId: string, status: "SUCCESS" | "FAILED" | "PROCESSING", ... }
};

export const getResult = async (documentId: string) => {
  const response = await axios.get(`${API_BASE_URL}/documents/${documentId}/result`);
  return response.data; // { markdown: string, images: any[] }
};

export const downloadResultZip = (documentId: string) => {
  window.location.href = `${API_BASE_URL}/documents/${documentId}/download`;
};
