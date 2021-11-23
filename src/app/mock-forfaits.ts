import { Forfait } from './forfait';

export const FORFAITS: Forfait[] = [
    {
        id: 1,
        destination: 'Cuba',
        villeDepart: 'Montréal',
        hotel: {
            nom: 'Hotel Playa Paraiso',
            coordonnees: 'Cayo Coco, Cuba',
            nombreEtoiles: 4,
            nombreChambre: 508,
            caracteristiques: ['Plage', 'Club bébé', 'Miniclub'],
        },
        dateDepart: '2021-12-01',
        dateRetour: '2021-12-08',
        prix: 2620,
        rabais: 1952,
        vedette: true
    },
    {
        id: 2,
        destination: 'Cuba',
        villeDepart: 'Montréal',
        hotel: {
            nom: 'Melia las Dunas',
            coordonnees: 'Cayo Santa Maria, Cuba',
            nombreEtoiles: 4,
            nombreChambre: 925,
            caracteristiques: ['Plage', 'Gym', 'Restaurants'],
        },
        dateDepart: '2021-12-14',
        dateRetour: '2021-12-21',
        prix: 1410,
        rabais: 680,
        vedette: false
    },
    {
        id: 3,
        destination: 'Costa Rica',
        villeDepart: 'Montréal',
        hotel: {
            nom: 'Occidental Tamarindo',
            coordonnees: 'Liberia, Costa Rica',
            nombreEtoiles: 4,
            nombreChambre: 198,
            caracteristiques: ['Face à la plage', 'Gym', 'Miniclub'],
        },
        dateDepart: '2021-12-13',
        dateRetour: '2021-12-20',
        prix: 2215,
        rabais: 356,
        vedette: true
    },
    {
        id: 4,
        destination: 'Mexique',
        villeDepart: 'Montréal',
        hotel: {
            nom: 'Catalonia Riviera Maya and Yucatan',
            coordonnees: 'Riviera Maya, Mexique',
            nombreEtoiles: 4,
            nombreChambre: 205,
            caracteristiques: ['Miniclub', 'Plage', 'Spa'],
        },
        dateDepart: '2021-12-02',
        dateRetour: '2021-12-08',
        prix: 2056,
        rabais: 1147,
        vedette: true
    },
    {
        id: 5,
        destination: 'République dominicaine',
        villeDepart: 'Montréal',
        hotel: {
            nom: 'Bahia Principe Grand El Portillo',
            coordonnees: 'Samana, République dominicaine',
            nombreEtoiles: 4,
            nombreChambre: 606,
            caracteristiques: ['Parc aquatique', 'Plage', 'Miniclub'],
        },
        dateDepart: '2021-12-01',
        dateRetour: '2021-12-08',
        prix: 2069,
        rabais: 940,
        vedette: true
    },
    {
        id: 6,
        destination: 'Colombie',
        villeDepart: 'Montréal',
        hotel: {
            nom: 'Decameron Baru',
            coordonnees: 'Carthagène, Colombie',
            nombreEtoiles: 4,
            nombreChambre: 366,
            caracteristiques: ['Face à la plage', 'Spa', 'Gym'],
        },
        dateDepart: '2021-12-13',
        dateRetour: '2021-12-20',
        prix: 1923,
        rabais: 384,
        vedette: false
    },
    {
        id: 7,
        destination: 'Cuba',
        villeDepart: 'Québec',
        hotel: {
            nom: 'Mar Del Sur',
            coordonnees: 'Varadero, Cuba',
            nombreEtoiles: 2,
            nombreChambre: 451,
            caracteristiques: ['Piscine', 'Petit déjeuner', 'Bar'],
        },
        dateDepart: '2021-12-18',
        dateRetour: '2021-12-25',
        prix: 1442,
        rabais: 714,
        vedette: true
    },
    {
        id: 8,
        destination: 'États-Unis',
        villeDepart: 'Québec',
        hotel: {
            nom: 'Dockside Inn and Suites',
            coordonnees: 'Orlando, États-Unis',
            nombreEtoiles: 3,
            nombreChambre: 2050,
            caracteristiques: ['Piscine', 'Gym', 'Coffret de sûreté'],
        },
        dateDepart: '2021-12-13',
        dateRetour: '2021-12-20',
        prix: 1081,
        rabais: 432,
        vedette: false
    },
    {
        id: 9,
        destination: 'Portugal',
        villeDepart: 'Montréal',
        hotel: {
            nom: 'Vila Galé Cascais',
            coordonnees: 'Cascais, Portugal',
            nombreEtoiles: 4,
            nombreChambre: 502,
            caracteristiques: ['Air climatisé', 'Ascenseur', 'Piscine'],
        },
        dateDepart: '2021-12-13',
        dateRetour: '2021-12-20',
        prix: 2136,
        rabais: 647,
        vedette: true
    },
    {
        id: 10,
        destination: 'France',
        villeDepart: 'Montréal',
        hotel: {
            nom: 'Grand Hôtel de Turin',
            coordonnees: 'Paris, France',
            nombreEtoiles: 3,
            nombreChambre: 50,
            caracteristiques: ['Petit déjeuner', 'Resto-Bar', 'Séchoir à cheveux'],
        },
        dateDepart: '2022-01-12',
        dateRetour: '2022-01-19',
        prix: 2087,
        rabais: 0,
        vedette: false
    }
]