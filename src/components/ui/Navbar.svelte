<script>
  import { onMount } from 'svelte';
  import { Hamburger } from 'svelte-hamburgers';

  let { navStyle, currentPagePath } = $props();

  let homePage = $state(false);
  let open = $state(false);
  let navBar = $state();
  let isBelowBreakpoint = $state(false);
  let count = $state(0);
  let isScrolled = $state(false);
  let showMobilePortfolio = $state(false);
  let showDropdown = $state(false);
  
  const links = [
    { text: 'About', href: '/#about_me' },
    { text: 'Portfolio', href: '/#my_projects', isDropdown: true },
    { text: 'Contact', href: '/#contact_me' }
  ];

  const projectLinks = [
    { name: 'Golf Auto Booker', href: '/golf-auto-booker' },
    { name: 'ERS Premium Features', href: '/ers-premium-features' },
    { name: 'Instagram Feed Plugin', href: '/instagram-feed-plugin' },
    { name: 'Tent Rental Templates', href: '/tent-rental-templates' },
    { name: 'Busy Bee Jumpers', href: '/busy-bee-jumpers' },
    { name: 'Next.js Blog', href: '/nextjs-blog' }
  ];

  let navHeight = 46.39;
  let baseLinksCount = links.length + 1; // +1 for the header
  let totalItemsCount = $derived(showMobilePortfolio ? baseLinksCount + projectLinks.length : baseLinksCount);
  let maxHeight = $derived(navHeight * totalItemsCount);

  // Calculate position for each menu item dynamically
  function calculateItemPosition(index, isProjectItem = false, projectIndex = 0) {
    if (!open) return 0;
    
    let position = 1; // Start after header
    
    if (!isProjectItem) {
      // Regular menu item
      for (let i = 0; i < index; i++) {
        position++;
        // If portfolio is expanded and we've passed it, add space for project items
        if (showMobilePortfolio && i === 1) { // Portfolio is at index 1
          position += projectLinks.length;
        }
      }
    } else {
      // Project item - always comes after Portfolio (index 1)
      position = 2 + projectIndex + 1; // 2 for About and Portfolio, then project index
    }
    
    return position * navHeight;
  }

  function checkWidthAndUpdate() {
    const currentlyBelowBreakpoint = window.innerWidth <= 640;

    if (currentlyBelowBreakpoint !== isBelowBreakpoint) {
      isBelowBreakpoint = currentlyBelowBreakpoint;
      open = false;
      showMobilePortfolio = false;
      count++;
    }
  }

  function isHomePage() {
    return currentPagePath === '/';
  }

  function handleClickOutside(event) {
    if (!navBar.contains(event.target)) {
      open = false;
      showMobilePortfolio = false;
    }
  }

  function closeNavbar() {
    open = false;
    showDropdown = false;
    showMobilePortfolio = false;
  }

  function toggleMobilePortfolio(e) {
    if (isBelowBreakpoint && open) {
      e.preventDefault();
      showMobilePortfolio = !showMobilePortfolio;
    }
  }

  function handleMouseEnter() {
    if (!isBelowBreakpoint) {
      showDropdown = true;
    }
  }

  function handleMouseLeave() {
    if (!isBelowBreakpoint) {
      showDropdown = false;
    }
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
      window.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', checkWidthAndUpdate);
    };
  });
</script>

{#key count}
<nav class="navbar" bind:this={navBar}>
  <ul class="flex flex-col sm:flex-row w-11/12 sm:w-5/6 {isScrolled || open || !homePage ? 'scrolled' : ''} {navStyle}" 
      style={open ? `height:${maxHeight}px` : `height:${navHeight}px`}>
    
    <!-- Header with logo and hamburger -->
    <li class="flex justify-between items-center w-full">
      <div class="w-0 h-0 sm:hidden"></div>
      <a href="/" onclick={closeNavbar} class="text-white font-sourceCode tracking-wider w-fit whitespace-nowrap">Nathaniel Mays</a>
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
    
    <!-- Main navigation items -->
    {#each links as link, linkIndex}
      <li class="menu-item flex justify-center sm:bg-none w-full sm:w-auto {link.isDropdown ? 'portfolio-link' : ''}" 
          class:open={open} 
          data-index={linkIndex}
          style={open && isBelowBreakpoint ? `transform:translateY(${calculateItemPosition(linkIndex)}px);` : ''}
          onmouseenter={link.isDropdown ? handleMouseEnter : null}
          onmouseleave={link.isDropdown ? handleMouseLeave : null}>
        <a href={link.href} 
           onclick={link.isDropdown && isBelowBreakpoint ? toggleMobilePortfolio : closeNavbar} 
           class="text-white font-sourceCode tracking-wider w-fit">
          {link.text}
          {#if link.isDropdown && isBelowBreakpoint && open}
            <span class="dropdown-arrow" class:rotated={showMobilePortfolio}>▼</span>
          {/if}
        </a>
        
        <!-- Desktop dropdown menu -->
        {#if link.isDropdown && !isBelowBreakpoint}
          <div class="dropdown-menu {isScrolled || !homePage ? 'scrolled' : ''} {navStyle}" 
               class:show={showDropdown}
               role="menu"
               tabindex="-1"
               onmouseenter={handleMouseEnter}
               onmouseleave={handleMouseLeave}>
            {#each projectLinks as project}
              <a href={project.href} onclick={closeNavbar} class="dropdown-item" role="menuitem">{project.name}</a>
            {/each}
          </div>
        {/if}
      </li>
      
      <!-- Mobile portfolio items - inserted right after Portfolio link -->
      {#if link.isDropdown && showMobilePortfolio && isBelowBreakpoint && open}
        {#each projectLinks as project, projectIndex}
          <li class="menu-item mobile-project-item flex justify-center sm:bg-none w-full" 
              class:open={open}
              style={`transform:translateY(${calculateItemPosition(0, true, projectIndex)}px);`}>
            <a href={project.href} onclick={closeNavbar} class="text-white font-sourceCode tracking-wider text-sm w-fit">
              {project.name}
            </a>
          </li>
        {/each}
      {/if}
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
    transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 23px;
  }
  
  @media (max-width: 640px) {
    ul {
      overflow: hidden;
    }
  }

  .menu-item {
    position: absolute;
    opacity: 0;
    pointer-events: none;
    transform: translateY(0);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease-in-out;
  }

  .menu-item.open {
    opacity: 1;
    pointer-events: unset;
  }

  .mobile-project-item {
    background-color: rgba(255, 255, 255, 0.05);
    transition-delay: 0.05s;
  }

  .mobile-project-item a {
    font-size: 0.85rem;
    padding-left: 1rem;
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
      transform: none !important;
    }
    
    .mobile-project-item {
      display: none;
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

  /* =============== */
  /* Dropdown Styles */
  
  @media (min-width: 640px) {
    .portfolio-link {
      position: relative;
    }
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 12px;
    padding: 0.5rem 0;
    min-width: 220px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;
  }

  .dropdown-menu.show {
    opacity: 1;
    visibility: visible;
  }

  .dropdown-item {
    display: block;
    padding: 0.5rem 1.5rem;
    color: white;
    font-family: 'Source Code Pro', monospace;
    font-size: 0.9rem;
    transition: background-color 0.2s;
    white-space: nowrap;
  }

  .dropdown-item:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .dropdown-item::after {
    display: none;
  }

  .dropdown-arrow {
    display: inline-block;
    margin-left: 0.5rem;
    font-size: 0.7em;
    transition: transform 0.3s;
    vertical-align: middle;
  }

  .dropdown-arrow.rotated {
    transform: rotate(180deg);
  }
</style>