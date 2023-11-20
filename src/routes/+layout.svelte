<script lang="ts">
	import '../app.postcss';
    import { page } from '$app/stores';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Simulateur d'emprunt</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
                <a 
                    href="/"  
                    class="btn hover:variant-soft-primary {$page.url.pathname === '/' ? 'variant-soft-primary' : ''}"
                >Accueil
                </a>
                <a 
                    href="/simulations/new" 
                    class="btn hover:variant-soft-primary {$page.url.pathname === '/simulations/new' ? 'variant-soft-primary' : ''}"
                >Créer une simulation
                </a>
                <a 
                    href="/simulations" 
                    class="btn hover:variant-soft-primary {$page.url.pathname === '/simulations' ? 'variant-soft-primary' : ''}"
                >Vos simulations
                </a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- Page Route Content -->
    <main class="card w-100 m-3 p-3 variant-ghost">
        <slot />
    </main>
    
    <svelte:fragment slot="pageFooter">
        <AppBar>
            <div class="text-center text-sm">
                <p>HOELTZENER Erwan 2023</p>
            </div>
        </AppBar>
    </svelte:fragment>
</AppShell>
