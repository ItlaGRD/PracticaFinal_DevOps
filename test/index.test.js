const fs = require('fs');
test('Check for description in HTML', () => {
    const html = fs.readFileSync('./index.html', 'utf8');
    expect(html).toMatch(/Gerny Feliz Matrícula: 2015-3109/);
});

