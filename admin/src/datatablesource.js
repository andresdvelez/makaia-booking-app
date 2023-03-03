export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
            alt="avatar"
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 230,
  },

  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
];

export const destinationColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 100,
  },
  {
    field: "sale",
    headerName: "Sale",
    width: 100,
  },
  {
    field: "featured",
    headerName: "Featured",
    width: 100,
  },
];

export const flightColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "departureCity",
    headerName: "Departure City",
    width: 230,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
];
