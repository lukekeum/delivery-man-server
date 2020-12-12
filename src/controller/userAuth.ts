import { getRepository } from 'typeorm';
import User from '../entities/User';
import UserProfile from '../entities/UserProfile';
import Router from '../lib/router';

interface IRegisterInput {
  email: string;
  username: string;
  phone_number: string;
  password: string;
}

export const register: Router<void> = async (req, res) => {
  const { email, username, phone_number, password }: IRegisterInput = req.body;

  try {
    const errors: any = {};
    const userRepo = await getRepository(User);
    const userProfileRepo = await getRepository(UserProfile);

    // Validate Data
    const emailUser = await userRepo.findOne({ email });
    const usernameUser = await userRepo.findOne({ username });
    const phoneUser = await userRepo.findOne({ phone_number });

    if (emailUser) errors.email = 'Email is already taken';
    if (usernameUser) errors.username = 'Username is already taken';
    if (phoneUser) errors.phone_number = 'Phonenumber is already taken';

    // Create User
    if (Object.keys(errors).length > 0) return res.status(400).json({ errors });

    const user = new User({ email, username, phone_number, password });
    const userProfile = new UserProfile({
      display_name: username,
      user_id: user.id,
    });

    await userRepo.save(user);
    await userProfileRepo.save(userProfile);

    // Return User
    return res.json(user);
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
