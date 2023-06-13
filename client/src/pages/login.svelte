<script>
    import axios from 'axios';
    import { account } from '../stores.js';
    import { goto } from '@roxi/routify';
    import NavBar from "../components/NavBar.svelte";

    let email = "";
    let password = "";

    account.useLocalStorage();


    const login = async () => {
        try {

            //Send a request to the server to log in
            const response = await axios({
                method: 'post',
                url: 'http://localhost:3000/api/user/login',
                timeout: 5000,
                data: {
                    email: email,
                    password: password
                }
            });
            if (response.data === undefined) throw new Error("No response from server");
            //set the account to the response data
            $account = response.data;
            //redirect to the home page
            $goto('../index');
        } catch (error) {
            console.error(error);
        }
    }
</script>
<NavBar/>
<main>
    <div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" bind:value={email}>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" bind:value={password}>
        </div>
        <button class="btn btn-primary" on:click={login}>Submit</button>
    </div>

</main>
