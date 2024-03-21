import { AppState, AppStateGetter, AppStateSetter } from "./app-state-types";
import _ from "lodash";
import { SelectionMode } from "./app-state-types";

export default function createHook(set: AppStateSetter, get: AppStateGetter): Partial<AppState> {
  return {
    onTransformStart: () => {
      set({
        transforming: true
      })
    },
    onTransformEnd: (transform: number) => {
      set({
        transform,
        transforming: false
      })
    },
    onChangeDragingAndResizingState: (value: boolean) => {
      set({ draggingAndResizing: value })
    },
    onChangeSelectMode: (mode: SelectionMode) => {
      set({ slectionMode: mode })
    },
  }
}