import './Map.css';

function Map() {
    return (
        <div className="map-wrapper">
            <iframe className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.299509313234!2d25.288455116128084!3d54.68675688028176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd9417621fb72d%3A0x9f881e6eb7ad7bd9!2sArsenalo%20g.%205%2C%2001143%20Vilnius!5e0!3m2!1slt!2slt!4v1671194415377!5m2!1slt!2slt" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" title="map" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    )
}
export default Map;