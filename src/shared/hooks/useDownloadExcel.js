import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useDownloadExcel = (key, page, downloadFunc) => {
    const data = useQuery({
      queryKey: [key, page],
      queryFn: downloadFunc,
    });
  const downloadExcel = (fileBlob, fileName = 'clients.xlsx') => {
    const url = window.URL.createObjectURL(new Blob([fileBlob]));

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };
  return { downloadExcel, data };
};

export default useDownloadExcel;
