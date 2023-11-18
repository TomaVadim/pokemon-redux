import { useDispatch as useReduxDispatch } from "react-redux";

import { AppDicpatch } from "@/stores/redux/store";

export const useDispatch = () => useReduxDispatch<AppDicpatch>();
