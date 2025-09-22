import { Loader } from 'lucide-react';

const Spinner = () => (
  <div className="flex justify-center items-center w-full h-svh bg-white -mt-30 pl-10">
    <Loader className="h-10 w-10 animate-spin text-gray-700" />
  </div>
);

export default Spinner;