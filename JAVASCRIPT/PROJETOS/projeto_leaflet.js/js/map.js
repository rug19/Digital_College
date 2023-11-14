
// Mapa
var map = L.map('map').setView([-3.77660, -38.488], 30);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Marcador - Digital Colleg
var marker = L.marker([-3.78811, -38.47995],
    { alt: 'Digial College' }).addTo(map)
    .bindPopup('Digital College, Centro Educacional');

// Marcador - iguatemi
var marker = L.marker([-3.75602, -38.48934],
    { alt: 'Shopping Iguatemi' }).addTo(map)
    .bindPopup('Shopping Iguatemi, Centenas de lojas em um shopping moderno e espaçoso com fontes, jardins e cinema.');

// Marcador - Academia Gaviões
var marker = L.marker([-3.79120, -38.47984],
    { alt: 'Shopping Iguatemi' }).addTo(map)
    .bindPopup('Academia Gaviões, Sala de fitnes');

// Marcador - Owl Beer Pub
var marker = L.marker([-3.78841, -38.48863],
    { alt: 'Owl Beer Pub' }).addTo(map)
    .bindPopup('Owl Beer Pub, Bar Contemporâneo');

// Marcador - 
var marker = L.marker([-3.79119, -38.48148],
    { alt: 'Coco Bambu' }).addTo(map)
    .bindPopup('Coco Bambu, Restaurante');
