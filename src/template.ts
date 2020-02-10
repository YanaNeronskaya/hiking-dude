//@ts-nocheck

export function template(title, initialState = {}, content = '') {
    let scripts = '';
    if (content) {
        scripts = ` <script>
                   window.__STATE__ = ${JSON.stringify(initialState)}
                </script>
                <script src="/client.js"></script>
                `;
    } else {
        scripts = `<script src="/bundle.js"> </script> `;
    }
    let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
              </head>
              <body>
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
