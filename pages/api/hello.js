// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const response = await fetch(
    "http://api.aviationstack.com/v1/flights?access_key=eef146cc9441c581c88b1ba9363a5d4b"
  );

  const data = await response.json();
  res.status(200).json({ data: data });
}
