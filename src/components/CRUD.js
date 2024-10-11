import React, { useContext, useState } from "react";
import { ShipmentContext } from "../context/ShipmentContext";
import { DataGrid } from "@mui/x-data-grid";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Paper,
  DialogContentText,
} from "@mui/material";
import "./Crud.css";

const CRUD = () => {
  const { shipments, addShipment, updateShipment, deleteShipment } =
    useContext(ShipmentContext);

  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [currentShipment, setCurrentShipment] = useState(null);
  const [newShipment, setNewShipment] = useState({
    shipmentNumber: "",
    transportType: "",
    POL: "",
    POD: "",
    status: "",
  });
  const [deleteId, setDeleteId] = useState(null);

  const handleClickOpenEdit = (shipment) => {
    setCurrentShipment(shipment);
    setOpenEditDialog(true);
  };

  const handleCloseEdit = () => {
    setOpenEditDialog(false);
    setCurrentShipment(null);
  };

  const handleSave = () => {
    if (currentShipment) {
      updateShipment(currentShipment);
    }
    handleCloseEdit();
  };

  const handleOpenAddDialog = () => {
    setOpenAddDialog(true);
  };

  const handleCloseAddDialog = () => {
    setOpenAddDialog(false);
    setNewShipment({
      shipmentNumber: "",
      transportType: "",
      POL: "",
      POD: "",
      status: "",
    });
  };

  const handleAdd = () => {
    addShipment(newShipment);
    handleCloseAddDialog();
  };

  const handleOpenDeleteDialog = (id) => {
    setDeleteId(id);
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
    setDeleteId(null);
  };

  const handleDelete = () => {
    deleteShipment(deleteId);
    handleCloseDeleteDialog();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentShipment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNewChange = (e) => {
    const { name, value } = e.target;
    setNewShipment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "shipmentNumber", headerName: "Shipment Number", width: 150 },
    { field: "transportType", headerName: "Transport Type", width: 150 },
    { field: "POL", headerName: "POL", width: 120 },
    { field: "POD", headerName: "POD", width: 120 },
    { field: "status", headerName: "Status", width: 120 },
    {
      field: "actions",
      headerName: "Actions",
      width: 250,
      renderCell: (params) => (
        <div className="action-buttons">
          <Button
            color="primary"
            variant="contained"
            onClick={() => handleClickOpenEdit(params.row)}
            className="crud-button"
          >
            Edit
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => handleOpenDeleteDialog(params.id)}
            className="crud-button"
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="crud-container">
      <Paper className="crud-paper">
        <div className="crud-header">
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpenAddDialog}
            className="crud-add-button"
          >
            Add New Shipment
          </Button>
        </div>

        <DataGrid
          className="data-grid"
          rows={shipments}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
          paginationMode="client"
        />
      </Paper>

      <Dialog open={openEditDialog} onClose={handleCloseEdit}>
        <DialogTitle className="dialog-title">Edit Shipment</DialogTitle>
        <DialogContent className="dialog-content">
          {currentShipment && (
            <>
              <TextField
                autoFocus
                margin="dense"
                name="shipmentNumber"
                label="Shipment Number"
                type="text"
                fullWidth
                variant="outlined"
                value={currentShipment.shipmentNumber}
                onChange={handleChange}
                className="text-field"
              />
              <TextField
                margin="dense"
                name="transportType"
                label="Transport Type"
                type="text"
                fullWidth
                variant="outlined"
                value={currentShipment.transportType}
                onChange={handleChange}
                className="text-field"
              />
              <TextField
                margin="dense"
                name="POL"
                label="POL"
                type="text"
                fullWidth
                variant="outlined"
                value={currentShipment.POL}
                onChange={handleChange}
                className="text-field"
              />
              <TextField
                margin="dense"
                name="POD"
                label="POD"
                type="text"
                fullWidth
                variant="outlined"
                value={currentShipment.POD}
                onChange={handleChange}
                className="text-field"
              />
              <TextField
                margin="dense"
                name="status"
                label="Status"
                type="text"
                fullWidth
                variant="outlined"
                value={currentShipment.status}
                onChange={handleChange}
                className="text-field"
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openAddDialog} onClose={handleCloseAddDialog}>
        <DialogTitle className="dialog-title">Add New Shipment</DialogTitle>
        <DialogContent className="dialog-content">
          <TextField
            autoFocus
            margin="dense"
            name="shipmentNumber"
            label="Shipment Number"
            type="text"
            fullWidth
            variant="outlined"
            value={newShipment.shipmentNumber}
            onChange={handleNewChange}
            className="text-field"
          />
          <TextField
            margin="dense"
            name="transportType"
            label="Transport Type"
            type="text"
            fullWidth
            variant="outlined"
            value={newShipment.transportType}
            onChange={handleNewChange}
            className="text-field"
          />
          <TextField
            margin="dense"
            name="POL"
            label="POL"
            type="text"
            fullWidth
            variant="outlined"
            value={newShipment.POL}
            onChange={handleNewChange}
            className="text-field"
          />
          <TextField
            margin="dense"
            name="POD"
            label="POD"
            type="text"
            fullWidth
            variant="outlined"
            value={newShipment.POD}
            onChange={handleNewChange}
            className="text-field"
          />
          <TextField
            margin="dense"
            name="status"
            label="Status"
            type="text"
            fullWidth
            variant="outlined"
            value={newShipment.status}
            onChange={handleNewChange}
            className="text-field"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
        <DialogTitle>Delete Shipment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this shipment? This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color="primary">
            No
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Yes, Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CRUD;
