import Router from '../lib/router';

export const register: Router<void> = async (req, res) => {
  const { email, username, phone_number, password } = req.body;

  try {
    // TODO: Validate Data
    // TODO: Create User
    // TODO: Return User
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
};

export const login: Router<void> = async (req, res) => {
  const { username, password } = req.body;

  try {
    // TODO: Validate Data
    // TODO: Compare Information
    // TODO: Return User and Token
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
};
