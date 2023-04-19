import React, { useState, useEffect } from "react";
import { Table, Button } from "@mantine/core";
import axios from "axios";
import AddClientForm from "./ProfilsArray";
import EditClientForm from "./ProfilsArray";

const ProfilsTable = () => {
  const [clients, setClients] = useState([]);
  const [showAddClientForm, setShowAddClientForm] = useState(false);
  const [showEditClientForm, setShowEditClientForm] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  
  useEffect(() => {
    axios
      .get("https://localhost:7265/api/User/users")
      .then((response) => setClients(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleAddClient = (newClient) => {
    axios
      .post("/api/User/users", newClient)
      .then((response) => {
        setClients([...clients, response.data]);
        setShowAddClientForm(false);
      })
      .catch((error) => console.log(error));
  };

  const handleEditClient = (client) => {
    setSelectedClient(client);
    setShowEditClientForm(true);
  };

  const handleUpdateClient = (id, updatedClient) => {
    axios
      .put(`/api/User/users/${id}`, updatedClient)
      .then((response) =>
        setClients(
          clients.map((client) => (client.client_id === id ? response.data : client))
        )
      )
      .catch((error) => console.log(error));
  };

  const handleDeleteClient = (id) => {
    axios
      .delete(`/api/User/users/${id}`)
      .then((response) =>
        setClients(clients.filter((client) => client.client_id !== id))
      )
      .catch((error) => console.log(error));
  };

  return (
    <div><Button
    variant="outline"
    color="blue"
    onClick={() => setShowAddClientForm(true)}
    style={{ marginBottom: "20px" }}
  >
    Add New Client
  </Button>
  {showAddClientForm && (
    <AddClientForm handleAddClient={handleAddClient} setShowAddClientForm={setShowAddClientForm} />
  )}
  {showEditClientForm && (
    <EditClientForm
      client={selectedClient}
      handleUpdateClient={handleUpdateClient}
      setShowEditClientForm={setShowEditClientForm}
    />
  )}
  <Table
    data={clients}
    columns={[
      { title: "ID", dataKey: "client_id" },
      { title: "Name", dataKey: "client_name" },
      { title: "Email", dataKey: "client_email" },
      { title: "Phone", dataKey: "client_phone" },
      {
        title: "Actions",
        align: "center",
        render: (row) => (
          <>
            <Button variant="outline" color="blue" onClick={() => handleEditClient(row)}>
              Edit
            </Button>
            <Button variant="outline" color="red" onClick={() => handleDeleteClient(row.client_id)}>
              Delete
            </Button>
          </>
        ),
      },
    ]}
  />
  </div>
);
  }
export default ProfilsTable; 
