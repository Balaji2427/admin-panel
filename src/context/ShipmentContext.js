import React, { createContext, useState } from "react";

export const ShipmentContext = createContext();

export const ShipmentProvider = ({ children }) => {
  const [shipments, setShipments] = useState([
    {
      id: 1,
      shipmentNumber: "SHP001",
      transportType: "Air",
      POL: "Los Angeles",
      POD: "Tokyo",
      status: "In Transit",
    },
    {
      id: 2,
      shipmentNumber: "SHP002",
      transportType: "Sea",
      POL: "New York",
      POD: "London",
      status: "Delivered",
    },
    {
      id: 3,
      shipmentNumber: "SHP003",
      transportType: "Land",
      POL: "Chicago",
      POD: "Miami",
      status: "Pending",
    },
    {
      id: 4,
      shipmentNumber: "SHP004",
      transportType: "Air",
      POL: "San Francisco",
      POD: "Paris",
      status: "In Transit",
    },
    {
      id: 5,
      shipmentNumber: "SHP005",
      transportType: "Sea",
      POL: "Seattle",
      POD: "Tokyo",
      status: "In Transit",
    },
    {
      id: 6,
      shipmentNumber: "SHP006",
      transportType: "Land",
      POL: "Dallas",
      POD: "Austin",
      status: "Pending",
    },
    {
      id: 7,
      shipmentNumber: "SHP007",
      transportType: "Air",
      POL: "Houston",
      POD: "Berlin",
      status: "Delivered",
    },
    {
      id: 8,
      shipmentNumber: "SHP008",
      transportType: "Sea",
      POL: "Miami",
      POD: "Dubai",
      status: "In Transit",
    },
    {
      id: 9,
      shipmentNumber: "SHP009",
      transportType: "Land",
      POL: "Atlanta",
      POD: "Toronto",
      status: "Pending",
    },
    {
      id: 10,
      shipmentNumber: "SHP010",
      transportType: "Air",
      POL: "Boston",
      POD: "Singapore",
      status: "In Transit",
    },
    {
      id: 11,
      shipmentNumber: "SHP011",
      transportType: "Sea",
      POL: "Philadelphia",
      POD: "Hong Kong",
      status: "Delivered",
    },
    {
      id: 12,
      shipmentNumber: "SHP012",
      transportType: "Land",
      POL: "Phoenix",
      POD: "San Diego",
      status: "Pending",
    },
    {
      id: 13,
      shipmentNumber: "SHP013",
      transportType: "Air",
      POL: "Las Vegas",
      POD: "Amsterdam",
      status: "In Transit",
    },
    {
      id: 14,
      shipmentNumber: "SHP014",
      transportType: "Sea",
      POL: "Orlando",
      POD: "Rio de Janeiro",
      status: "In Transit",
    },
    {
      id: 15,
      shipmentNumber: "SHP015",
      transportType: "Land",
      POL: "Seattle",
      POD: "Montreal",
      status: "Pending",
    },
    {
      id: 16,
      shipmentNumber: "SHP016",
      transportType: "Air",
      POL: "Washington D.C.",
      POD: "Sydney",
      status: "Delivered",
    },
    {
      id: 17,
      shipmentNumber: "SHP017",
      transportType: "Sea",
      POL: "Baltimore",
      POD: "Cairo",
      status: "In Transit",
    },
    {
      id: 18,
      shipmentNumber: "SHP018",
      transportType: "Land",
      POL: "Detroit",
      POD: "Moscow",
      status: "Pending",
    },
    {
      id: 19,
      shipmentNumber: "SHP019",
      transportType: "Air",
      POL: "Indianapolis",
      POD: "Bangkok",
      status: "In Transit",
    },
    {
      id: 20,
      shipmentNumber: "SHP020",
      transportType: "Sea",
      POL: "Charlotte",
      POD: "Cape Town",
      status: "Delivered",
    },
  ]);

  const addShipment = (newShipment) => {
    setShipments([...shipments, { id: shipments.length + 1, ...newShipment }]);
  };

const updateShipment = (updatedShipment) => {
  setShipments((prevShipments) =>
    prevShipments.map((shipment) =>
      shipment.id === updatedShipment.id ? updatedShipment : shipment
    )
  );
};

  const deleteShipment = (id) => {
    setShipments(shipments.filter((s) => s.id !== id));
  };

  return (
    <ShipmentContext.Provider
      value={{ shipments, addShipment, updateShipment, deleteShipment }}
    >
      {children}
    </ShipmentContext.Provider>
  );
};
