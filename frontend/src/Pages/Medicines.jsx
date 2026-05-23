import { useEffect, useState } from "react";

import MedicineCard from "../components/MedicineCard";
import Loader from "../components/Loader";

import medicineService from "../services/medicineService";
import cartService from "../services/cartService";

import { toast } from "react-toastify";

function Medicines() {

  const [medicines, setMedicines] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchMedicines();

  }, []);

  const fetchMedicines = async () => {

    try {

      const response =
        await medicineService.getAllMedicines();

      setMedicines(response.data);

    } catch (error) {

      toast.error(
        "Failed To Fetch Medicines"
      );

    } finally {

      setLoading(false);
    }
  };

  const handleAddToCart = async (
    medicine
  ) => {

    const cartData = {
      medicineName: medicine.name,
      quantity: 1,
      totalPrice: medicine.price,
    };

    try {

      await cartService.addToCart(
        cartData
      );

      toast.success(
        "Medicine Added To Cart"
      );

    } catch (error) {

      toast.error(
        "Failed To Add To Cart"
      );
    }
  };

  if (loading) {

    return <Loader />;
  }

  return (
    <div className="container mt-4">

      <h2 className="mb-4 text-center">
        Available Medicines
      </h2>

      <div className="row">

        {medicines.map((medicine) => (

          <MedicineCard
            key={medicine.id}
            medicine={medicine}
            onAddToCart={handleAddToCart}
          />

        ))}

      </div>

    </div>
  );
}

export default Medicines;