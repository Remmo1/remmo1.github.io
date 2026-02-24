// augment the global Window interface so the theme toggle function doesn't trigger TS errors

declare global {
  interface Window {
    toggleTheme: () => void;
  }
}

export {};