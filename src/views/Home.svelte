<script>
    import products from "../store/products";
    import brands from "../store/brands";
    import Slide from "../components/Slide.svelte";

    let activeSlide = 'Sony'

    const setActiveSlide = (brandName) => {
        activeSlide = brandName
    }

</script>

<main>
    <div class="slider">
        {#each $products as product}
            <Slide product={product} className={activeSlide === product.id ? 'active' : 'hidden'}/>
        {/each}
    </div>
    <nav>
        {#each $brands as brand}
            <div class="brand {activeSlide === brand.id ? 'active' : ''}" on:click={() => { setActiveSlide(brand.id) }}>
                <img src={brand.img} alt={brand.brand}>
            </div>
        {/each}
    </nav>
</main>

<style lang="scss">
  @import "../scss/parts/colors";

  main {
    height: calc(100vh - 130px);

    .slider {
      height: calc(100% - 120px);
      position: relative;
    }

    nav {
      display: flex;
      height: 120px;
      align-items: center;
      padding-left: 1.5rem;

      div {
        cursor: pointer;
        width: 5rem;
        height: 5rem;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin-right: 2rem;
        border: 4px solid $light;
        opacity: .5;
        transform: scale(.7);
        transition: .3s ease;

        &:hover, &.active {
          opacity: 1;
          border-color: $primary;
          box-shadow: 0 2px 5px $primary;
          transform: scale(1);
        }

        img {
          width: 100%;
        }
      }
    }
  }
</style>