import React, { useContext } from "react";
import { Grid2, Card, CardContent, Typography } from "@mui/material";
import { Line, Bar } from "react-chartjs-2";
import { ShipmentContext } from "../context/ShipmentContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { DataGrid } from "@mui/x-data-grid";
import "./Dashboard.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const { shipments } = useContext(ShipmentContext);
  const totalShipments = shipments.length;
  const inTransit = shipments.filter((s) => s.status === "In Transit").length;
  const delivered = shipments.filter((s) => s.status === "Delivered").length;

  const chartDataLine = {
    labels: shipments.map((s) => s.shipmentNumber),
    datasets: [
      {
        label: "Shipments",
        data: shipments.map((s) => s.id),
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const chartDataBar = {
    labels: ["Total", "In Transit", "Delivered"],
    datasets: [
      {
        label: "Shipments Status",
        data: [totalShipments, inTransit, delivered],
        backgroundColor: ["#36A2EB", "#FF6384", "#4BC0C0"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Grid2 container spacing={3} className="dashboard-container">
      <Grid2 item xs={12} sm={6} md={6}>
        <Card className="dashboard-chart">
          <CardContent>
            <Typography variant="h6" className="dashboard-chart-title">
              Shipment Trend
            </Typography>
            <div className="chart-container">
              <Line data={chartDataLine} />
            </div>
          </CardContent>
        </Card>
      </Grid2>

      <Grid2 item xs={12} sm={6} md={6}>
        <Card className="dashboard-chart">
          <CardContent>
            <Typography variant="h6" className="dashboard-chart-title">
              Shipments Status
            </Typography>
            <div className="chart-container">
              <Bar data={chartDataBar} />
            </div>
          </CardContent>
        </Card>
      </Grid2>

      <Grid2 item xs={12} sm={6} md={4}>
        <Card className="dashboard-card">
          <CardContent>
            <Typography variant="h5" className="dashboard-card-title">
              Total Shipments
            </Typography>
            <Typography variant="h6" className="dashboard-card-count">
              {totalShipments}
            </Typography>
          </CardContent>
        </Card>
      </Grid2>

      <Grid2 item xs={12} sm={6} md={4}>
        <Card className="dashboard-card">
          <CardContent>
            <Typography variant="h5" className="dashboard-card-title">
              In Transit
            </Typography>
            <Typography variant="h6" className="dashboard-card-count">
              {inTransit}
            </Typography>
          </CardContent>
        </Card>
      </Grid2>

      <Grid2 item xs={12} sm={6} md={4}>
        <Card className="dashboard-card">
          <CardContent>
            <Typography variant="h5" className="dashboard-card-title">
              Delivered
            </Typography>
            <Typography variant="h6" className="dashboard-card-count">
              {delivered}
            </Typography>
          </CardContent>
        </Card>
      </Grid2>

      <Grid2 item xs={12}>
        <Card className="">
          <CardContent style={{ height: 400, width: "100%" }}>
            <Typography
              variant="h6"
              gutterBottom
              className="dashboard-grid-title"
            >
              Recent Shipments
            </Typography>
            <DataGrid
              rows={shipments}
              columns={[
                { field: "id", headerName: "ID", width: 70 },
                {
                  field: "shipmentNumber",
                  headerName: "Shipment Number",
                  width: 150,
                },
                {
                  field: "transportType",
                  headerName: "Transport Type",
                  width: 150,
                },
                { field: "POL", headerName: "POL", width: 120 },
                { field: "POD", headerName: "POD", width: 120 },
                { field: "status", headerName: "Status", width: 120 },
              ]}
              pageSize={5}
              className="dashboard-data-grid-content"
            />
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
};

export default Dashboard;
