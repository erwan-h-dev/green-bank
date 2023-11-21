import { error } from '@sveltejs/kit'; 
import { getSimulation } from '$lib/data/simulation';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {

    try{
        const id:number = Number(params.id);

        const simulation = getSimulation(id);
        
        if (simulation) {
            return { simulation };
        } 
        
        return error(404, 'Simulation not found');
    
    }catch(e){
        return error(500, 'Internal Server Error');
    }
}) satisfies PageServerLoad;