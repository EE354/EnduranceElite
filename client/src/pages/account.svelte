<script>
    import {account} from "../stores";
    import {goto} from "@roxi/routify";

    account.useLocalStorage();
    if (!$account.email) {
        $goto('/login')
    }
    function logout() {
        $account = {}
        $goto('../index')
    }
</script>

<h1>
    Welcome {$account.name.first} {$account.name.last} to the account dashboard
</h1>


<button on:click={logout}>Logout</button>
