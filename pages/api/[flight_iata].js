const apiKey = process.env.API_KEY;

export default async function handler(request, response) {
  const { flight_iata } = request.query;
  const apiResponse = await fetch(
    `http://api.aviationstack.com/v1/flights?access_key=${apiKey}&flight_iata=${flight_iata}`
  );

  const data = await apiResponse.json();
  response.status(200).json(data);
}
