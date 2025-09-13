module.exports = {
    name: "about",
    run: async ({ sock, msg }) => {
        const from = msg.key.remoteJid;

        const text = `
🤖 *Fouini-Bot*
Version : 1.1.0
Auteur : FOUINI
Description : Bot WhatsApp multifonctions basé sur Baileys
⚡ Fonctions : Audio, Sticker, Mini-jeux, Admin, Utilitaires et plus

📱 Suivez l'auteur :
- GitHub : https://github.com/Lafouine2
- TikTok : https://www.tiktok.com/@fouini_the_king
- LinkedIn : https://www.linkedin.com/in/dev-fouini-272887378
        `;

        await sock.sendMessage(from, { text });
    }
};