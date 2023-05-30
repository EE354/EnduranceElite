<script>
    import {account} from "../stores";
    import {goto, ready} from "@roxi/routify";
    import axios from "axios";

    let groups = [];


    account.useLocalStorage();
    if (!$account.email) {
        $goto('/login')
    }
    async function logout() {
        $account = {};
        $goto('../index')
    }
    console.log($account._id);
    //OnLoad
    (async () => {
        try {
            const id = $account._id;
            console.log(id);
            const response = await axios ({
                method: 'POST',
                url: 'http://localhost:3000/api/groups/getGroupsByUser',
                data: {
                    userId: id
                }
            })
            groups = response.data;
            $ready()
        } catch (e) {
            console.log(e)
        }
    })();

</script>

<h1>
    Welcome {$account.name.first} {$account.name.last} to the account dashboard
</h1>


<button on:click={logout}>Logout</button>

<div>
    {#each groups as group (group._id)}
        <div>
            <h2>{group.name}</h2>
            <p>{group.description}</p>
        </div>
    {/each}
</div>
