<script lang="ts">
    import { Table, tableMapperValues, type PaginationSettings, Paginator, tableSourceMapper } from '@skeletonlabs/skeleton';
    import type { PageData } from './$types';
	import type { Simulation } from '$lib/models/simulation';
	import { getNote } from '$lib/data/simulationService';

    export let data: PageData;

    const simulations = data.simulations;

    // mise en place du jeu de données pour le tableau
    let tableData: any[] = []
    simulations.forEach((simulation) =>{
        tableData.push({
            id: simulation.id,
            type: simulation.type.label,
            energie: simulation.energie.label,
            kilometrage: simulation.kilometrage.label,
            annee: simulation.annee.label,
            passagers: simulation.passagers.label,
            note: getNote(simulation)
        })
    })

    // mise en place de la pagination
    let paginationSettings = {
        page: 0,
        limit: 5,
        size: tableData.length,
        amounts: [5,10,25,100],
    } satisfies PaginationSettings;

    function selectSimulation(event: CustomEvent) {
        window.location.href = `/simulations/${event.detail.id}`
    }

    // gestion de la pagination du tableau
    $: simulationsPagined = tableData.slice(
        paginationSettings.page * paginationSettings.limit,
        paginationSettings.page * paginationSettings.limit + paginationSettings.limit
    );

    const tableHead: string[] = ['N°','type','énergie','kilometrage','année','passagers','note']
</script>

<div class="container mx-auto">
        
    <h1 class="h1">Liste de vos simulations </h1>

    <div class="card variant-soft p-4 m-4">
        <Table source={{
                head: tableHead, 
                body: tableMapperValues(simulationsPagined,  ['id','type','energie','kilometrage','annee','passagers','note']), 
                meta: tableSourceMapper(simulationsPagined,  ['id']),
                foot: tableHead
            }}
            interactive={true} 
            on:selected={selectSimulation}
        />
        <Paginator class="my-3" bind:settings={paginationSettings} showFirstLastButtons="{false}" showPreviousNextButtons="{true}" showNumerals maxNumerals={1}></Paginator>
    </div>
</div> 