import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import { produce } from "immer";

const useChatStore = create(
  devtools(
    persist(
      (set) => ({
        messages: [],
        onlineCount: null,
        // addMessage: ({ message, is_from_me = false }) =>
        //   set((state) => ({
        //     messages: [
        //       ...state.messages,
        //       { id: uuidv4(), message, is_from_me },
        //     ],
        //   })),
        addMessage: ({ message, is_from_me = false }) =>
          set(
            produce((state) => {
              state.messages.push({ id: uuidv4(), message, is_from_me });
            })
          ),

        setOnlineCount: (onlineCount) => set({ onlineCount }),
      }),
      {
        name: "messsage-storage",
        storage: createJSONStorage(() => sessionStorage),
      }
    ),
    {
      name: "ChatStore",
    }
  )
);

export default useChatStore;
