<script>
    export let buttonStyle;
    export let tooltipText;
    export let href;
    export let buttonText;
    export let targetBlank;

    let tooltipVisible = false;
    let tooltipX = 0;
    let tooltipY = 0;
  
    function onMouseMove(event) {
      tooltipX = event.clientX;
      tooltipY = event.clientY;
    }
  
    function onMouseEnter() {
      tooltipVisible = true;
    }
  
    function onMouseLeave() {
      tooltipVisible = false;
    }
  </script>
  
  <style>
    .tooltip {
      position: fixed;
      pointer-events: none;
      padding: 4px;
      background-color: black;
      color: white;
      border-radius: 4px;
      transition: opacity 0.2s;
      opacity: 0;
    }
  </style>
  
  <a href={href || null}
     target={targetBlank ? '_blank' : null}
     class={buttonStyle}
     on:mousemove={onMouseMove}
     on:mouseenter={onMouseEnter}
     on:mouseleave={onMouseLeave}>
    {buttonText}
    {#if tooltipVisible}
      <div class="tooltip" style="top: {tooltipY-30}px; left: {tooltipX}px; opacity: 1;">
        {tooltipText}
      </div>
    {/if}
  </a>
  