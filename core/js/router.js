const router = {
    loadModule(moduleId) {
        const stage = document.getElementById('main-stage');
        
        if (moduleId === 'manual') {
            stage.innerHTML = `
                <div class="module-header">
                    <h1>MISSION 01: THE SKEPTIC'S EYE</h1>
                    <p>Phase: Manual Exploratory Audit</p>
                </div>
                <div class="onboarding-grid">
                    <div class="glass-card docs-card">
                        <h3>Bug Writing 101</h3>
                        <p>A professional bug report isn't just "it's broken." It's a legal document for engineers. You need:</p>
                        <ul>
                            <li><strong>Severity:</strong> How bad is it? (Blocker vs Trivial)</li>
                            <li><strong>Steps:</strong> How do I see it myself?</li>
                            <li><strong>Expected:</strong> What should happen?</li>
                            <li><strong>Actual:</strong> What actually happened?</li>
                        </ul>
                        <button class="primary-btn" onclick="startManualMission()">I UNDERSTAND - START MISSION</button>
                    </div>
                </div>
            `;
        }
    }
};

// Update your sidebar HTML to call: router.loadModule('manual')