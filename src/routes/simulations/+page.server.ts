import type { PageServerLoad } from './$types';
import { getSimulations } from '$lib/data/simulationService';

export const load = (async () => {

    const simulations = getSimulations();
    
    return { simulations };

}) satisfies PageServerLoad;