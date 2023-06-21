<script>
    import {goto, url, params} from '@roxi/routify'
    import axios from "axios";




    (async () => {
        try {
            const cacheId = $params.cacheId;

            const response = await axios({
                method: 'get',
                url: `http://localhost:3000/api/user/verify/${cacheId}`,
                responseType: 'json'
            })
            $goto('../');
        } catch (e) {
            console.log(e)
        }


    })();



</script>