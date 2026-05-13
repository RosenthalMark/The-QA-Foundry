function saveLog() {
    const site = document.getElementById('site-select').value;
    const notes = document.getElementById('bug-notes').value;
    const date = new Date().toLocaleDateString();
    const content = `# TEST_LOG: ${site}\nDate: ${date}\n\n## Findings:\n${notes}`;
    const blob = new Blob([content], { type: 'text/markdown' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `log_${site}_${Date.now()}.md`;
    a.click();
}