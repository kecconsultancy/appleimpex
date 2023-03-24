import HeaderSection from "./components/HeaderSection";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { CustomerForm, EditCustomer } from "./components/CustomerForm";
import { AddFabric, FabricForm } from "./components/FabricForm";
import { AssingRing, RingForm } from "./components/RingForm";
import { AssignTailor, TailorFrom } from "./components/TailorFrom";
import FormContainer from "./screen/FormContainer";
import TableContainer from "./screen/TableContainer";
import Dashboard from "./screen/Dashboard";
import { EditOrder, OrderForm } from "./components/OrderForm";
import { AssignParsel, ParcelForm } from "./components/ParcelForm";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/table" element={<TableContainer></TableContainer>} />
        <Route path="/" element={<FormContainer />}>
          <Route path="createfabric" element={<FabricForm />} />
          <Route path="createcustomer" element={<CustomerForm />} />
          <Route path="createorder" element={<OrderForm />} />
          <Route path="createtailor" element={<TailorFrom />} />
          <Route path="createring" element={<RingForm />} />
          <Route path="createparcel" element={<ParcelForm />} />
        </Route>
        <Route path="/" element={<FormContainer />}>
          <Route path="addfabric" element={<AddFabric />} />
          <Route path="editcustomer" element={<EditCustomer />} />
          <Route path="editorder" element={<EditOrder />} />
          <Route path="assigntailor" element={<AssignTailor />} />
          <Route path="assignringer" element={<AssingRing />} />
          <Route path="assignparceler" element={<AssignParsel />} />
        </Route>
        <Route path="/" element={<FormContainer />}>
          <Route path="fabriclist" element={<AddFabric />} />
          {/* <Route path="customerlist" element={<EditCustomer />} /> */}
          <Route path="orderlist" element={<EditOrder />} />
          <Route path="tailorlist" element={<AssignTailor />} />
          <Route path="ringerlist" element={<AssingRing />} />
          <Route path="parcelerlist" element={<AssignParsel />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
