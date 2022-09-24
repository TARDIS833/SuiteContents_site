import create from 'zustand'
import { devtools } from 'zustand/middleware'
interface TestState {
  isDark: boolean
  toggleIsDark: () => void
}

export const useStore = create<TestState>()(
  devtools((set) => ({
    isDark: false,
    toggleIsDark: () => set((state) => ({ isDark: !state.isDark })),
  })),
)
