<script>
    import Header from "./components/Header.svelte";
    import Home from "./views/Home.svelte";
</script>

<div class="all">
    <div class="bg">
        <div class="circle-big"></div>
        <div class="circle"></div>
        <div class="right"></div>
    </div>
    <div class="content">
        <Header/>
        <Home/>
    </div>
</div>

<style lang="scss">
  @import "./scss/parts/colors";

  .all {
    position: relative;
    min-height: 100vh;

    .bg {
      position: absolute;
      width: 100%;
      height: 100%;

      .circle-big {
        position: absolute;
        width: 40rem;
        height: 40rem;
        background-color: rgba($light, .01);
        border-radius: 50%;
        top: -15rem;
        left: calc(50% - 800px + 10rem);
      }
      .circle {
        position: absolute;
        width: 22rem;
        height: 22rem;
        background-color: $bgAccent;
        border-radius: 50%;
        bottom: 5rem;
        left: 2rem;
      }
      .right {
        position: absolute;
        width: 25%;
        height: 100%;
        right: 0;
        top: 0;
        background-color: $bgAccent;
        @media (min-width:1601px) {
          width: calc(50% - 400px);
        }
      }
    }

    .content {
      position: relative;
      padding-left: 1rem;
      padding-right: 1rem;
      max-width: 1600px;
      margin: 0 auto;
    }
  }
</style>