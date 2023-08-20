// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(request, response) {
  const apiResponse = await fetch(
    "http://api.aviationstack.com/v1/flights?access_key=f329489ecd31b6e7c6c07b3260005c6a"
  );

  const data = await apiResponse.json();
  response.status(200).json({ data: data });
}
