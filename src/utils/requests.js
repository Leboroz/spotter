const URL = 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/';
const NEAR_BY_AIRPORTS = 'getNearByAirports';
const SEARCH_FLIGHTS = 'searchFlights';

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '2de74acabbmsh0cac0b667fc5523p11d435jsn8e3af9ca0bdf',
    'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
  }
};

export async function getNearbyAirports(setAirports, setError, setLoading) {
  return new Promise(async (resolve, reject) => {
    if (typeof navigator !== 'undefined' && navigator.geolocation) {
      setLoading(true);
      try {
        await new Promise((geolocationResolve, geolocationReject) => {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;

              try {
                const response = await fetch(`${URL + NEAR_BY_AIRPORTS}?lat=${latitude}&lng=${longitude}`, options);
                if (!response.ok) {
                  const errorData = await response.json();
                  reject(`API Error: ${response.status} - ${errorData?.message || 'Something went wrong'}`);
                  setLoading(false);
                  return;
                }
                const result = await response.json();
                setAirports(result);
                setLoading(false);
                resolve(result); // Resolve with the API result
                geolocationResolve();
              } catch (apiError) {
                console.error("Error fetching nearby airports:", apiError);
                setError("Failed to fetch nearby airports.");
                setLoading(false);
                reject(apiError);
                geolocationReject(apiError);
              }
            },
            (geolocationError) => {
              let errorMessage;
              switch (geolocationError.code) {
                case geolocationError.PERMISSION_DENIED:
                  errorMessage = "User denied location access.";
                  break;
                case geolocationError.POSITION_UNAVAILABLE:
                  errorMessage = "Location information unavailable.";
                  break;
                case geolocationError.TIMEOUT:
                  errorMessage = "Location request timed out.";
                  break;
                default:
                  errorMessage = "An error occurred while getting your location.";
              }
              console.error("Geolocation error:", errorMessage);
              setError(errorMessage);
              setLoading(false);
              reject(new Error(errorMessage)); // Reject with geolocation error
              geolocationReject(new Error(errorMessage));
            }
          );
        });
      } catch (err) {
        console.error("An unexpected error occurred:", err);
        setError(err.message || "Something went wrong.");
        setLoading(false);
        reject(err); // Reject the outer promise for unexpected errors
      }
    } else {
      console.log("Geolocation is not supported in this environment.");
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
      reject("Geolocation not supported");
    }
  });
}


//? originSkyId = LOND & destinationSkyId=NYCA & originEntityId=27544008 & destinationEntityId=27537542 & cabinClass=economy & adults=1 & sortBy=best & currency=USD & market=en - US & countryCode=US';
export async function searchFlight(
  originSkyId,
  destinationSkyId,
  originEntityId,
  destinationEntityId,
  cabinClass = economy,
  adults = 1,
  sortBy = "best",
  currency = "USD",
  market = 'en-US',
  countryCode = 'US'
) {
  const queryParams = new URLSearchParams({
    originSkyId,
    destinationSkyId,
    originEntityId,
    destinationEntityId,
    cabinClass,
    adults,
    sortBy,
    currency,
    market,
    countryCode
  });

  try {
    const response = await fetch(URL + SEARCH_FLIGHTS + '?' + URLSearchParams.toString(), options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
