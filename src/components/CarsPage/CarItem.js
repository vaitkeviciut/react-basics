const CarItem = ({ car, discount, allPrice, totalPrice, vat, finalPrice }) => {
  return (
    <div className='car-item'>
        <h2 className='car-name'>{car.brand} {`(${car.model})`}</h2>
        <img src={car.image} alt={`${car.brand} (${car.model})`} width='800' />
        <div className="car-form-prices-wrapper">
            <div className="car-form-price">
                <h3 className='student-form-price-title'>Car's info:</h3>
                <ul className="student-form-prices-list">
                    <li><span className="semibold">Color:</span> {car.color}</li>
                    <li><span className="semibold">Engine type:</span> {car.engine}</li>
                    <li><span className="semibold">Mileage:</span> {car.mileage} km</li>
                </ul>
            </div>
            <div className="car-form-price">
                <h3 className='student-form-price-title'>Price:</h3>
                <ul className="student-form-prices-list">
                    <li><span className="semibold">Base price:</span> {car.price.basePrice} €</li>
                    <li><span className="semibold">Engine price:</span> {car.price.enginePrice} €</li>
                    <li><span className="semibold">Color Price:</span> {car.price.colorPrice}€</li>
                    <li><span className='bold'>Price:</span> {allPrice()}€</li>
                </ul>
            </div>
            <div className="car-form-price">
                <h3 className='student-form-price-title'>Discounts:</h3>
                <ul className="student-form-prices-list">
                    <li><span className="semibold">Mileage:</span> -{car.price.mileageDiscount} €</li>
                    <li><span className="semibold">Manual Discount:</span> -{car.price.manualDiscount}€</li>
                    <li><span className='bold'>Total Discount:</span> -{discount()} €</li>
                </ul>
            </div>
        </div>
        <div className="car-form-price-total">
                <h3 className='student-form-price-title-total'>Total price:</h3>
                <ul className="student-form-prices-list-total">
                    <li><span className="semibold">Price:</span> {totalPrice()} €</li>
                    <li><span className="semibold">VAT:</span> {vat()} €</li>
                    <li className='bold blue-price'><span className='bold blue-price'>TOTAL PRICE:</span> {finalPrice()} €</li>
                </ul>
            </div>
            
    </div>
  )
}
export default CarItem