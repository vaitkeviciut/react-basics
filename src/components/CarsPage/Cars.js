import { useState } from 'react';
import './Cars.css';

function Cars() {
    const engineTypes = ['electric', 'diesel', 'petrol', 'hybrid']
    const colors = ['black', 'red', 'blue', 'silver', 'white', 'special blue', 'other']

    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [engine, setEngine] = useState(engineTypes[0]);
    const [basePrice, setBasePrice] = useState(1000);
    const [mileage, setMileage] = useState(0);
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [color, setColor] = useState(colors[0]);
    const [image, setImage] = useState('');
    const [discount, setDiscount] = useState(0);

    const [car, setCar] = useState(null);
    
    const optionElements = (data) => {
        const elements = data.map((item, index) => {
            const optionText = item[0].toUpperCase() + item.slice(1);

            return <option value={item} key={index}>{optionText}</option>
        })
        return elements
    };


    const getEnginePrice = () => {
        if (engine === 'electric') {
          return 10000;
        }
        if (engine === 'hybrid') {
          return 7500;
        }
        if (engine === 'diesel') {
          return 5000;
        }
    return 0;
    }

    const getColorPrice = () => {
        if (color === 'special blue') {
          return 500;
        }
        if (selectedColor === 'other') {
          return 3000;
        }
    return 0; 
    }

    const getMileageDiscount = () => {
        if (mileage > 400000) {
          return basePrice * 0.5;
        }
        if (mileage > 100000) {
          return basePrice * 0.3;
        }
        if (mileage > 50000) {
          return basePrice * 0.2;
        }
        if (mileage > 20000) {
          return basePrice * 0.15;
        }
        if (mileage > 0) {
          return basePrice * 0.1;
        }
    return 0;
    }

    const getManualDiscount = () => {
        return basePrice / 100 * discount;
    }
    
    const getAllPrice = () => basePrice + getEnginePrice() + getColorPrice();
    const getAllDiscount = () => getMileageDiscount() + getManualDiscount();
    const getTotalPrice = () => getAllPrice() - getAllDiscount();
    const getVAT = () => getTotalPrice() * 0.21;
    const getFinalPrice = () => getTotalPrice() + getVAT();


    const formSubmitHandler = (event) => {
        event.preventDefault();

        setCar({ 
            brand,
            model,
            color,
            image,
            engine,
            mileage,
            discount,
            price: {
                basePrice,
                enginePrice: getEnginePrice(),
                colorPrice: getColorPrice(),
                mileageDiscount: getMileageDiscount(),
                manualDiscount: getManualDiscount(),
                vat: getVAT(),
                finalPrice: getFinalPrice(),
            }
        });
    }

    const brandInputHandler = event => setBrand(event.target.value);
    const modelInputHandler = event => setModel(event.target.value);
    const engineInputHandler = event => setEngine(event.target.value);
    const basePriceHandler = event => setBasePrice(Number(event.target.value));
    const mileageInputHandler = event => setMileage(Number(event.target.value));

    const colorInputHandler = event => {
        setSelectedColor(event.target.value);

        if (event.target.value !=='other') {
            setColor(event.target.value);
        }
    };

    const colorHandler = event => setColor(event.target.value);
    const imageInputHandler = event => setImage(event.target.value);
    const discountHandler = event => setDiscount(Number(event.target.value));

    return (
        <div>
            <h1>Choose your car</h1>
            <form className="cars-form" onSubmit={formSubmitHandler}>
                <div className="form-wrapper">
                    <div className="form-control">
                        <label className="cars-label" htmlFor="car-brand">Brand:</label>
                        <input className='cars-input'
                        type="text"
                        id="car-brand"
                        name="brand"
                        placeholder="Enter a brand"
                        value={brand}
                        onChange={brandInputHandler}
                        />
                    </div>
                    <div className="form-control">
                        <label className="cars-label" htmlFor="car-model">Model:</label>
                        <input className='cars-input'
                        type="text"
                        id="car-model"
                        name="model"
                        placeholder="Enter a model"
                        value={model}
                        onChange={modelInputHandler}
                        />
                    </div>

                    {engineTypes && engineTypes.length > 0 && (
                        <div className="form-control">
                            <label className="cars-label" htmlFor="car-engine">Engine type:</label>
                            <select className='cars-input'
                                id="car-engine"
                                name="engine"
                                value={engine}
                                onChange={engineInputHandler}>

                                {optionElements(engineTypes)}

                            </select>
                        </div>
                    )}
                    
                    <div className="form-control">
                        <label className="cars-label" htmlFor="car-price">Price:</label>
                        <input className='cars-input'
                        type="number"
                        id="car-price"
                        name="price"
                        placeholder="Enter price"
                        min="100"
                        step="50"
                        value={basePrice}
                        onChange={basePriceHandler}
                        />
                    </div>
                    <div className="form-control">
                        <label className="cars-label" htmlFor="car-mileage">Mileage:</label>
                        <input className='cars-input'
                        type="number"
                        id="car-mileage"
                        name="mileage"
                        placeholder="Enter mileage"
                        min="0"
                        step="500"
                        value={mileage}
                        onChange={mileageInputHandler}
                        />
                    </div>

                    {colors && colors.length > 0 && (
                        <div className="form-control">
                            <label className="cars-label" htmlFor="car-color">Color:</label>
                            <select className='cars-input'
                                id="car-color"
                                name="color"
                                value={selectedColor}
                                onChange={colorInputHandler}>

                                {optionElements(colors)}

                            </select>
                        </div>
                    )}
                    

                    {selectedColor === 'other' && (
                        <div className="form-control">
                        <label className="cars-label" htmlFor='other-car-color'>Other color:</label>
                        <input className='cars-input'
                            type="text" 
                            id="other-car-color" 
                            name="other-color" 
                            placeholder="Enter a color" 
                            nChange={colorHandler}
                            />
                    </div>
                    )}

                    <div className="form-control">
                        <label className="cars-label" htmlFor="car-image">Image:</label>
                        <input className='cars-input'
                        type="url"
                        id="car-image"
                        name="image"
                        placeholder="Enter image url"
                        value={image}
                        onChange={imageInputHandler}
                        />
                    </div>

                    <div className="form-control">
                        <label className="cars-label" htmlFor="car-image">Discount:</label>
                        <input className='cars-input'
                        type="number"
                        id="car-discount"
                        name="discount"
                        placeholder="Enter discount code"
                        min="0"
                        step="0.1"
                        max="100"
                        value={discount}
                        onChange={discountHandler}
                        />
                    </div>
                </div>

                

                {brand && model && engine && basePrice && mileage && color && image && <button className="cars-button" type="submit">Submit</button>}
            </form>

            {car && (
                <div className='car-item'>
                    <h2 className='car-name'>{car.brand} {`(${car.model})`}</h2>
                    <img src={car.image} alt={`${car.brand} (${car.model})`} />

                    <h3>Car's info:</h3>
                    <ul>
                        <li>Color: {car.selectedColor}</li>
                        <li>Engine type: {car.engine}</li>
                        <li>Mileage: {car.mileage} km</li>
                    </ul>

                    <h3>Price:</h3>
                    <ul>
                        <li>Base price: {car.price.basePrice} €</li>
                        <li>Engine price: {car.price.enginePrice} €</li>
                        <li>Color Price: {car.price.colorPrice}€</li>
                        <li><span className='bold'>Price:</span> {getAllPrice()}€</li>
                    </ul>

                    <h3>Discounts:</h3>
                    <ul>
                        <li>Mileage: {car.price.mileageDiscount}€</li>
                        <li>Manual Discount: {car.price.manualDiscount}€</li>
                        <li><span className='bold'>Discount:</span> {getAllDiscount()}€</li>
                    </ul>

                    <h3>Total price:</h3>
                    <ul>
                        <li>Price: {getTotalPrice()}€</li>
                        <li>VAT: {getVAT()}€</li>
                        <li><span className='bold'>Total Price:</span>{getFinalPrice()}€ VAT included</li>
                    </ul>
                </div>
            )}

        </div>
    )
}
export default Cars;