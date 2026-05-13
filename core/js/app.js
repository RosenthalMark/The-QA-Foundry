const FOUNDRY = {
    state: {
        handle: localStorage.getItem('operator_handle') || null,
        rank: 'Trainee',
        completedModules: JSON.parse(localStorage.getItem('completed_modules')) || []
    },

    init() {
        if (this.state.handle) {
            document.getElementById('onboarding-overlay').style.display = 'none';
            this.updateProfileUI();
        }
    }
};

function initializeOperator() {
    const handle = document.getElementById('operator-handle').value;
    if (handle.length < 2) return alert("Operator Handle too short.");
    
    localStorage.setItem('operator_handle', handle);
    FOUNDRY.state.handle = handle;
    
    document.getElementById('onboarding-overlay').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('onboarding-overlay').style.display = 'none';
        FOUNDRY.updateProfileUI();
    }, 500);
}

FOUNDRY.updateProfileUI = function() {
    document.getElementById('display-handle').innerText = this.state.handle;
    document.getElementById('user-avatar').innerText = this.state.handle[0].toUpperCase();
};

// Start the system
FOUNDRY.init();