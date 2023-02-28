import { Outlet } from "react-router-dom";
import ReservationDetails from "../../components/ReservationDetails/ReservationDetails";
import { ContainerSC } from "./style";

function Flights() {
  return (
    <ContainerSC>
      <Outlet />
      <ReservationDetails />
    </ContainerSC>
  );
}

export default Flights;
