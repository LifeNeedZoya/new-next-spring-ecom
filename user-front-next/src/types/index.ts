interface IDropdown {
  isOpen: boolean;
  toggleDropDown: () => void;
}

interface ISignupForm {
  name: string;
  email: string;
  password: string;
}

export type { IDropdown, ISignupForm };
