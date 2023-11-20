<script lang="ts">
    import { CodeBlock } from '@skeletonlabs/skeleton';
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<h1 class="h1">Simulation</h1>

<CodeBlock language="json" code={JSON.stringify(data, null, 2)}></CodeBlock>