<script>
    import cart from "../store/cart";

    export let toggleModal

    let show = false

    const toggle = () => {
        show = !show
    }
</script>

<div class="informer">
    <button class="btn red cart" on:click={toggle}>
        <i class="material-icons-outlined">
            shopping_cart
        </i>
        <span class="badge">
            {cart.getTotalQuantity($cart)}
        </span>
    </button>
    <div class="informer-underlay {show ? 'show' : ''}" on:click={toggle}></div>
    <div class="informer-dropdown {show ? 'show' : ''}">
        <ul>
            {#each $cart as cartItem}
                <li>
                    <span>
                        {cartItem.brand}
                        {cartItem.model}
                    </span>
                    <span>
                        {cartItem.quantity} &times; ${cartItem.price}
                    </span>
                </li>
                {:else}
                <li>
                    Cart is empty
                </li>
            {/each}
        </ul>
        <h4>Total: ${cart.getTotalPrice($cart)}</h4>
        <button class="btn red" on:click={() => {toggle(); toggleModal()}}>
            Cart Details
        </button>
    </div>
</div>

<style lang="scss">
  @import "../scss/parts/colors";

  .informer {
    position: relative;
    z-index: 10;

    .btn.cart {
      position: relative;

      .badge {
        position: absolute;
        top: .33rem;
        right: .33rem;
        background-color: $dark;
        color: $light;
        width: 1.25rem;
        height: 1.25rem;
        font-size: .75rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    & &-underlay {
      position: fixed;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      z-index: 1;
      display: none;

      &.show {
        display: block;
      }
    }

    & &-dropdown {
      z-index: 2;
      position: absolute;
      white-space: nowrap;
      right: 0;
      top: calc(100% + 1rem);
      background-color: rgba($dark, .5);
      backdrop-filter: blur(20px);
      padding: 1.5rem;
      border-radius: 1rem;
      transition: .5s cubic-bezier(0, .51, .01, .99);
      transform: scaleY(.3) translateY(-80px);
      transform-origin: 50% 0;
      opacity: 0;

      &.show {
        opacity: 1;
        transform: scaleY(1) translateY(0);
      }

      ul {
        list-style: none;
        margin-bottom: 1rem;

        li {
          margin-bottom: .5rem;
          display: flex;
          justify-content: space-between;

          span {
            &:first-child {
              margin-right: 1rem;
            }
          }
        }
      }

      h4 {
        margin-bottom: 1rem;
      }


    }
  }
</style>