const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter new Roadmap Task: ', (task) => {
    if (!task) {
        console.log('No task entered. Skipping.');
        process.exit();
    }

    const roadmapPath = './ROADMAP.md';
    let content = fs.readFileSync(roadmapPath, 'utf8');
    
    // Logic to append to the current active phase (Phase 01 or 02)
    const newTask = `- [ ] ${task}\n`;
    
    // For now, we append to the end of the file for simplicity, 
    // but we can make this target specific headers later.
    fs.appendFileSync(roadmapPath, newTask);
    
    console.log(`✅ Added to Roadmap: ${task}`);
    process.exit();
});