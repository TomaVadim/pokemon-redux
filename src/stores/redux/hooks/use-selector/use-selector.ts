import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";

import { RootState } from "@/stores/redux/root-reducer/root-reducer";

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
