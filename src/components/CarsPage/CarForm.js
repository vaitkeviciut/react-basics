const CarForm = ({ brand, model, engine, basePrice, mileage, color, image, discount, onFormSubmit, onBrandInput, onModelInput, onEngineInput, onBasePrice, onMileageInput, onColorInput, onColor, onImageInput, onDiscount, optionEngine, optionColors, arrEngine, arrColors, selectedColor }) => {
  return (
    <form className="cars-form" onSubmit={onFormSubmit}>
        <div className="form-wrapper">
            <div className="form-control">
                <label className="cars-label" htmlFor="car-brand">Brand:</label>
                <input className='cars-input'
                type="text"
                id="car-brand"
                name="brand"
                placeholder="Enter a brand"
                value={brand}
                onChange={onBrandInput}
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
                onChange={onModelInput}
                />
            </div>

            {arrEngine && arrEngine.length > 0 && (
                <div className="form-control">
                    <label className="cars-label" htmlFor="car-engine">Engine type:</label>
                    <select className='cars-input'
                        id="car-engine"
                        name="engine"
                        value={engine}
                        onChange={onEngineInput}>

                        {optionEngine}

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
                onChange={onBasePrice}
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
                onChange={onMileageInput}
                />
            </div>

            {arrColors && arrColors.length > 0 && (
                <div className="form-control">
                    <label className="cars-label" htmlFor="car-color">Color:</label>
                    <select className='cars-input'
                        id="car-color"
                        name="color"
                        value={selectedColor}
                        onChange={onColorInput}>

                        {optionColors}

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
                    onChange={onColor}
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
                onChange={onImageInput}
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
                onChange={onDiscount}
                />
            </div>
        </div>

        {brand && model && engine && basePrice && mileage && color && image && <button className="cars-button" type="submit">Submit</button>}
    </form>
  )
}

export default CarForm