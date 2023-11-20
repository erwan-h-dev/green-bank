import type { PageServerLoad } from './$types';
import { getSimulations } from '$lib/types/simulation';

export const load = (async () => {

    const simulations = getSimulations();
    
    return { simulations };

}) satisfies PageServerLoad;