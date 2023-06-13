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
        padding: 24px;
        display: grid;
        grid-template-columns: auto auto auto;

        /* Dimensions */
        max-width: 621px;
        height: 415px;

        /* Properties */
        border-radius: 32px;
        background-color: #35CAD5;
        box-shadow: 5px 10px 25px rgb(155, 155, 155);

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
</style>