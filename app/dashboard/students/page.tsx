"use client";

import PdfDropzone from "@/components/dashboard/PdfDropzone";
import { CloudUpload, FileSearchCorner, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function StudentsPage() {
  const [showDropzone, setShowDropzone] = useState(true);

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="w-98">
        {showDropzone && (
          <div className="flex items-center justify-between mb-5">
            <h1 className="text-base font-bold">Upload CSV</h1>

            <button onClick={() => setShowDropzone(false)}>
              <X className="w-5 h-5 text-gray-400 hover:text-black" />
            </button>
          </div>
        )}

        {showDropzone ? (
          <PdfDropzone />
        ) : (
          <EmptyUploadState onReopen={() => setShowDropzone(true)} />
        )}
      </div>
    </div>
  );
}

function EmptyUploadState({ onReopen }: { onReopen: () => void }) {
  return (
    <div className="w-74.75 h-42.25 flex flex-col items-center justify-center">
      <FileSearchCorner className="w-10 h-10" />

      <div className="mt-5">
        <p className="text-sm font-medium text-center">No records found</p>
        <p className="text-sm font-normal text-[#999999] text-center">
          There are no records available at the moment
        </p>
      </div>

      <Button
        className="w-36.5 h-11 rounded-lg mt-5 flex items-center justify-center gap-2"
        onClick={onReopen}
      >
        Upload CSV
        <CloudUpload />
      </Button>
    </div>
  );
}
