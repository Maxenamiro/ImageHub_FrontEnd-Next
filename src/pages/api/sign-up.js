import { signUp } from '@/services/api';
import { createRouter } from 'next-connect';

const router = createRouter();

router.post(async (req, res) => {
  const confirmToken = await signUp(req.body);

  if (confirmToken) return res.json({ confirmToken });

  res.status(403).end();
});

export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
});
