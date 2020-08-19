import { createStore, createHook } from 'react-sweet-state';

const Store = createStore({
  initialState: {
    isOpen: false,
  },
  actions: {
    toggle: () => ({ setState, getState }) => {
      setState({ isOpen: !getState().isOpen });
    },
  },
});

const useDrawer = createHook(Store);

export default useDrawer;
