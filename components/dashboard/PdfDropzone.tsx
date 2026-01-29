'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { CloudUpload } from 'lucide-react';

export default function PdfDropzone() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const pdf = acceptedFiles[0];
    if (pdf && pdf.type === 'application/pdf') {
      setFile(pdf);
    } else {
      alert('Por favor, envie apenas ficheiros PDF.');
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] },
    maxFiles: 1,
  });

  async function handleUpload() {
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    setLoading(false);
    alert('Upload concluído!');
  }

  return (
    <div className="max-w-md mx-auto">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed p-8 text-center cursor-pointer rounded-lg
          ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
      >
        <input {...getInputProps()} />

        {file ? (
          <p className="font-medium">📄 {file.name}</p>
        ) : (
          <div className="w-auto h-auto flex flex-col items-center gap-2">
            <CloudUpload color={'#9810FA'} />
            <p className="text-sm font-medium text-primary">Select CSV file to upload</p>
            <p className="text-xs font-normal text-[#999999]">or darg and drop it there</p>
          </div>
        )}
      </div>

      {file && (
        <button
          onClick={handleUpload}
          disabled={loading}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md"
        >
          {loading ? 'Enviando...' : 'Enviar PDF'}
        </button>
      )}
    </div>
  );
}
