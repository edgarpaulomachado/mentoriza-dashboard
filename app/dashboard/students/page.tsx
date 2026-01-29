"use client";

import PdfDropzone from "@/components/dashboard/PdfDropzone";
import React from "react";

export default function StudentsPage() {
  return (
    <div className="w-full flex justify-center mt-10">
      <div className="w-98 h-78.5">
        <h1 className="text-base font-bold mb-5">Upload CSV</h1>
        <PdfDropzone />
      </div>
    </div>
  );
}
