const CarItem = ({ car, discount, allPrice, totalPrice, vat, finalPrice }) => {
  return (
    <div className='car-item'>
        <h2 className='car-name'>{car.brand} {`(${car.model})`}</h2>
        <img src={car.image} alt={`${car.brand} (${car.model})`} />

        <h3>Car's info:</h3>
        <ul>
            <li>Color: {car.color}</li>
            <li>Engine type: {car.engine}</li>
            <li>Mileage: {car.mileage} km</li>
        </ul>

        <h3>Price:</h3>
        <ul>
            <li>Base price: {car.price.basePrice} €</li>
            <li>Engine price: {car.price.enginePrice} €</li>
            <li>Color Price: {car.price.colorPrice}€</li>
            <li><span className='bold'>Price:</span> {allPrice()}€</li>
        </ul>

        <h3>Discounts:</h3>
        <ul>
            <li>Mileage: -{car.price.mileageDiscount}€</li>
            <li>Manual Discount: -{car.price.manualDiscount}€</li>
            <li><span className='bold'>Total Discount:</span> -{discount()}€</li>
        </ul>

        <h3>Total price:</h3>
        <ul>
            <li>Price: {totalPrice()}€</li>
            <li>VAT: {vat()}€</li>
            <li><span className='bold'>Total Price:</span>{finalPrice()}€ VAT included</li>
        </ul>
    </div>
  )
}
export default CarItem