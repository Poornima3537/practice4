import { toast } from "react-toastify";

function MedicineCard({
  medicine,
  onAddToCart,
}) {

  const handleAddToCart = () => {

    onAddToCart(medicine);

    toast.success(
      "Medicine Added To Cart"
    );
  };

  return (
    <div className="col-md-4 mb-4">

      <div className="card h-100 shadow border-0">

        <div className="card-body d-flex flex-column">

          <h4 className="card-title mb-3">
            {medicine.name}
          </h4>

          <p className="mb-2">

            <strong>
              Category:
            </strong>

            {" "}
            {medicine.category}

          </p>

          <p className="mb-2">

            <strong>
              Price:
            </strong>

            {" "}
            ₹{medicine.price}

          </p>

          <p className="mb-4">

            <strong>
              Stock:
            </strong>

            {" "}
            {medicine.stock}

          </p>

          <button
            className="btn btn-primary mt-auto"
            onClick={handleAddToCart}
            disabled={medicine.stock <= 0}
          >

            {medicine.stock > 0
              ? "Add To Cart"
              : "Out Of Stock"}

          </button>

        </div>

      </div>

    </div>
  );
}

export default MedicineCard;