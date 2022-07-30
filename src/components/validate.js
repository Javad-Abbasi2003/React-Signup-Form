export const validate = (data) => {
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  const errors = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    policy: "",
  };

  if (!data.name.trim()) {
    errors.name = "Enter your name";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name should be at least 2 characters";
  } else {
    delete errors.name;
  }

  if (!data.email) {
    errors.email = "Please enter an email address";
  } else if (!emailRegex.test(data.email)) {
    errors.email = "email not valid";
  } else {
    delete errors.email;
  }

  if (!data.password.trim()) {
    errors.password = "Please enter a password";
  } else if (data.password.length < 6) {
    errors.password = "password must be at least 6 characters";
  } else {
    delete errors.password;
  }

  if (!data.confirmPassword.trim()) {
    errors.confirmPassword = "Please confirm your password";
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = "Passwords do not match";
  } else {
    delete errors.confirmPassword;
  }

  if (!data.policy) {
    errors.policy = "Please accept our terms";
  } else {
    delete errors.policy;
  }

  return errors;
};
