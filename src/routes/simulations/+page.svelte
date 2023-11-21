<script lang="ts">
    import { CodeBlock, Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';
    import type { PageData } from './$types';
	import type { Simulation } from '$lib/models/simulation';

    export let data: PageData;

    const simulations = data.simulations;


    $:  getNote = (simulation: Simulation) => {
        let totalNote = 0

        totalNote += simulation.type.note
        totalNote += simulation.energie.note
        totalNote += simulation.kilometrage.note
        totalNote += simulation.annee.note

        return totalNote
    }

</script>

<div class="container mx-auto">
        
    <h1 class="h1">Liste de vos simulations </h1>

    <div class="card variant-soft p-4 m-4">

        <table class="table table-hover">
            <thead>
                <tr>
                    <th>N°</th>
                    <th>type</th>
                    <th>energie</th>
                    <th>kilometrage</th>
                    <th>annee</th>
                    <th>passagers</th>
                    <th>Note</th>
                </tr>
            </thead>
            <tbody>
                {#each simulations as simulation}
                    <tr class="list">
                        <td><span class="badge bg-secondary-500 ms">{simulation.id}</span></td>
                        <td>{simulation.type.label}</td>
                        <td>{simulation.energie.label}</td>
                        <td>{simulation.kilometrage.label}</td>
                        <td>{simulation.annee.label}</td>
                        <td>{simulation.passagers.label}</td>
                        <td>{getNote(simulation)} / 40</td>
                    </tr>
                {/each}
            </tbody>
        </table>
         
                

    </div>
</div> 