//@ts-nocheck

import favicon from './client/toCDN/favicon.ico';

export function template(title, content = '') {
    let scripts = '';
    if (content) {
        scripts = `
                <script src="/client.js"></script>
                `;
    } else {
        scripts = `<script src="/bundle.js"></script> `;
    }
    let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
                <link rel="shortcut icon" href="favicon.ico">
              </head>
              <body style="margin: 0">
                <div class="content">
                   <div id="app" class="wrap-inner">
                      ${content}
                   </div>
                </div>
                  ${scripts}
              </body>
              `;
    return page;
}
