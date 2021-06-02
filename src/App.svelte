<script lang="ts">
  import Fa from 'svelte-fa'
  import logo from './assets/avatar.jpg'
  import { faTwitch, faTelegram, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'

  const iconSize = "3x"
  const links = [
    {
      href: "https://twitch.tv/s4tont",
      icon: faTwitch,
    },
    {
      href: "https://t.me/satont",
      icon: faTelegram,
    },
    {
      href: "https://github.com/satont",
      icon: faGithub,
    },
    {
      href: "https://dsc.bio/satont",
      icon: faDiscord,
    }
  ]
</script>

<main>
  <img src={logo} class="logo" alt="Svelte Logo" />
  <h1 class="title">Satont</h1>

  <div class="icons">
    {#each links as link}
      <a href={link.href}><Fa icon={link.icon} size={iconSize} /></a>
    {/each}
  </div>
</main>

<style>
  .icons {
    display: inline-flex;
    flex-wrap: wrap;
  }

  .icons > a {
    margin: 6px;
  }

  .icons a, a:hover, :focus {
    color: whitesmoke
  }

  .logo {
    border-radius: 50%;
  }

  .title {
    font-family: 'Roboto', sans-serif;
    font-size: 3em;
  }

  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  :global(body) {
    background: url('./assets/background.png') no-repeat;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
    color: whitesmoke
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }
  }
</style>
