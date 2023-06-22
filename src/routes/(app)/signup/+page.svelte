<script>
    import {enhance} from "$app/forms"
    import {toastStore} from "@skeletonlabs/skeleton";


    const errorToast = {
        message: "There was an error signing up",
        background: "variant-filled-error",
        shown: false,

    }


    export let form;
    let formLast;


    $: if (form?.message) {
        errorToast.message = form.message
        toastStore.trigger(errorToast)
    }


</script>

<div class="container h-full mx-auto flex justify-center items-center">
    <div class="space-y-5 container flex justify-center items-center">
        <form method="POST" use:enhance>
            <label class="label">
                <span>Name</span>
                <input class="input" type="text" name="first" placeholder="First" />
                <input class="input" type="text" name="last" placeholder="Last" />
            </label>
            <label class="label">
                <span>Email</span>
                <input class="input" type="Email" name="email" placeholder="Email" />
            </label>
            <label class="label">
                <span>Password</span>
                <input class="input" type="password" name="password" placeholder="Password" />
            </label>
            <label class="label">
                <span>Confirm Password</span>
                <input class="input" type="password" name="confirmPassword" placeholder="Password" />
            </label>
            <label>
                <span>Date of Birth</span>
                <input type="date" class="input" name="dob">
            </label>

            <input type="submit" class="btn variant-filled"/>
        </form>
    </div>
</div>
