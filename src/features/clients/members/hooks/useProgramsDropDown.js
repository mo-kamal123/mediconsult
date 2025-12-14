import { useQuery } from "@tanstack/react-query";
import { getAllPrograms } from "../api/membersApi";

const useProgramsDropDown = (id) => {
  return useQuery({
    queryKey: ['memberPrograms', id],
    queryFn: () => getAllPrograms(id),
    enabled: !!id,
  });
};

export default useProgramsDropDown;
