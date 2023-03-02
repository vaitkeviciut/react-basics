import './Shops.css';
import ShopItem from './ShopItem/ShopItem';

function Shops() {
    return (
        <div className="shops-wrapper">
            <h1 className="shops-title">Find us</h1>
            <div className="shops-list">
                <ShopItem
                title="Parduotuvė 1"
                mobile="+37065864997"
                mobileUrl="mob:+37065864997"
                email="shop1@parduotuve.lt"
                emailUrl="mailto:shop1@parduotuve.lt"
                address="Arsenalo g. 5, Vilnius 01143"
                addressUrl="https://goo.gl/maps/ePZJqCJEtsf58c8b7"
                />

                <ShopItem
                title="Parduotuvė 2"
                mobile="+37065864997"
                mobileUrl="mob:+37065864997"
                email="shop1@parduotuve.lt"
                emailUrl="mailto:shop1@parduotuve.lt"
                address="Arsenalo g. 5, Vilnius 01143"
                addressUrl="https://goo.gl/maps/ePZJqCJEtsf58c8b7"
                />

                <ShopItem
                title="Parduotuvė 3"
                mobile="+37065864997"
                mobileUrl="mob:+37065864997"
                email="shop1@parduotuve.lt"
                emailUrl="mailto:shop1@parduotuve.lt"
                address="Arsenalo g. 5, Vilnius 01143"
                addressUrl="https://goo.gl/maps/ePZJqCJEtsf58c8b7"
                />

                <ShopItem
                title="Parduotuvė 4"
                mobile="+37065864997"
                mobileUrl="mob:+37065864997"
                email="shop1@parduotuve.lt"
                emailUrl="mailto:shop1@parduotuve.lt"
                address="Arsenalo g. 5, Vilnius 01143"
                addressUrl="https://goo.gl/maps/ePZJqCJEtsf58c8b7"
                />

            </div>
        </div>
    )
}
export default Shops;