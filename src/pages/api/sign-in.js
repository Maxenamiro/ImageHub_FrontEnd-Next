import { signIn } from '@/services/api';
import { createRouter } from 'next-connect';

const router = createRouter();

router.post(async (req, res) => {
  const token = await signIn(req.body);

  res.json({ token });
});

export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
});
