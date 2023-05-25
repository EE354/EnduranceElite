<script>
    import {account, refresh} from "../stores";

    $account = refresh()
    // On load, calculate and change position for each dropdown menu to override to center
    window.onload = function() {
        var dropdownMenus = document.querySelectorAll('dropdown-menu');
        dropdownMenus.forEach(function(dropdownMenu) {
            var dropdownMenuWidth = dropdownMenu.offsetWidth;
            var leftPosition = (window.innerWidth - dropdownMenuWidth) / 2;
            dropdownMenu.style.left = leftPosition + 'px';
        });
    };

</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <div class="headerLeft">
            <li class="nav-item active">
            <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link" href="/client/public" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                About
                 </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="/client/public">Action</a>
                <a class="dropdown-item" href="/client/public">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/client/public">Something else here</a>
                </div>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link" href="/client/public" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                Activities
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="/client/public">Action</a>
                <a class="dropdown-item" href="/client/public">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/client/public">Something else here</a>
            </div>
            </li>
        </div>
        
        <div class="headerRight">
            <li class="nav-item active">
                <a class="nav-link" href="/client/public">Merchandise</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link" href="/client/public" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                Events
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="/client/public">Action</a>
                <a class="dropdown-item" href="/client/public">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/client/public">Something else here</a>
                </div>
            </li>
            {#if ($account.email == null)}
                <li class="nav-item active">
                    <a class="nav-link" href="/login">Login</a>
                </li>
            {:else}
                <li class="nav-item active">
                    <a class="nav-link" href="/account">Account</a>
                </li>
            {/if}
        </div>
      </ul>
    </div>
  </nav>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans&display=swap');

    .dropdown:hover .dropdown-menu {
        display: block;
    }

    .dropdown-menu {
        box-sizing: border-box;
        background: rgba(0, 0, 0, 0.04);
        border-bottom: 1px solid #000000;

        flex: none;
        order: 2;
        align-self: stretch;
        flex-grow: 0;
        z-index: 0;
    }

    a {
        width: 100px;
        height: 24px;

        font-family: 'Plus Jakarta Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;

        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: -0.03em;

        color: #000000;

        opacity: 0.9;

        flex: none;
        order: 1;
        flex-grow: 0;
    }

    @media (min-width: 992px) {

        .collapse {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 992px;
        }

        .navbar {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 992px;
        }

        .headerLeft {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 0px;
            gap: 48px;

            width: 460px;
            height: 32px;

            flex: none;
            order: 0;
            flex-grow: 1;
            z-index: 0;
        }

        .headerRight {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 0px;
            gap: 48px;

            width: 460px;
            height: 32px;

            flex: none;
            order: 1;
            flex-grow: 1;
            z-index: 1;
        }

        .dropdown-menu {
            flex-direction: row;
            align-items: flex-start;
            padding: 32px 80px 48px 170px;
            gap: 10px;

            width: 992px;
            height: 250px;

            position: fixed;
            left: 50%;
            transform: translateX(-50%);

        }
    }   
</style>