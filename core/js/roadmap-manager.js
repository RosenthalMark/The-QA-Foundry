const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const roadmapPath = './ROADMAP.md';

const getTaskInput = () => {
    console.log('\n--- FOUNDRY TASK INJECTOR ---');
    console.log('(Ctrl+C to abort)\n');

    rl.question('📝 Task Title: ', (title) => {
        if (!title.trim()) {
            console.log('❌ Title required.');
            return getTaskInput();
        }

        rl.question('📖 Description (Enter to skip): ', (desc) => {
            rl.question('📍 Phase Number: ', (phaseNum) => {
                const phase = phaseNum.trim() || "1";
                injectTask(title.trim(), desc.trim(), phase);
                
                rl.question('\n➕ Add another? (y/n): ', (ans) => {
                    if (ans.toLowerCase() === 'y') {
                        getTaskInput();
                    } else {
                        console.log('🚀 Roadmap updated.');
                        rl.close();
                    }
                });
            });
        });
    });
};

const injectTask = (title, desc, phaseNum) => {
    try {
        let content = fs.readFileSync(roadmapPath, 'utf8');
        const phaseHeader = `### PHASE ${phaseNum}`;
        // Clean task line: NO forced "ing"
        const taskLine = `* **${title}**${desc ? `: ${desc}` : ''}\n`;

        const phaseIndex = content.indexOf(phaseHeader);

        if (phaseIndex !== -1) {
            const contentAfterPhase = content.slice(phaseIndex + phaseHeader.length);
            const nextPhaseMatch = contentAfterPhase.match(/### PHASE \d+/);

            if (nextPhaseMatch) {
                const nextPhasePos = content.indexOf(nextPhaseMatch[0], phaseIndex + phaseHeader.length);
                content = content.slice(0, nextPhasePos).trimEnd() + '\n' + taskLine + '\n' + content.slice(nextPhasePos);
            } else {
                content = content.trimEnd() + '\n' + taskLine;
            }
            console.log(`✅ Injected into Phase ${phaseNum}`);
        } else {
            content = content.trimEnd() + `\n\n${phaseHeader}\n${taskLine}`;
            console.log(`✨ Created Phase ${phaseNum}`);
        }

        fs.writeFileSync(roadmapPath, content);
    } catch (err) {
        console.log('❌ Error writing to ROADMAP.md');
    }
};

getTaskInput();