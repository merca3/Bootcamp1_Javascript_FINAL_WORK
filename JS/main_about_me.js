function initMap() {
    const riga = { lat: 56.946285, lng: 24.105078 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: riga,
    });
    const marker = new google.maps.Marker({
        position: riga,
        map: map,
    });
}