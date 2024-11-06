import { createTypedHooks } from "easy-peasy";
import { TodoStoreModel } from "./store";

const typedHooks = createTypedHooks<TodoStoreModel>();

export const useStoreActions = typedHooks.useStoreActions
export const useStoreDispatch = typedHooks.useStoreDispatch
export const useStoreState = typedHooks.useStoreState
export const useStore = typedHooks.useStore