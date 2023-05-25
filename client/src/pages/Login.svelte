<script>
    import axios from 'axios';
    import {account} from '../stores.js';

    let email = "";
    let password = "";

    const login = async () => {
        try {
            //Send a request to the server to log in
            const response = await axios({
                method: 'post',
                url: 'http://localhost:3000/api/user/login',
                data: {
                    email: email,
                    password: password
                },
                withCredentials: true,
                credentials: 'include',
                mode: 'cores'
            });
            //set the account to the response data
            $account = response.data;
            //redirect to the home page
            window.location.href = ("/");
        } catch (error) {
            console.error(error);
        }
    }
</script>

<main>
    <div class="container-sm">
        <div class="mb-3 row">
            <h3>Log In</h3>
        </div>
        <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="staticEmail" bind:value={email}>
            </div>
        </div>
        <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword" bind:value={password}>
            </div>
        </div>
        <div class="mb-3 row">
            <button class="btn btn-primary" on:click={login}>Log in</button>
        </div>
    </div>

</main>

<style>

</style>