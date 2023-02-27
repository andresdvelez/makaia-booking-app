import { AiFillCar } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { FaBed } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";
import { SiHotelsdotcom } from "react-icons/si";

export const Cards = [
  {
    id: 1,
    icon: <AiFillCar />,
    title: "Transporte",
    text: "Renta un auto o reserva un shuttle.",
  },
  {
    id: 2,
    icon: <SiHotelsdotcom />,
    title: "Vuelos + Hoteles",
    text: "Encuentra las mejores ofertas para tus viajes.",
  },
  {
    id: 3,
    icon: <HiUserGroup />,
    title: "Grupos",
    text: "Obtén una cotización para grupos de más de 9 personas.",
  },
  {
    id: 4,
    icon: <FaBed />,
    title: "Hoteles",
    text: "Reserva cualquier habitación en cualquier parte del mund.",
  },
  {
    id: 5,
    icon: <RiMailSendFill />,
    title: "Mensajeria",
    text: "Contamos con servicio de mensajería.",
  },
];
