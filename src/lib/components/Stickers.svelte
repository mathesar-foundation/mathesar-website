<script lang="ts">
  export let variant = "hero";

  import Sticker1 from "/src/assets/stickers/sticker1.png?enhanced";
  import Sticker2 from "/src/assets/stickers/sticker2.png?enhanced";
  import Sticker3 from "/src/assets/stickers/sticker3.png?enhanced";
  import Sticker4 from "/src/assets/stickers/sticker4.png?enhanced";
  import Sticker5 from "/src/assets/stickers/sticker5.png?enhanced";
  import Sticker6 from "/src/assets/stickers/sticker6.png?enhanced";

  const variants: Record<string, any> = {
    hero: [
      {
        src: Sticker2,
        className: "w-20 md:w-28",
        position: "top-[15%] left-[8%]",
        rotation: -18,
        animationType: "animate-float-delayed",
        opacity: 0.8,
      },
      {
        src: Sticker1,
        className: "w-32 md:w-40",
        position: "top-[25%] left-[-5%]",
        rotation: 15,
        animationType: "animate-float-delayed",
      },
      {
        src: Sticker3,
        className: "w-24 md:w-32",
        position: "top-[20%] right-[10%]",
        rotation: 15,
        animationType: "animate-float-slow",
        opacity: 0.7,
      },
      {
        src: Sticker5,
        className: "w-16 md:w-24",
        position: "top-[30%] left-[15%]",
        rotation: -35,
        animationType: "animate-float",
      },
      {
        src: Sticker1,
        className: "w-20 md:w-40",
        position: "top-[15%] right-[-4%]",
        rotation: 42,
        animationType: "animate-float-delayed",
      },
      {
        src: Sticker6,
        className: "w-16 md:w-20",
        position: "top-[35%] right-[0%]",
        rotation: -15,
        animationType: "animate-float-delayed",
      },
    ],
    solution: [
      {
        src: Sticker4,
        className: "w-32 md:w-40",
        position: "-top-4 right-0",
        rotation: 25,
        animationType: "animate-float",
        opacity: 0.8,
      },
      {
        src: Sticker2,
        className: "w-28 md:w-36",
        position: "top-8 -left-16",
        rotation: -18,
        animationType: "animate-float-delayed",
      },
      {
        src: Sticker5,
        className: "w-24 md:w-32",
        position: "top-1/3 -right-6",
        rotation: 15,
        animationType: "animate-float-slow",
      },
    ],
    about: [
      {
        src: Sticker1,
        className: "w-32 md:w-40",
        position: "top-20 right-[25%]",
        rotation: 25,
        animationType: "animate-float",
      },
      {
        src: Sticker2,
        className: "w-28 md:w-36",
        position: "bottom-32 -left-16",
        rotation: -18,
        animationType: "animate-float-delayed",
      },
      {
        src: Sticker3,
        className: "w-24 md:w-32",
        position: "top-1/2 -right-16",
        rotation: 15,
        animationType: "animate-float-slow",
      },
      {
        src: Sticker5,
        className: "w-16 md:w-20",
        position: "top-40 left-[15%]",
        rotation: -35,
        animationType: "animate-float",
        opacity: 0.7,
      },
    ],
    community: [
      {
        src: Sticker4,
        className: "w-16",
        position: "top-[10%] right-[15%]",
        rotation: 25,
        animationType: "animate-float",
        opacity: 0.75,
      },
      {
        src: Sticker1,
        className: "w-28 md:w-40",
        position: "bottom-32 -left-16",
        rotation: -18,
        animationType: "animate-float-delayed",
      },
      {
        src: Sticker3,
        className: "w-24 md:w-36",
        position: "top-1/3 -right-6",
        rotation: 15,
        animationType: "animate-float-slow",
      },
    ],
    donate: [
      {
        src: Sticker4,
        className: "w-32 md:w-40",
        position: "-top-4 right-[15%]",
        rotation: 25,
        animationType: "animate-float",
        opacity: 0.8,
      },
      {
        src: Sticker1,
        className: "w-28 md:w-36",
        position: "bottom-32 -left-8",
        rotation: -18,
        animationType: "animate-float-delayed",
      },
      {
        src: Sticker3,
        className: "w-24 md:w-32",
        position: "top-1/3 -right-6",
        rotation: 15,
        animationType: "animate-float-slow",
      },
    ],
    product: [
      {
        src: Sticker1,
        className: "w-32 md:w-40",
        position: "-top-4 right-[15%]",
        rotation: 30,
        animationType: "animate-float",
      },
      {
        src: Sticker3,
        className: "w-24 md:w-32",
        position: "top-1/3 -right-6",
        rotation: 12,
        animationType: "animate-float-slow",
      },
      {
        src: Sticker2,
        className: "w-20 md:w-28",
        position: "top-20 left-[10%]",
        rotation: -45,
        animationType: "animate-float",
        opacity: 0.7,
      },
    ],
    solutions: [
      {
        src: Sticker1,
        className: "w-32 md:w-32",
        position: "-top-[5%] right-[25%]",
        rotation: 25,
        animationType: "animate-float",
        opacity: 0.6,
      },
      {
        src: Sticker3,
        className: "w-28 md:w-36",
        position: "bottom-32 -left-16",
        rotation: -18,
        animationType: "animate-float-delayed",
      },
      {
        src: Sticker5,
        className: "w-24 md:w-32",
        position: "top-1/2 -right-16",
        rotation: 15,
        animationType: "animate-float-slow",
      },
      {
        src: Sticker2,
        className: "w-16 md:w-20",
        position: "top-40 left-[15%]",
        rotation: -35,
        animationType: "animate-float",
        opacity: 0.7,
      },
    ],
  };

  $: currentStickers = variants[variant] || variants.hero;
</script>

<div
  class="hidden md:block absolute inset-0 pointer-events-none z-10 overflow-x-clip"
>
  {#each currentStickers as sticker}
    <enhanced:img
      src={sticker.src}
      alt=""
      class="absolute {sticker.className} {sticker.position} {sticker.animationType}"
      style="--rotation: {sticker.rotation}deg; {sticker.opacity !== undefined
        ? `opacity: ${sticker.opacity};`
        : ''}"
    />
  {/each}
</div>
