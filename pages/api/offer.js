import offer from '../../data/offer.json'

export default function handler(req, res) {
  res.status(200).json(offer);
}
