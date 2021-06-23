import offer from '../../data/offer.json'

export default function handler(req, res) {
  if (req.method === 'POST') {
    res.status(200).json(offer);
  } else {
    res.status(405).end();
  }
}
