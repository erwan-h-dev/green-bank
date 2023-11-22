<script lang="ts">
	import '../app.postcss';
    import { page } from '$app/stores';
	import { AppShell, AppBar, Drawer, getDrawerStore, initializeStores } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
    
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

    initializeStores();
    const drawerStore = getDrawerStore();
    
    
    function drawerOpen(): void {
        drawerStore.open({
            width: 'w-[280px] md:w-[480px]',
            padding: 'p-4',
            rounded: 'rounded-xl',
        });
    }

    function navigate(): void{
        drawerStore.close();
    }
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
                <button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
                    <span>
                        <svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
                            <rect width="100" height="20" />
                            <rect y="30" width="100" height="20" />
                            <rect y="60" width="100" height="20" />
                        </svg>
                    </span>
                </button>
				<strong class="text-xl uppercase">Simulateur d'emprunt</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail" >
                <div class="hidden lg:block">
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
                </div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
    <Drawer>
        <ul class="list m-4">
            <li class="mb-3">
                <a 
                    href="/"  
                    on:click={navigate}
                    class="btn hover:variant-soft-primary {$page.url.pathname === '/' ? 'variant-soft-primary' : ''}"
                >Accueil
                </a>
            </li>
            <li>
                <a 
                    href="/simulations/new" 
                    on:click={navigate}
                    class="btn hover:variant-soft-primary {$page.url.pathname === '/simulations/new' ? 'variant-soft-primary' : ''}"
                >Créer une simulation
                </a>
            </li>
            <li>
                <a 
                    href="/simulations" 
                    on:click={navigate}
                    class="btn hover:variant-soft-primary {$page.url.pathname === '/simulations' ? 'variant-soft-primary' : ''}"
                >Vos simulations
                </a>
            </li>
        </ul>
    </Drawer>
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
