declare global {
  interface Window {
    wordHints: WordHints;
  }
}

export type Difficulty = "easy" | "medium" | "hard";

export type GuessState = "pending" | "match" | "present" | "miss";

export type LetterGuess = {
  letter: string;
  state: GuessState;
};

export type Guess = LetterGuess[];

export type Hint = {
  /** to display to user */
  message: string;
  /** to highlight on the keyboard */
  letter?: string;
  /** letters that are definitely not in the target */
  misses?: string[];
};

export type KeyState = {
  /** most keys are letters but one is backspace, one is to submit a guess */
  type: "letter" | "back" | "enter";
  /** shown on the keyboard */
  label: string;
  /** keys start as "available" and update as user guesses (based on presence in the target word) */
  state: "available" | "match" | "present" | "miss" | "unavailable";
};

export type Knowledge = {
  matches: string[];
  presents: string[];
  misses: string[];
  availables: string[];
};

export type Settings = {
  difficulty: "easy" | "medium" | "hard";
  keyboardLayout: "atoz" | "qwerty";
  theme: "blue" | "high";
  case: "lowercase" | "uppercase";
  sharingEmojis: EmojiMatchThemeKey;
  spellChecker: "off" | "on";
};

export type EmojiMatchThemeKey =
  | "nature"
  | "fruit"
  | "vegetable"
  | "tree"
  | "circle"
  | "poop";

export type EmojiMatchThemeValue = {
  match: string;
  present: string;
  miss: string;
};

export type EmojiMatchThemes = {
  [key in EmojiMatchThemeKey]: EmojiMatchThemeValue;
};

export type DailyPuzzles = {
  easy: string;
  medium: string;
  hard: string;
};

export type HolidayPuzzles = {
  name: string;
  easy: string[];
  medium: string[];
  hard: string[];
};

export type WordHints = {
  [key: string]: {
    category?: string;
    emoji?: string;
    hints?: string[];
  };
};
