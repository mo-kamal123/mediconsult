import { Grid3x3, Copy, Trash2, Paperclip } from 'lucide-react';

const PolicyTableActions = ({
  row,
  onAttachmentClick,
  onGridClick,
  onCopyClick,
  onDeleteClick,
}) => {
  return (
    <div className="flex items-center gap-3 text-lg">
      <Paperclip
        className="cursor-pointer text-black hover:text-blue-600"
        onClick={() => onAttachmentClick(row['Policy ID'])}
        title="Add Attachment"
      />
      <Grid3x3
        className="cursor-pointer text-gray-400"
        onClick={() => onGridClick(row)}
      />
      <Copy
        className="cursor-pointer text-[#4285F4]"
        onClick={() => onCopyClick(row)}
      />
      <Trash2
        className="cursor-pointer text-[#DC0600]"
        onClick={() => onDeleteClick(row)}
      />
    </div>
  );
};

export default PolicyTableActions;
