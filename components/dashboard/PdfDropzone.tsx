"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { CloudUpload } from "lucide-react";
import { Progress } from "@/components/ui/progress";

type TableRow = {
  id: number;
  fileName: string;
  status: string;
};

export default function PdfDropzone() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [tableData, setTableData] = useState<TableRow[]>([]);

  // ===============================
  // Upload automático
  // ===============================

  async function handleUpload(pdf: File) {
    setLoading(true);
    setProgress(0);

    // Simular progress (fetch não dá progresso nativo)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + 10;
      });
    }, 200);

    const formData = new FormData();
    formData.append("file", pdf);

    await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    clearInterval(interval);
    setProgress(100);
    setLoading(false);

    // Simular dados para tabela
    setTableData([
      {
        id: Date.now(),
        fileName: pdf.name,
        status: "Processado",
      },
    ]);
  }

  // ===============================
  // DROPZONE
  // ===============================

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const pdf = acceptedFiles[0];

    if (pdf && pdf.type === "application/pdf") {
      setFile(pdf);
      handleUpload(pdf);
    } else {
      alert("Por favor, envie apenas ficheiros PDF.");
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    maxFiles: 1,
  });

  return (
    <div className="max-w-md mx-auto space-y-4">

      {/* DROPZONE */}
      {!tableData.length && (
        <div
          {...getRootProps()}
          className={`border-2 border-dashed p-8 text-center cursor-pointer rounded-lg transition
            ${isDragActive ? "border-purple-500 bg-purple-50" : "border-gray-300"}`}
        >
          <input {...getInputProps()} />

          {file ? (
            <p className="font-medium">📄 {file.name}</p>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <CloudUpload color="#9810FA" />
              <p className="text-sm font-medium text-primary">
                Select PDF file to upload
              </p>
              <p className="text-xs text-[#999999]">
                or drag and drop it here
              </p>
            </div>
          )}
        </div>
      )}

      {/* PROGRESS BAR */}
      {loading && (
        <Progress value={progress} />
      )}

      {/* TABELA */}
      {tableData.length > 0 && (
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="text-left p-3">File Name</th>
                <th className="text-left p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {tableData.map((row) => (
                <tr key={row.id} className="border-t">
                  <td className="p-3">{row.fileName}</td>
                  <td className="p-3">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
}
