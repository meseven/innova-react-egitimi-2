import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

const useSettingsStore = create(
  devtools(
    persist(
      (set) => ({
        theme: "light",
        toggleTheme: () =>
          set((state) => ({
            theme: state.theme === "dark" ? "light" : "dark",
          })),
      }),
      {
        name: "settings-storage",
        storage: createJSONStorage(() => sessionStorage),
      }
    ),
    {
      name: "SettingsStore",
    }
  )
);

export default useSettingsStore;
