import React, { useState } from 'react';
import Form from './from'; // Ensure Form passes className to a <div> or <form>
import { toast } from 'sonner';
import { MdDeleteOutline, MdOutlineCloudUpload } from 'react-icons/md';
import { BsFiletypeJpg } from 'react-icons/bs';
import imgIcon from '../imgs/image-svgrepo-com.svg';
import pdfIcon from '../imgs/pdf-svgrepo-com.svg';
import wordIcon from '../imgs/word-svgrepo-com.svg';
import excelIcon from '../imgs/excel-svgrepo-com.svg';
import { CiExport } from 'react-icons/ci';

const DragAndDrop = () => {
  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  console.log(files);
  // ✅ Only allow specific file types
  const allowedTypes = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  ];

  const typesIcons = [
    { match: 'image', icon: imgIcon },
    { match: 'pdf', icon: pdfIcon },
    { match: 'msword', icon: wordIcon },
    {
      match: 'vnd.openxmlformats-officedocument.wordprocessingml.document',
      icon: wordIcon,
    },
    {
      match: 'vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      icon: excelIcon,
    },
  ];

  const filterFiles = (incomingFiles) => {
    const valid = incomingFiles.filter(
      (incomingFile) =>
        allowedTypes.includes(incomingFile.type) &&
        !files.some((existingFile) => existingFile.name === incomingFile.name)
    );

    if (valid.length < incomingFiles.length) {
      toast.error('Some files were not allowed or already added!', {
        description: 'Duplicates or unsupported types were skipped.',
      });
    }

    return valid;
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    const validFiles = filterFiles(droppedFiles);
    if (validFiles.length > 0) {
      setFiles((prev) => [...prev, ...validFiles]);
    }
  };

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const validFiles = filterFiles(selectedFiles);
    if (validFiles.length > 0) {
      setFiles((prev) => [...prev, ...validFiles]);
    }
  };
  const handleSelectedFiles = (fileName) => {
    const isSelected = selectedFiles.includes(fileName);
    if (isSelected) {
      setSelectedFiles(selectedFiles.filter((name) => name !== fileName));
    } else {
      setSelectedFiles([...selectedFiles, fileName]);
    }
    console.log(selectedFiles);
  };

  return (
    <Form className="gap-5">
      <div className="flex items-center justify-between">
        <h2 className="text-lg text-[#1F4ED6] font-semibold mb-4">
          Upload Attachment
        </h2>
      </div>

      <div
        className={`flex flex-col items-center border-2 border-dashed p-6 rounded-lg text-center cursor-pointer transition ${
          dragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById('fileInput').click()}
      >
        <input
          id="fileInput"
          type="file"
          multiple
          onChange={handleFileSelect}
          className="hidden"
          accept="image/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        />
        <p className="text-6xl text-gray-500">
          <MdOutlineCloudUpload />
        </p>
        <p className="text-gray-600">
          {files.length > 0
            ? `${files.length} file(s) selected`
            : 'Drag & drop files here or click to browse'}
        </p>
      </div>
      {files.length > 0 && (
        <>
          <div className="flex justify-end gap-4">
            <button className="text- flex items-center gap-2 border hover:border-red-300 hover:text-red-600 rounded p-1">
              <MdDeleteOutline /> Delete
            </button>
            <button className="text- flex items-center gap-2 border hover:border-green-300 hover:text-green-600 rounded p-1">
              <CiExport /> Export
            </button>
          </div>
          <div className="grid grid-cols-5 gap-5 p-5 max-h-60 overflow-auto border rounded-xl">
            {files.map((file, index) => (
              <div
                title={file.name}
                key={index}
                className={`flex flex-col items-center justify-center border p-4 ${selectedFiles.includes(file.name) ? 'bg-emerald-400/20 shadow-2xl' : 'bg-white shadow-xl'} rounded text-sm text-gray-700 transition-all duration-200`}
                onClick={() => handleSelectedFiles(file.name)}
              >
                <p className="text-4xl mb-2 flex items-center justify-center">
                  {(() => {
                    const match = typesIcons.find((type) =>
                      file.type.includes(type.match)
                    );
                    return match ? (
                      <img
                        src={match.icon}
                        alt="icon"
                        className="w-10 h-10 object-contain"
                      />
                    ) : (
                      <BsFiletypeJpg />
                    );
                  })()}
                </p>

                <p className="truncate max-w-[70px]">
                  {file.name.split('.')[0].slice(0, 10)}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
      <button className="bg-[#1f4dd6cc] p-2 rounded-lg text-white">
        upload
      </button>
    </Form>
  );
};

export default DragAndDrop;
