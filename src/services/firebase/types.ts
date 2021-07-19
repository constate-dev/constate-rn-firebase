export interface handleEmailSignUpTypes {
  email: string;
  password: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<number>>;
}

export interface handleForgotPasswordTypes {
  email: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<number>>;
}
