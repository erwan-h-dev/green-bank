import type { PageServerLoad } from './$types';
import { getSimulations } from '$lib/data/simulation';

export const load = (async () => {

    const simulations = getSimulations();
    
    return { simulations };

}) satisfies PageServerLoad;