<script>
    import {Avatar} from "@skeletonlabs/skeleton";
    import {bubble} from "svelte/internal";
    import {date} from "zod";
    let elemChat;
    let currentMessage = '';
    function scrollChatBottom(behavior) {
        elemChat.scrollTo({ top: elemChat.scrollHeight, behavior });
    }
    function addMessage() {
        const newMessage = {
            id: data.messages.length,
            host: true,
            avatar: 48,
            name: 'Jane',
            timestamp: new date(),
            message: currentMessage,
            color: 'variant-soft-primary'
        }
        // Append the new message to the message feed
        data.messages = [...data.messages, newMessage];
        // Clear the textarea message
        currentMessage = '';
        // Smoothly scroll to the bottom of the feed
        setTimeout(() => { scrollChatBottom('smooth'); }, 0);
    }
    export let data;
</script>

<div class="w-full grid grid-cols-[auto_1fr] gap-1">
    <div class="bg-surface-500/30 p-4">(nav)</div>
    <div class="bg-surface-500/30 p-4">(feed)</div>
</div>

<div class="h-full grid grid-rows-[auto_1fr_auto] gap-1">
    <div class="bg-surface-500/30 p-4">(search)</div>
    <div class="bg-surface-500/30 p-4">(list)</div>
    <div class="bg-surface-500/30 p-4">(footer)</div>
</div>




<section class="w-full max-h-[400px] p-4 overflow-y-auto space-y-4">
    {#each data.messages as bubble, i}
        {#if bubble.host === true}
            <!-- Host Message Bubble -->
            <pre>host: {JSON.stringify(bubble, null, 2)}</pre>
        {:else}
            <!-- Guest Message Bubble -->
            <pre>guest: {JSON.stringify(bubble, null, 2)}</pre>
        {/if}
        <div class="grid grid-cols-[auto_1fr] gap-2">
            <div class="card p-4 variant-soft rounded-tl-none space-y-2">
                <header class="flex justify-between items-center">
                    <p class="font-bold">{bubble.name}</p>
                    <small class="opacity-50">{bubble.timestamp}</small>
                </header>
                <p>{bubble.message}</p>
            </div>
        </div>
    {/each}
</section>


<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token">
    <button class="input-group-shim">+</button>
    <textarea
            bind:value={data.messages}
            class="bg-transparent border-0 ring-0"
            name="pre message"
            id="pre message"
            placeholder="Write a message..."
            rows="1"></textarea>
    <button class="variant-filled-primary">Send</button>
</div>

<div bind:this={elemChat} class="overflow-y-auto">(chat)</div>


<textarea
        bind:value={currentMessage} name="prompt" id="prompt"
        placeholder="Write a message..."></textarea>



<button on:click={addMessage}>Send</button>