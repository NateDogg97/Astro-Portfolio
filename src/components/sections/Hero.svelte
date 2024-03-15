<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  
  // Initialize as true to start as not visible
  let isNotVisible = true;

  // Reactive Svelte store to manage if the transition should be applied
  let applyTransition = writable(true);
  
  onMount(() => {
    // Immediately evaluate visibility on mount
    isNotVisible = window.scrollY > window.innerHeight * 0.66;
    let hasLoadedOnce = false;

    // Define the function to toggle visibility based on scroll
    const hideHeroText = () => {
      const shouldBeInvisible = window.scrollY > window.innerHeight * 0.66;
      if (isNotVisible !== shouldBeInvisible) {
        isNotVisible = shouldBeInvisible;
        if (hasLoadedOnce) {
          // After the first visibility change, disable the transition
          applyTransition.set(false);
        }
        hasLoadedOnce = true;
				applyTransition.set(false);
      }
    };

    // Listen for scroll events on the window
    window.addEventListener('scroll', hideHeroText);

    // Cleanup event listener on component destruction
    return () => {
      window.removeEventListener('scroll', hideHeroText);
    };
  });
  </script>

<div class="hero-spacer relative h-screen">
    <div class="hero-container fixed inset-0">
        <div class="flex flex-col items-center justify-center w-full h-full">
            <div class={`hero-text ${isNotVisible ? 'hide' : 'show'} font-bold text-white font-montserrat text-shadow text-5xl sm:text-5xl md:text-7xl lg:text-8xl text-center`}
								 class:no-transition="{$applyTransition ? false : true}">
                Developing New Dimensions
            </div>
        </div>
    </div>
</div>

<style>
    .hero-container {
        background-image: url('/stars-bg.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
    }
    .hero-text {
        transition: opacity 1s, visibility 1s;
        opacity: 0;
        visibility: hidden;
    }
    .hero-text.show {
        opacity: 1;
        visibility: visible;
    }
		.hero-text.no-transition {
				transition: none;
		}
</style>