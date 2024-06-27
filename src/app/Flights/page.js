import Link from "next/link";

export default function Flights() {
  const flights = [
    {
      id: 1,
      name: "Air-India",
      flightNo:"8E4802",
      startTime: "14:05",
      city: "BOM",
      duration: "1h 10m",
      endTime: "15:15",
      cityEnd: "DEL",
      price: "₹ 2,499",
      imgSrc:
        "https://images.ixigo.com/img/common-resources/airline-new/AI.png",
    },
    {
      id: 2,
      name: "Indigo",
      flightNo:"7C4502",
      startTime: "10:55",
      city: "HYD",
      duration: "1h 5m",
      endTime: "12:00",
      cityEnd: "BAN",
      price: "₹ 1,999",
      imgSrc:
        "https://images.ixigo.com/img/common-resources/airline-new/6E.png",
    },
    {
      id: 3,
      name: "Alliance Air",
      flightNo:"6S2002",
      startTime: "11:35",
      city: "CHN",
      duration: "2h 10m",
      endTime: "16:15",
      cityEnd: "KOL",
      price: "₹ 4,399",
      imgSrc:
        "https://www.ixigo.com/img/common-resources/airline-new/UK.png",
    },
    {
      id: 4,
      name: "Emirates",
      flightNo:"2V5781",
      startTime: "19:25",
      city: "DXB",
      duration: "1h 30m",
      endTime: "14:15",
      cityEnd: "JED",
      price: "₹ 2,799",
      imgSrc:
        "https://images.ixigo.com/img/common-resources/airline-new/6E.png",
    },
  ];
  return (
    <div className="flex justify-center">
      <div className="w-full px-60">
        {flights.map((flight, index) => (
          <div className="container margin-auto my-5 py-4 rounded-md shadow-[0px_0px_10px_0px_#4a5568]">
          <div className="flex">
            <div className="w-full md:w-3/12">
              <div className="flex justify-center">
                <div className="w-full md:w-1/5">
                  <img className="pt-1" src={flight.imgSrc}/>
                </div>
                <div className="w-full md:w-2/5">
                  <p className="font-medium text-lg	"><Link href={`/Flights/flight-details/${flight.id}/${flight.name}`}>{flight.name}</Link></p>
                  <p className="text-sm">{flight.flightNo}</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12">
              <div className="flex justify-center">
                <div className="w-full md:w-2/6">
                  <h2 className="font-medium text-2xl text-center">{flight.startTime}</h2>
                  <p className="text-center text-gray-500">{flight.city}</p>
                </div>
                <div className="w-full md:w-1/6 px-3">
                  <p className="font-medium text-sm text-gray-500">{flight.duration}</p>
                  <div className="flex items-center">
                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>

                    <div className="w-11 h-0.5 bg-gray-500"></div>

                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                  </div>
                  <p className="text-xs text-gray-500">Non-Stop</p>
                </div>
                <div className="w-full md:w-2/6">
                  <h2 className="font-medium text-2xl text-center">{flight.endTime}</h2>
                  <p className="text-center text-gray-500">{flight.cityEnd}</p>
                  
                </div>
              </div>
            </div>
            <div className="w-full md:w-3/12 flex">
              <h3 className="text-2xl font-bold py-2">{flights[0].price}</h3>
                <button className="bg-orange-600 rounded-lg ml-2 text-white w-20 text-center text-lg items-center py-3 hover:bg-orange-500">Book</button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
