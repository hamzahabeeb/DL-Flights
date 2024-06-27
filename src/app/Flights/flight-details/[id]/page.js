import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'

export default function flightDetails({ params, searchParams }) {
  const flights = [
    {
      id: 1,
      name: "Air-India",
      flightNo: "8E4802",
      date: "Fri, 28 Jun",
      startTime: "14:05",
      city: "Mumbai",
      duration: "1h 10m",
      endTime: "15:15",
      cityEnd: "Delhi",
      price: "₹ 2,499",
      imgSrc:
        "https://images.ixigo.com/img/common-resources/airline-new/AI.png",
    },
    {
      id: 2,
      name: "Indigo",
      flightNo: "7C4502",
      date: "Fri, 28 Jun",
      startTime: "10:55",
      city: "Hyderbad",
      duration: "1h 5m",
      endTime: "12:00",
      cityEnd: "Bangalore",
      price: "₹ 1,999",
      imgSrc:
        "https://images.ixigo.com/img/common-resources/airline-new/6E.png",
    },
    {
      id: 3,
      name: "Alliance Air",
      flightNo: "6S2002",
      date: "Fri, 28 Jun",
      startTime: "11:35",
      city: "Chennai",
      duration: "2h 10m",
      endTime: "16:15",
      cityEnd: "Kolkata",
      price: "₹ 4,399",
      imgSrc: "https://www.ixigo.com/img/common-resources/airline-new/UK.png",
    },
    {
      id: 4,
      name: "Emirates",
      flightNo: "2V5781",
      date: "Fri, 28 Jun",
      startTime: "19:25",
      city: "Dubai",
      duration: "1h 30m",
      endTime: "14:15",
      cityEnd: "Jeddah",
      price: "₹ 2,799",
      imgSrc:
        "https://images.ixigo.com/img/common-resources/airline-new/6E.png",
    },
  ];
  const flightId = params.id;
  const filteredflight = flights.find((flight) => flight.id == flightId);
  console.log(filteredflight);
  return (
    <div className="flex justify-center m-10">
      <div className="container margin-auto my-5 py-4 w-4/12 rounded-md p-10 shadow-[0px_0px_10px_0px_#4a5568]">
        <div>
          <div className="flex gap-15 flex-col">
            <div className="flex justify-between items-center py-2">
              <h5 className="text-2xl font-bold text-gray-800">Fare Summary</h5>
              <p className="text-sm text-neutral-500">1 Traveller</p>
            </div>
            <div className="flex justify-between items-center py-2">
              <p className="text-gray-800 font-medium	">Fare Type</p>
              <p className="text-green-700	font-medium	">Partially Refundable</p>
            </div>
            <div className="flex justify-between items-center py-2">
              <p className="text-gray-800 font-medium	">Base Fare</p>
              <p className="font-medium	">$1420</p>
            </div>
            <div className="flex justify-between items-center py-2">
              <p className="text-gray-800 font-medium	">Taxes and Fees</p>
              <p className="font-medium	">$0</p>
            </div>
            <hr />
            <div className="flex justify-between items-center py-2">
              <h5 className="text-2xl font-bold text-gray-800">Total Amount</h5>
              <p className="text-xl font-bold">{filteredflight.price}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pl-10 w-8/12">
        <div className="container margin-auto my-5 py-4 rounded-md shadow-[0px_0px_10px_0px_#4a5568]">
          <div className="flex items-center pt-1 px-10">  
            <h5 className="text-xl font-bold text-gray-800 pr-1">{filteredflight.city}</h5>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
            <h5 className="text-xl font-bold text-gray-800 pl-1">{filteredflight.cityEnd}</h5>
          </div>
          <div className='flex items-center px-10'>
            <span className='text-sm font-medium'>{filteredflight.date} • Non-stop • {filteredflight.duration} • Economy</span>
          </div>
          <div className="flex justify-start px-10 pt-2">
                <div>
                  <img className="pt-1 size-10" src={filteredflight.imgSrc}/>
                </div>
                <div className="flex items-center">
                    <div className="font-medium text-sm ">{filteredflight.name}</div>
                    <div className="font-medium text-sm px-1 text-neutral-500">|</div>
                    <div className="font-medium text-sm text-neutral-500 pr-5">{filteredflight.flightNo}</div>
                    <div className="border border-solid rounded-full border-green-400 bg-green-50">
                      <div className="flex p-1">
                      <FontAwesomeIcon icon={faClock}/>
                      <p className='text-xs px-[3px] text-green-800 font-medium'>
                        <span>
                        <span className='font-700'>97%</span>
                        &nbsp; On-Time
                        </span>
                      </p>
                      </div>
                    </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
}
