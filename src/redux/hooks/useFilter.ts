import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { setFilter, resetFilter } from "../slices/filterSlice";

export const useFilter = () => {
  const filterRequest = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();

  return {
    filterRequest,
    setFilter: (key: keyof typeof filterRequest, value: string) =>
      dispatch(setFilter({ key, value })),
    resetFilter: () => dispatch(resetFilter()),
  };
};
