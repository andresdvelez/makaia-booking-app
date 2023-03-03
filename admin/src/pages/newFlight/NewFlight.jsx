import "./newFlight.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { flightInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { useEffect } from "react";

const NewFlight = () => {
  const [info, setInfo] = useState({});
  const [destinationId, setDestinationId] = useState(undefined);
  const [seats, setSeats] = useState([]);

  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/destinations"
  );

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    const seatNumbers = seats
      .split(",")
      .map((seat) => ({ number: seat, isHall: false, unavailableSeats: true }));

    console.log(seatNumbers);
    try {
      await axios.post(`http://localhost:8800/api/flights/${destinationId}`, {
        ...info,
        seats: seatNumbers,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Flight</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {flightInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <div className="formInput">
                <label>Seats</label>
                <textarea
                  id="seats"
                  onChange={(e) => setSeats(e.target.value)}
                  placeholder="Pon coma entre los numeros de asiento."
                />
              </div>
              <div className="formInput">
                <label>Choose a destination</label>
                <select
                  id="destinationId"
                  onChange={(e) => setDestinationId(e.target.value)}
                >
                  {loading
                    ? "loading..."
                    : data &&
                      data.map((destination) => (
                        <option key={destination._id} value={destination._id}>
                          {destination.name}
                        </option>
                      ))}
                </select>
              </div>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFlight;
