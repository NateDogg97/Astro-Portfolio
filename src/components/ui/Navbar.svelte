<script>
  import { onMount } from 'svelte';
  import { Hamburger } from 'svelte-hamburgers';

  export let navStyle;
  export let currentPagePath;

  let homePage;
  let open;
  let navBar;
  let isBelowBreakpoint;
  let count = 0;
  let isScrolled = false;
  
  const links = [
    { 'About': '/#about_me' },
    { 'Portfolio':'/#my_projects' },
    { 'Contact':'/#contact_me' }
  ]

  let navHeight = '46.39';
  let maxHeight = navHeight * (links.length + 1);

  function checkWidthAndUpdate() {
    const currentlyBelowBreakpoint = window.innerWidth <= 640;

    if (currentlyBelowBreakpoint !== isBelowBreakpoint) {
      isBelowBreakpoint = currentlyBelowBreakpoint;
      open = false;
      count ++;
    }
  }

  function isHomePage() {
    return currentPagePath === '/';
  }

  function handleClickOutside(event) {
    if (!navBar.contains(event.target)) {
      open = false;
    }
  }

  function closeNavbar() {
    open = false;
  }

  onMount(() => {
    const updateNavbarBackground = () => {
      isScrolled = window.scrollY > window.innerHeight - 50;
    };
    homePage = isHomePage();
    isBelowBreakpoint = window.innerWidth <= 640;
    updateNavbarBackground();
    
    window.addEventListener('click', handleClickOutside);
    window.addEventListener('resize', checkWidthAndUpdate);
    window.addEventListener('scroll', updateNavbarBackground);

    return () => {
      window.removeEventListener('scroll', updateNavbarBackground);
    };
  });
</script>


{#key count}
<nav class="navbar" bind:this={navBar}>
  <ul class="flex flex-col sm:flex-row w-11/12 sm:w-5/6 {isScrolled || open || !homePage ? 'scrolled' : ''} {navStyle}" style={open ? `height:${maxHeight}px` : `height:${navHeight}px`}>
    <li class="flex justify-between items-center w-full">
      <div class="w-0 h-0 sm:hidden"></div>
      <a href="/" on:click={closeNavbar} class="text-white font-sourceCode tracking-wider w-fit whitespace-nowrap">Nathaniel Mays</a>
      <div class='hamburger mt-[3px] sm:hidden'>
        <Hamburger 
          bind:open 
          type='squeeze' 
          --color='white' 
          --padding='0px' 
          --layer-width='25px'
          --layer-spacing='5px'
          --layer-height='3px' 
        />
      </div>
    </li>
    {#each links as link, linkIndex}
      {#each Object.entries(link) as [text, href], index}
        <li class="menu-item flex justify-center sm:bg-none w-full sm:w-auto" class:open={open} data-index={linkIndex} style={open ? `transform:translateY(${(linkIndex+1)*navHeight}px);` : null}>
          <a href={href} on:click={closeNavbar} class="text-white font-sourceCode tracking-wider w-fit">{text}</a>
        </li>
      {/each}
    {/each}
  </ul>
</nav>
{/key}

<style>

  li {
    padding: 0.5em 1.2em;
    transition: background-color, box-shadow 0.3s;
  }

  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: .5em;
    display: flex;
    justify-content: center;
    z-index: 20;
  }

  ul {
    position: relative;
    transition: height 0.3s;
    border-radius: 23px;
  }

  .menu-item {
    position: absolute;
    opacity: 0;
    pointer-events: none;
    transform: translateY(0);
    transition: transform 0.3s, opacity 0.2s;
  }

  .menu-item.open {
    visibility: visible;
    opacity: 1;
    pointer-events: unset;
  }

  .scrolled {
    background-color: #06091880;
    backdrop-filter: blur(12px);
  }

  @media (min-width:640px) {
    .menu-item {
      position: relative;
      opacity: 1;
      pointer-events: unset;
    }
  }

  /* =========== */
  /* Link Styles */

  a {
    display: block;
    position: relative;
    padding: 0.2em 0;
    transition: color 300ms;
  }

  a:hover {
    text-decoration: none;
  }

  a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      var(--text-light),
      rgba(255, 255, 255, 0)
    );
    transition: opacity 300ms, transform 300ms;
    opacity: 0;
    transform: scale(0);
    transform-origin: center;
  }

  a:hover::after,
  a:focus::after {
    transform: scale(1);
    opacity: 1;
  }

</style>