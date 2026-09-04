// LISTA DEI TUOI BRANI (Controlla che i nomi dei file siano uguali a quelli caricati)
const mediaTracks = [
    { title: "Lo-fi Orchestra — In-Game Seamless Loop", file: "assets/audio/media/Lo-fi Orchestra — In-Game Seamless Loop.mp3", duration: "1:02" },
    { title: "Industrial Metal — Organic Fps Main Title", file: "assets/audio/media/Industrial Metal — Fps Main Title.mp3", duration: "1:03" },
    { title: "Modern Orchestral Animation — Film Score", file: "assets/audio/media/Modern Orchestral Animation — Film Score.mp3", duration: "0:28" },
    { title: "Melodic Techno — In-Game Seamless Loop", file: "assets/audio/media/Melodic Techno — In-Game Seamless Loop.mp3", duration: "0:42" },  
    { title: "Fantasy Adventure — 3 × 30s Adaptive Loops", file: "assets/audio/media/Fantasy Adventure — 3 × 30s Adaptive Loops.mp3", duration: "1:40" },
    { title: "Edm Future Bass — Commercial AD Score", file: "assets/audio/media/Edm Future Bass — Commercial Score.mp3", duration: "0:34" },
    { title: "Cinematic Ethnic — Audiobook Score", file: "assets/audio/media/Edm Future Bass — Cinematic Ethnic — Audiobook Score.mp3", duration: "0:26" },
];

const prodTracks = [
    { title: "Cinematic Pop Trailer — Mobile Legends", file: "assets/audio/production/Cinematic Pop Trailer — Mobile Legends.mp3", duration: "0:45" },
    { title: "Alternative Rock - Studio Production", file: "assets/audio/production/Alternative Rock - Studio Production.mp3", duration: "0:49" },
    { title: "Modern Pop — Studio Accantus", file: "assets/audio/production/Modern Pop — Studio Accantus.mp3", duration: "0:35" },
    { title: "Hip Hop — Beatmaking", file: "assets/audio/production/Hip Hop — Beatmaking.mp3", duration: "0:40" },
];

// RECOGNITION (Recensioni)
const reviews = [
    { name: "J.", role: "Singer", text: "Giorgio is exceptionally talented. His ability to interpret my wishes is incredible. I appreciate every aspect of working with Giorgio. He is polite, responsive, supportive and has gone above and beyond on every project. I am very grateful to have found such a gifted musician and producer." },
    { name: "S.", role: "Film Director", text: "Incredible detailed conversations before work began, discovering different possibilities and very fast and understanding with revision requests - PERFECT!" },
    { name: "G.", role: "Rapper", text: "What an incredible beat Giorgio made - for a demanding, difficult project with many twists and turns - a world-class collaborator!" },
    { name: "O.", role: "Game Developer", text: "Delivered incredible work for our upcoming game, provided insights on the soundtracks and delivered amazing results before the deadline in a professional and kind manner. Thank you!" },
    { name: "J.", role: "Documentary Filmaker", text: "Literally the best. I was blown away and needed nothing different. He will be assisting for entire projects." },
    { name: "L.", role: "Content Creator", text: "Giorgio is extremely talented composer and musician and absolutely wonderful to work with. He understood right away what I needed, and delivered exactly what I wanted. Communicating with him is easy, he makes sure both understand each other, and tells you exactly what he can deliver, and then goes and does it. If you need compelling and emotional cinematic music, he is your guy!" },
    { name: "J.", role: "Singer", text: "Giorgio is exceptionally talented. His ability to interpret my wishes is incredible. I appreciate every aspect of working with Giorgio. He is polite, responsive, supportive and has gone above and beyond on every project. I am very grateful to have found such a gifted musician and producer." },
    { name: "S.", role: "Music Producer", text: "Giorgio is an absolute PRO when it comes to composing! The piece he created for me was absolutely beautiful. His professionalism, creativity, and musicality truly shine through, and working with him was a breeze—polite, cooperative, and delivered right on time. Highly recommend! 🙌" },
    { name: "S.", role: "Game Developer", text: "Delivered the project ahead of schedule with some great work and care for the project. Deep knowledge of musicality and direction makes working with Giorgio a great experience." },
    { name: "S.", role: "Songwriter", text: "Giorgio is like a hidden gem you're thrilled to discover, leaving you torn between keeping it a secret or shouting it from the rooftops. Consider this my quiet shout of appreciation. I won't be mad if you don't hear me." },
    { name: "T.", role: "Music Producer", text: "Another project working with Giorgio, and you will not find a more professional master craftsman. Very meticulous and a perfectionist. Always an honour to work with you. ❤️" },
    { name: "G.", role: "Rapper", text: "The musical genius outdoes himself yet again - BRAVO!" },
    { name: "A.", role: "Podcast Creator", text: "Giorgio was such a pleasure to work with. I was blown away at the level of professionalism, attention to detail, communication and their talent. I would highly recommend this seller and look forward to working with them again in the future. The finished product was more than I could have hoped for. Thank you!"},

];

// Funzione Bio More
document.getElementById('moreBtn').addEventListener('click', function() {
    const extra = document.getElementById('extraBio');
    if (extra.style.display === "block") {
        extra.style.display = "none";
        this.innerText = "MORE +";
    } else {
        extra.style.display = "block";
        this.innerText = "LESS -";
    }
});

// [Qui aggiungerò il codice per far funzionare i player e il carosello una volta caricati i file]
