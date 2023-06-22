<script>
    import { enhance } from "$app/forms";
    import { toastStore } from '@skeletonlabs/skeleton';

    const errorToast = {
        message: "There was an error logging in",
        background: "varient-filled-error"

    }
    export let form;


    $: if (form?.message) {
        errorToast.message = form.message
        toastStore.trigger(errorToast)
    }


</script>

<div class="container h-full mx-auto flex justify-center items-center">
    <div class="space-y-5 container flex justify-center items-center">
        <form method="POST" action="?/login" use:enhance>
            <label class="label">
                <span>Email</span>
                <input class="input" type="Email" name="email" placeholder="Email"/>
            </label>
            <label class="label">
                <span>Password</span>
                <input class="input" type="password" name="password" placeholder="Password"/>
            </label>

            <input type="submit" class="btn variant-filled"/>
        </form>
    </div>
</div>
