export const types = [{
    value: 1,
    label: 'Citadine : 800-1300kg',
    note: 8
}, {
    value: 2,
    label: 'Cabriolet : 1300-2000kg',
    note: 6
}, {
    value: 2,
    label: 'Berline : 1300-1800kg',
    note: 6.5
}, {
    value: 3,
    label: 'SUV / 4x4 : 1800-2500kg',
    note: 4
}]

export const energies = [{
    value: 1,
    label: 'Essence',
    note: 5
}, {
    value: 2,
    label: 'Diesel',
    note: 4
}, {
    value: 3,
    label: 'Electrique',
    note: 9
}, {
    value: 4,
    label: 'Hybride',
    note: 7
}, {
    value: 5,
    label: 'Gaz',
    note: 6
}]

export const kilometrages = [{
    value: 1,
    label: '5000-10000km',
    note: 9
}, {
    value: 2,
    label: '10000-15000km',
    note: 7
}, {
    value: 3,
    label: '15000-20000km',
    note: 5
}, {
    value: 4,
    label: '20000-25000km',
    note: 3
}, {
    value: 5,
    label: '25000-30000km',
    note: 1
}]

export const annees = [{
    value: 1,
    label: '1960 - 1970',
    note: 1
}, {
    value: 2,
    label: '1970 - 1980',
    note: 2
}, {
    value: 3,
    label: '1990 - 2000',
    note: 4
}, {
    value: 4,
    label: '2000 - 2010',
    note: 5
}, {
    value: 6,
    label: 'Après 2010',
    note: 7
}]

export const passagers = [{
    value: 1,
    label: '1 passager',
    bonus: 0.11
}, {
    value: 2,
    label: '2 passagers',
    bonus: -0.17
}, {
    value: 3,
    label: '3 passagers',
    bonus: -0.29
}, {
    value: 4,
    label: '4 passagers',
    bonus: -0.53
}]

export const tauxEmprunts = [{
    min: 0,
    max: 10,
    taux: 3
}, {
    min: 11,
    max: 15,
    bonus: 2.74
}, {
    min: 16,
    max: 25,
    bonus: 2.52
}, {
    min: 26,
    max: 33,
    bonus: 2.10
}, {
    min: 34,
    max: 40, 
    bonus: 1.85
}]