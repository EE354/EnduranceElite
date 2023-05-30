<script>
    export let number;

    // Toggle On Click

    function handleClick(number) {
        var buttons = document.getElementsByTagName("button");
        for (let i = 0; i < buttons.length; i++) {
            const btn = buttons[i];
            btn.style.background = "transparent";
        }
        var button = document.getElementById(number);
        button.style.backgroundColor = "#35CADA";
        button.selected = true;
    }

</script>

<button id="{number}" on:click={handleClick(number)}>
    Group {number}
</button>

<style>

    button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 10px;
        gap: 10px;

        width: 96px;
        height: 40px;

        background: transparent;
        border-radius: 12px;

        flex: none;
        order: 1;
        flex-grow: 0;
    }


    button:hover {
        background-color: #CFCFCF;
    }

</style>