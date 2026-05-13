const state = {
    // Save data to localStorage
    save(key, value) {
        localStorage.setItem(`foundry_${key}`, JSON.stringify(value));
    },

    // Load data from localStorage
    load(key) {
        const data = localStorage.getItem(`foundry_${key}`);
        return data ? JSON.parse(data) : null;
    },

    // Update the Rank with 2026-standard visual feedback
    updateRank(newRank) {
        const display = document.querySelector('.details small');
        const avatar = document.getElementById('user-avatar');
        
        // Add a "Level Up" flicker effect
        display.classList.add('animate-flicker');
        display.innerText = `RANK: ${newRank}`;
        
        // Update Internal State
        this.save('rank', newRank);
        
        console.log(`[SYSTEM] Rank updated to: ${newRank}`);
        
        setTimeout(() => display.classList.remove('animate-flicker'), 1000);
    }
};