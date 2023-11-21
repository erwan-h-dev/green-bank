<script lang="ts">
    import { Stepper, Step, ProgressRadial } from '@skeletonlabs/skeleton';
    import { types, energies, kilometrages, annees, passagers } from '$lib/data/listes';
	import { Simulation } from '$lib/models/simulation';

    let loader: boolean = false;

    let simulation = new Simulation();


    async function onCompleteHandler(e: Event) {
        loader = true;

        // call add simulation endpoint API
        const response = await fetch('/api/simulations/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(simulation)
        })

        simulation = await response.json();

        // redirect to simulation page
        window.location.href = `/simulations/${simulation.id}`;
    }

</script>

<div class="container mx-auto">
    
    <h1 class="h1">Nouvelle simulation</h1>

    <div class="card variant-soft p-4 m-4">
        {#if !loader}
            <Stepper on:complete={onCompleteHandler} stepTerm='Étape'>
                <Step locked={!simulation.type}>
                    <svelte:fragment slot="header">Sélectionner un type de véhicule</svelte:fragment>
                    {#each types as type}
                        <label class="flex items-center space-x-2">
                            <input class="radio" type="radio" name="type" bind:group={simulation.type} value="{type}" />
                            <p>{type.label}</p>
                        </label>
                    {/each}
                </Step>
                <Step locked={!simulation.energie} >
                    <svelte:fragment slot="header">Sélectionner une énergie</svelte:fragment>
                    {#each energies as energie}
                        <label class="flex items-center space-x-2">
                            <input class="radio" type="radio" name="energie" bind:group={simulation.energie} value="{energie}" />
                            <p>{energie.label}</p>
                        </label>
                    {/each}
                </Step>
                <Step locked={!simulation.kilometrage} >
                    <svelte:fragment slot="header">Sélectionner votre kilometrage annuelle</svelte:fragment>
                    {#each kilometrages as kilometrage}
                        <label class="flex items-center space-x-2">
                            <input class="radio" type="radio" name="kilometrage" bind:group={simulation.kilometrage} value="{kilometrage}" />
                            <p>{kilometrage.label}</p>
                        </label>
                    {/each}
                </Step>
                <Step locked={!simulation.annee} >
                    <svelte:fragment slot="header">Sélectionner l'année du véhicule</svelte:fragment>
                    {#each annees as annee}
                        <label class="flex items-center space-x-2">
                            <input class="radio" type="radio" name="annee" bind:group={simulation.annee} value="{annee}" />
                            <p>{annee.label}</p>
                        </label>
                    {/each}
                </Step>
                <Step locked={!simulation.passagers} >
                    <svelte:fragment slot="header">Sélectionner un nombre de passagers</svelte:fragment>
                    {#each passagers as passager}
                        <label class="flex items-center space-x-2">
                            <input class="radio" type="radio" name="passager" bind:group={simulation.passagers} value="{passager}" />
                            <p>{passager.label}</p>
                        </label>
                    {/each}
                </Step>
            </Stepper>
        {:else}
            <ProgressRadial class="m-auto" />
        {/if}
        
    </div>
</div>