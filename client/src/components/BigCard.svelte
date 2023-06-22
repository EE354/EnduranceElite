<script>
    import Button from "../components/Button.svelte";

</script>

<div id="content-container">
    
    <div id="header-text">
        <slot name="title"></slot>
        <slot name="body"></slot>
    </div>
        <div class="subtitle"><slot name="subtitle1"></slot></div>
        <div class="subtitle"><slot name="subtitle2"></slot></div>
        <div class="subtitle"><slot name="subtitle3"></slot></div>
        <div class="subbody"><slot name="subbody1"></slot></div>
        <div class="subbody"><slot name="subbody2"></slot></div>
        <div class="subbody"><slot name="subbody3"></slot></div>
</div>

<style>

    #content-container {
        /* Box */

        /* Positioning */
        margin: 24px;
        padding: 24px;
        display: grid;
        grid-template-columns: auto auto auto;

        /* Dimensions */
        max-width: 621px;
        height: 415px;

        /* Properties */
        border-radius: 32px;
        background-color: #35CAD5;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

    }

    #header-text {
        /* Flex Vertically */
        display: flex;
        flex-direction: column;
        grid-column-start: 1;
        grid-column-end: 4;
    }

    .subbody {
        margin-right: 8px;
    }

    #header-text :global(> :first-child) {
        font-size: 40px;
	}

</style>