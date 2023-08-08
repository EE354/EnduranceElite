<script>
    import { onMount } from 'svelte'
    import dayjs from 'dayjs'

    export let format = 'YYYY-MM-DDThh:mm'
    export let date = new Date()
    export let name;

    let internal

    const input = (x) => (internal = dayjs(x).format(format))
    const output = (x) => (date = dayjs(x, format).toDate())

    $: input(date)
    $: output(internal)
</script>

<input type="datetime-local" {name} class="input input-bordered"  bind:value={internal} />