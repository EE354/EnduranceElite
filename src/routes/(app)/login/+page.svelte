<script>
    import { enhance } from "$app/forms";
    import { toastStore } from '@skeletonlabs/skeleton';

    export let form;



</script>

<div class="container h-full mx-auto flex justify-center content-center mb-96">
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
            <div class="flex flex-row mt-2">
                <input type="submit" class="btn bg-primary-600" value="Log In"/>   
                <div class="container grid items-center justify-items-center">
                    <a href="/login" class="font-semibold hover:underline">Forgot Password?</a>
                </div>
            </div>
            <hr class="my-4">
            <div class="grid justify-items-center">
                <div>
                    <span>Don't have an Account?</span>
                    <a href="/signup" class="font-semibold hover:underline">Sign Up</a>
                </div>
            </div>
        </form>
    </div>
</div>
