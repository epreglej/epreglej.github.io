export const useLoginFormStore = defineStore("loginFormStore", {
  state: () => ({
    email: "",
    password: "",
    authenticationErrorMessage: "",
  }),
  actions: {
    setEmail(newEmail) {
      this.email = newEmail;
    },
    setPassword(newPassword) {
      this.password = newPassword;
    },
    setAuthenticationErrorMessage(errorMessage) {
      this.authenticationErrorMessage = errorMessage;
    },
  },
});
