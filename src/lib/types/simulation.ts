export type Simulation = {
    id?: number;
    type: number;
    energie: number;
    kilometrage: number;
    annee: number;
    passagers: number;
}

let SIMULATIONS: Simulation[] = [];

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