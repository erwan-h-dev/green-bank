import type { Simulation } from "$lib/models/simulation";

let SIMULATIONS: Simulation[] = [
    {
        "id": 1,
        "type": {
            "id": 2,
            "label": "Cabriolet : 1300-2000kg",
            "note": 6
        },
        "energie": {
            "id": 1,
            "label": "Essence",
            "note": 5
        },
        "kilometrage": {
            "id": 1,
            "label": "5000-10000km",
            "note": 9
        },
        "annee": {
            "id": 1,
            "label": "1960 - 1970",
            "note": 1
        },
        "passagers": {
            "id": 1,
            "label": "1",
            "note": 0.11
        },
    }
];

export function getSimulations(): Simulation[] 
{
    return SIMULATIONS;
}

export function getSimulation(id: number): Simulation|undefined 
{
    const simulation: Simulation | undefined = SIMULATIONS.find((simulation) => {
        return simulation.id === id
    });
    
    return simulation;
}

export function addSimulation(newSimulation: Simulation): Simulation {
    // récupere l'id le plus grand de la collection
    const maxId = SIMULATIONS.reduce((maxId, simulation) => (simulation.id && simulation.id > maxId ? simulation.id : maxId), 0);

    // on incrémente la valeur de 1
    newSimulation.id = maxId + 1;

    SIMULATIONS.push(newSimulation);

    return newSimulation;
}

export function deleteSimulation(id: number): void 
{
    SIMULATIONS = SIMULATIONS.filter((simulation) => simulation.id != id);
}