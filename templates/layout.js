module.exports = (title, style, body, scripts) => `
    <!DOCTYPE html>
    <html lang="en">
    <style>${style}</style>
    <head>
        <meta charset="UTF-8" />
        <title>${title}</title>
    </head>
    <body>${body}</body>
    ${scripts}
    </html>
`;
