
export let loginConstraints = {
  email: {
    presence: true,
    email: true
  },
  password: {
    presence: true,
    length: { minimum: 8 }
  }
}

export let signUpConstraints = {
  name: {
    presence: true,
    format: {
      pattern: "[a-zA-Z]+",
      flags: "i",
      message: "can only contain a-z letters"
    }
  },
  lastName: {
    presence: true,
    format: {
      pattern: "[a-zA-Z]+",
      flags: "i",
      message: "can only contain a-z letters"
    }
  },
  email: {
    presence: true,
    email: true
  },
  password: {
    presence: true,
    length: { minimum: 8 }
  },
  passwordConfirmation: {
    presence: true,
    equality: 'password'
  }
};