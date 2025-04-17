const fs = require('fs');

test('Check for description in HTML', () => {
    const html = fs.readFileSync('./index.html', 'utf8');
    expect(html).toMatch(/<i><b>Gerny Feliz<\/b>\s*<\/i><br>Matrícula: 2015-3109/);
});

test('Check for repository button', () => {
    const html = fs.readFileSync('./index.html', 'utf8');
    expect(html).toMatch(/https:\/\/github\.com\/ItlaGRD\/PracticaFinal_DevOps\.git/);
});
