import './Contacts.css';
import BackButton from '../BackButton';
import Shops from './Shops/Shops';
import Map from './Map/Map';

function Contacts() {
    return (
    <>
        <BackButton />
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