<script lang="ts">
	import { getNote, tauxDemprunt } from '$lib/data/simulationService';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
    import type { PageData } from './$types';

    export let data: PageData;

    const simulation = data.simulation;
    const noteMax = getNote(simulation);
    const taux = tauxDemprunt(simulation);

    let value = 0;
    let note = 0;
    const interval = setInterval(() => {
        note = note + 1;

        value = note / 40 * 100;
        if (note == noteMax) {
            clearInterval(interval);
        }
    }, 30);

</script>

<div class="container mx-auto">
    <h1 class="h1">Simulation N°{simulation.id}</h1>

    <div class="card variant-soft p-4 m-4">
        <section class="p-4">
            <div class="grid grid-cols-2 lg:grid-cols-5">
                <div class="card m-4">
                    <div class="card-header">
                        <h4 class="h4">Type</h4>
                    </div>
                    <section class="p-4">
                        <h4 class="h4">{simulation.type.label}</h4>
                    </section>
                </div>
                <div class="card m-4">
                    <div class="card-header">
                        <h4 class="h4">Energies</h4>
                    </div>
                    <section class="p-4">
                        <h4 class="h4">{simulation.energie.label}</h4>
                    </section>
                </div>
                <div class="card m-4">
                    <div class="card-header">
                        <h4 class="h4">Kilometrage</h4>
                    </div>
                    <section class="p-4">
                        <h4 class="h4">{simulation.kilometrage.label}</h4>
                    </section>
                </div>
                <div class="card m-4">
                    <div class="card-header">
                        <h4 class="h4">Année</h4>
                    </div>
                    <section class="p-4">
                        <h4 class="h4">{simulation.annee.label}</h4>
                    </section>
                </div>
                <div class="card m-4">
                    <div class="card-header">
                        <h4 class="h4">Passagérs</h4>
                    </div>
                    <section class="p-4">
                        <h4 class="h4">{simulation.passagers.label}</h4>
                    </section>
                </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div class="card m-4">
                    <div class="card-header">
                        <h2 class="h2">Note</h2>
                    </div>
                    <section class="p-4">
                        <ProgressRadial class="mx-auto" value={value}>{note} / 40</ProgressRadial>
                    </section>
                </div>
                <div class="card m-4">
                    <div class="card-header">
                        <h2 class="h2">Taux D'emprunt</h2>
                    </div>
                    <section class="p-4">
                        <h1 class="h1 text-center mt-10">{taux}%</h1>
                    </section>
                </div>
            </div>
        </section>
    </div>
</div>