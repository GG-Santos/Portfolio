    import { create } from "zustand";

    type CounterStore = {
    major: number;
    minor: number;
    patch: number;
    incrementMajor: () => void;
    decrementMajor: () => void;
    incrementMinor: () => void;
    decrementMinor: () => void;
    incrementPatch: () => void;
    decrementPatch: () => void;
    };

    // Function to retrieve persisted state from localStorage
    const getPersistedState = (): Omit<CounterStore, "incrementMajor" | "decrementMajor" | "incrementMinor" | "decrementMinor" | "incrementPatch" | "decrementPatch"> => {
    const savedState = localStorage.getItem("counterState");
    return savedState ? JSON.parse(savedState) : { major: 0, minor: 0, patch: 0 };
    };

    // Create Zustand store with persistence
    const useCounterStore = create<CounterStore>((set) => ({
    ...getPersistedState(),
    incrementMajor: () =>
        set((state) => {
        const newState = { ...state, major: state.major + 1, minor: 0, patch: 0 };
        localStorage.setItem("counterState", JSON.stringify(newState));
        return newState;
        }),
    decrementMajor: () =>
        set((state) => {
        const newState = { ...state, major: Math.max(state.major - 1, 0) };
        localStorage.setItem("counterState", JSON.stringify(newState));
        return newState;
        }),
    incrementMinor: () =>
        set((state) => {
        const newState = { ...state, minor: state.minor + 1, patch: 0 };
        localStorage.setItem("counterState", JSON.stringify(newState));
        return newState;
        }),
    decrementMinor: () =>
        set((state) => {
        const newState = { ...state, minor: Math.max(state.minor - 1, 0) };
        localStorage.setItem("counterState", JSON.stringify(newState));
        return newState;
        }),
    incrementPatch: () =>
        set((state) => {
        const newState = { ...state, patch: state.patch + 1 };
        localStorage.setItem("counterState", JSON.stringify(newState));
        return newState;
        }),
    decrementPatch: () =>
        set((state) => {
        const newState = { ...state, patch: Math.max(state.patch - 1, 0) };
        localStorage.setItem("counterState", JSON.stringify(newState));
        return newState;
        }),
    }));

    export default useCounterStore;
    