<script>
    export let number;

    // Toggle On Click
    function handleClick(number) {
        // Get all buttons meant for the groups
        var buttons = document.getElementsByClassName("Group");

        // Loop and set each one to transparent
        for (let i = 0; i < buttons.length; i++) {
            const btn = buttons[i];
            btn.style.background = "transparent";
        }

        // Set clicked button colour
        var button = document.getElementById(number);
        button.style.backgroundColor = "#35CADA";
        button.selected = true;
    }
</script>

<button class="Group" id={number} on:click={handleClick(number)}>
    Group {number}
</button>

<style>
    button {
        /* Group Button*/

        /* Positioning */
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 10px;
        gap: 10px;

        flex: none;
        order: 1;
        flex-grow: 0;

        /* Dimensions */
        width: 96px;
        height: 40px;

        /* Properities */
        background: transparent;
        border-radius: 12px;

    }

    button:hover {
        /* Hover State */
        background-color: gray;
    }
</style>
