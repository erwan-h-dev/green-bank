import type { Simulation } from "$lib/models/simulation";
import { tauxEmprunts } from "./listes";

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

export function tauxDemprunt(simulation: Simulation) {
    const noteTotal = getNote(simulation)

    const taux = simulation.passagers.bonus

    const tauxEmprunt = tauxEmprunts.find((taux) => {
        // return if noteTotal is between min and max
        return noteTotal >= taux.min && noteTotal <= taux.max
    })
    console.log(taux + tauxEmprunt.bonus)
    return taux + tauxEmprunt.bonus
}

export function getNote(simulation: Simulation): number {
    let totalNote = 0

    totalNote += simulation.type.note || 0
    totalNote += simulation.energie.note || 0
    totalNote += simulation.kilometrage.note || 0
    totalNote += simulation.annee.note || 0

    return totalNote
}