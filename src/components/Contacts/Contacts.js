import './Contacts.css';
import Shops from './Shops/Shops';
import Map from './Map/Map';

function Contacts() {
    return (
    <>
        <div className="container">
            <div className="content-contacts-wrapper">
                <Shops />

                <Map />
            </div>
        </div>
    </>
        
    )
}
export default Contacts;