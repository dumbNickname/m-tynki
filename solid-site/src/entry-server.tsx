// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="pl-PL">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <base href="/" />
          <link rel="icon" href="images/mtynk-ludzik-gladziolit-300x300-1-150x150.png" sizes="32x32" />
          <link rel="icon" href="images/mtynk-ludzik-gladziolit-300x300-1.png" sizes="192x192" />
          <link rel="apple-touch-icon" href="images/mtynk-ludzik-gladziolit-300x300-1.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Plus+Jakarta+Sans:wght@600&display=swap" rel="stylesheet" />
          <script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/a9dfc722306b5abf286d1dee/script.js"></script>
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
