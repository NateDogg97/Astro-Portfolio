export function initVideoToggle(): void {
    function toggleVideo(show: boolean): void {
        const loomEmbed: HTMLElement | null = document.getElementById('loomEmbed');
        const heroImage: HTMLElement | null = document.getElementById('heroImage');
        
        if (loomEmbed && heroImage) {
            if (show) {
                loomEmbed.classList.remove('hidden');
                heroImage.style.opacity = '0';
            } else {
                loomEmbed.classList.add('hidden');
                heroImage.style.opacity = '1';
            }
        }
    }

    function updateVideoState(): void {
        const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
        const videoParam: string | null = urlParams.get('video');
        toggleVideo(videoParam === 'true');
    }

    // Initial state check
    updateVideoState();

    // Listen for history changes
    window.addEventListener('popstate', updateVideoState);

    // Modify video trigger behavior
    const videoTrigger: HTMLAnchorElement | null = document.querySelector('a[href="#"]');
    if (videoTrigger) {
        videoTrigger.addEventListener('click', (e: MouseEvent) => {
            e.preventDefault();
            const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
            const currentState: boolean = urlParams.get('video') === 'true';
            urlParams.set('video', (!currentState).toString());
            
            // Update URL without reloading the page
            window.history.pushState({}, '', `${window.location.pathname}?${urlParams}`);
            
            // Update video state
            toggleVideo(!currentState);
        });
    }
}