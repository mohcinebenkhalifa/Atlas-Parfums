import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.model';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'a-very-secret-key';

// 🔐 Get all users
router.get('/users', async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find().select('-password_hash');
    res.json(users);
  } catch (err: any) {
    res.status(500).json({ message: 'Erreur serveur', error: err.message });
  }
});

// 📝 Register
router.post('/register', async (req: Request, res: Response): Promise<void> => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: 'Email déjà utilisé' });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    const newUser = new User({ name, email, password_hash });
    const savedUser = await newUser.save();

    res.status(201).json({
      _id: savedUser._id,
      name: savedUser.name,
      email: savedUser.email,
      isAdmin: savedUser.isAdmin,
    });
  } catch (err: any) {
    res.status(500).json({ message: 'Erreur serveur', error: err.message });
  }
});

// 🔐 Login
router.post('/login', async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: 'Email ou mot de passe incorrect' });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      res.status(400).json({ message: 'Email ou mot de passe incorrect' });
      return;
    }

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    });
  } catch (err: any) {
    res.status(500).json({ message: 'Erreur serveur', error: err.message });
  }
});

export default router;
