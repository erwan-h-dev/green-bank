import type { RequestHandler } from './$types';
import { addSimulation } from '$lib/data/simulationService';
import { json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
    let simulation = await request.json();

    simulation = await addSimulation(simulation);

    return json(simulation);
};
