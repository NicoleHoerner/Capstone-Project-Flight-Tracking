// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(request, response) {
  const apiKey = process.env.API_KEY;
  const apiResponse = await fetch(
    `http://api.aviationstack.com/v1/flights?access_key=${apiKey}`
  );

  const data = await apiResponse.json();
  response.status(200).json({ data: data });
}
