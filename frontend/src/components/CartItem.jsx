function CartItem({
  item,
  onRemove,
}) {

  return (
    <tr>

      <td>
        {item.medicineName}
      </td>

      <td>
        {item.quantity}
      </td>

      <td>
        ₹{item.totalPrice}
      </td>

      <td>

        <button
          className="btn btn-danger btn-sm"
          onClick={() =>
            onRemove(item.id)
          }
        >
          Remove
        </button>

      </td>

    </tr>
  );
}

export default CartItem;