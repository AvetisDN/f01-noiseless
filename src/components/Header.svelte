<script>
    import Informer from "./Informer.svelte";
    import CartModal from "./CartModal.svelte";

    let showModal = false

    const toggleModal = () => {
        showModal = !showModal
    }

</script>

<header>
    <a href="/" class="logo">
        <img src="./images/logo.png" alt="NoiseLess">
        <span>Noise</span>
        Less
    </a>
    <nav>
        <a href="/" class="active">Home</a>
        <a href="/">Not Home</a>
    </nav>
    <Informer toggleModal={toggleModal}/>
    {#if showModal}
        <CartModal toggleModal={toggleModal}/>
    {/if}
</header>

<style lang="scss">
  @import "../scss/parts/colors";

  header {
    display: flex;
    align-items: center;
    padding: 1.5rem 0;
    justify-content: space-between;

    .logo {
      display: flex;
      align-items: center;
      color: $primary;
      font-weight: 900;
      font-size: 2.15rem;
      text-decoration: none;

      span {
        color: $light;
        text-decoration: line-through;
        text-decoration-color: $primary;
        font-weight: 700;
      }

      img {
        max-height: 5rem;
        margin-right: .5rem;
      }
    }

    nav {
      a {
        color: $lightText;
        text-decoration: none;
        margin: 0 .75rem;
        font-size: 1.2rem;
        transition: .3s ease;

        &:hover, &.active {
          color: $primary;
        }
      }
    }
  }
</style>