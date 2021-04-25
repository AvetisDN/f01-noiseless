<script>
    import cart from "../store/cart";

    export let toggleModal

    const handleRemove = (id) => {
        if(confirm('Are you sure?')) cart.removeFromCart(id)
    }

    const handleIncrease = (id) => {
        cart.increaseQuantity(id)
    }
    const handleDecrease = (id) => {
        cart.decreaseQuantity(id)
    }

</script>

<div class="modal-container">
    <div class="modal-shadow" on:click={toggleModal}></div>
    <div class="modal-content">
        <h2>Cart contents</h2>
        <div class="table">
            <div class="row header">
                <div class="number">#</div>
                <div class="product">Product</div>
                <div class="quantity">Quantity</div>
                <div class="remove"></div>
            </div>
            {#each $cart as cartItem, index}
                <div class="row">
                    <div class="number">
                        {index + 1}
                    </div>
                    <div class="product">
                        <img src={cartItem.img} alt={cartItem.brand + ' ' + cartItem.model}>
                        {cartItem.brand}
                        {cartItem.model}
                        <i>${cartItem.price}</i>
                    </div>
                    <div class="quantity">
                        <button class="minus"
                                on:click={ () => {handleDecrease(cartItem.id)} }
                                disabled={cartItem.quantity === 1}
                        >
                            <span class="material-icons-outlined">
                                remove
                            </span>
                        </button>
                        <h5>
                            {cartItem.quantity}
                        </h5>
                        <button class="plus" on:click={ () => {handleIncrease(cartItem.id)} }>
                            <span class="material-icons-outlined">
                                add
                            </span>
                        </button>
                    </div>
                    <div class="remove">
                        <button on:click={ () => {handleRemove(cartItem.id)} }>
                            <span class="material-icons-outlined">
                                delete
                            </span>
                        </button>
                    </div>
                </div>
            {:else }
                <div class="row">
                    <h4>Cart is empty</h4>
                </div>
            {/each}
        </div>
        <h3>
            Totally {cart.getTotalQuantity($cart)} products for ${cart.getTotalPrice($cart)}
        </h3>
    </div>
</div>

<style lang="scss">
  @import "../scss/parts/colors";

  .modal-container {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-shadow {
      position: absolute;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      background-color: rgba(#000, .8);
      backdrop-filter: blur(14px);
    }

    .modal-content {
      padding: 2rem;
      border-radius: 1rem;
      background-color: rgba($dark, .5);
      position: relative;
      z-index: 30;
      width: 100%;
      max-width: 1000px;

      .table {
        margin: 1rem 0;

        .row {
          display: flex;
          align-items: center;

          h4 {
            padding: 1rem;
            text-align: center;
            width: 100%;
          }

          &.header {
            background-color: rgba(#000, .2);
            font-weight: 600;
          }

          & > div {
            padding: .5rem 1rem;
          }

          .number {
            width: 30px;
          }

          .product {
            flex-grow: 1;
            display: flex;
            align-items: center;

            img {
              height: 3rem;
              margin-right: 1rem;
            }
            i {
              margin-left: 1rem;
            }
          }

          .quantity {
            display: flex;
            button {
              background-color: #8686b7;
              border: none;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 2rem;
              height: 2rem;
              cursor: pointer;
              &.minus {
                border-radius: .25rem 0 0 .25rem;
              }
              &.plus {
                border-radius: 0 .25rem .25rem 0;
              }
              &:disabled {
                opacity: .5;
                pointer-events: none;
              }
            }
            h5 {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 2rem;
              height: 2rem;
              background-color: rgba(#000,.2);
            }
          }

          .remove {
            width: 4rem;

            button {
              width: 2.5rem;
              height: 2.5rem;
              border: none;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: rgba(#000,.5);
              color: #f0eef7;
              cursor: pointer;
              border-radius: .25rem;
            }
          }
        }
      }

    }
  }
</style>