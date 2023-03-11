import { useState } from 'react';
import './CarsPage.css';
import CarItem from './CarItem';
import CarForm from './CarForm';

function CarsPage() {
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
      <>
      <div className='cars-page-content-wrapper'>
            
            <CarForm
            brand={brand}
            model={model}
            color={color}
            image={image}
            engine={engine}
            mileage={mileage}
            discount={discount}
            basePrice={basePrice}

            onFormSubmit={formSubmitHandler}
            onBrandInput={brandInputHandler}
            onModelInput={modelInputHandler}
            onEngineInput={engineInputHandler}
            onBasePrice={basePriceHandler}
            onMileageInput={mileageInputHandler}
            onColorInput={colorInputHandler}
            onColor={colorHandler}
            onImageInput={imageInputHandler}
            onDiscount={discountHandler}
            optionEngine={optionElements(engineTypes)}
            optionColors={optionElements(colors)}
            arrEngine={engineTypes}
            arrColors={colors}
            selectedColor={selectedColor}
            />

            {car && (
                
                <CarItem
                car={car}
                discount={getAllDiscount}
                allPrice={getAllPrice}
                totalPrice={getTotalPrice}
                vat={getVAT}
                finalPrice={getFinalPrice} />

            )}

        </div>
      </>
        
    )
}
export default CarsPage;