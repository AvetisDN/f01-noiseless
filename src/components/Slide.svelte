<script>
    import cart from "../store/cart";

    export let className = ''
    export let product

    const submitProduct = (product) => {
        cart.addToCart(product)
    }
    const deleteProduct = (id) => {
        cart.removeFromCart(id)
    }


</script>

<div class="slide {className}">
    <div class="slide-txt">
        <h5>
            Lorem ipsum dolor sit amet.
        </h5>
        <h2>
            <span>
                {product.brand}
            </span>
            {product.model}
        </h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi corporis dicta eaque eos excepturi
            explicabo impedit ipsam minima nam natus nesciunt nostrum omnis quas quo vel velit, voluptatibus.
            Dicta, odit!
        </p>
        <div class="add">
            {#if !cart.isInCart(product.id, $cart)}
                <button class="btn" on:click={() => {submitProduct(product)}}>
                    <span>Add to cart</span>
                    <i class="material-icons">add_shopping_cart</i>
                </button>
            {:else }
                <button class="btn" on:click={() => {deleteProduct(product.id)}}>
                    <span>Remove from cart</span>
                </button>
            {/if}
        </div>
    </div>
    <div class="slide-img">
        <img src={product.img} alt="">
    </div>
</div>

<style lang="scss">
  @import "../scss/parts/colors";

  .slide {
    display: flex;
    height: 100%;
    width: 100%;
    max-width: 1400px;
    justify-content: space-between;
    padding-bottom: 2rem;
    position: absolute;
    transition: 2s ease;

    &-txt {
      width: 80%;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;

      h5 {
        color: $primary;
        text-transform: uppercase;
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        transition: 1.6s ease;
      }

      h2 {
        color: $light;
        font-size: 5rem;
        margin-bottom: 2rem;
        line-height: 1.1em;
        transition: 1.5s ease;
        transition-delay: .3s;

        span {
          display: block;
          font-size: 1.1em;
        }
      }

      p {
        color: $lightText;
        margin-bottom: 1.5rem;
        line-height: 1.75em;
        max-width: 75%;
        transition: 1.4s ease;
        transition-delay: .6s;
      }

      .add {
        transition: 1.3s ease;
        transition-delay: .8s;
      }
    }

    &-img {
      display: flex;
      justify-content: flex-end;

      img {
        height: 115%;
        max-width: auto;
        filter: drop-shadow(0 10px 20px rgba($glow, .45));
        transition: 1.5s ease;
      }
    }


    &.hidden {
      z-index: 0;
      opacity: 0;

      .slide-txt {
        h2 {
          transform: translateX(-90%) scale(.8);
        }

        h5 {
          transform: translateX(-120%) scale(.8);
        }

        p {
          transform: translateX(-70%) scale(.8);
        }

        .add {
          transform: translateX(-200px) scale(.8);
          opacity: 0;
        }
      }

      .slide-img {
        img {
          transform: translateX(160%);
        }
      }
    }

    &.active {
      z-index: 1;
      transform: translateX(0) scale(1);
      opacity: 1;
      transition-delay: .5s;
    }
  }
</style>