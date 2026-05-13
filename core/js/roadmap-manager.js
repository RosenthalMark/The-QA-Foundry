const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('\n--- FOUNDRY ROADMAP PROTOCOL ---');

const addTask = () => {
    rl.question('📝 New Task (or press Enter to skip): ', (task) => {
        if (task && task.trim() !== "") {
            try {
                const roadmapPath = './ROADMAP.md';
                const newTask = `- [ ] ${task}\n`;
                fs.appendFileSync(roadmapPath, newTask);
                console.log(`✅ Task Logged: ${task}`);
                
                rl.question('➕ Add another task? (y/n): ', (ans) => {
                    if (ans.toLowerCase() === 'y') {
                        addTask();
                    } else {
                        console.log('🚀 Finalizing Roadmap. Proceeding to sync...');
                        rl.close();
                    }
                });
            } catch (err) {
                console.log('❌ Error updating ROADMAP.md');
                rl.close();
            }
        } else {
            console.log('⏩ No more tasks. Proceeding to sync...');
            rl.close();
        }
    });
};

addTask();

rl.on('close', () => {
    process.exit(0);
});