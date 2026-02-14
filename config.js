// ╔══════════════════════════════════════════════════════════════╗
// ║  VALENTINE CONFIG — Edit this file to personalize your site ║
// ╚══════════════════════════════════════════════════════════════╝

const VALENTINE_CONFIG = {

    // Browser tab title
    pageTitle: "Happy Valentine's Day 💕",

    // Scene 1 — Landing page
    greeting: "Hey Beautiful...",
    subtext: "I have something to ask you",

    // Scene 3 — Celebration (after they click "Yes!")
    coupleNames: "Your Name & Their Name",
    personalMessage:
        "Every moment with you is magical.<br>" +
        "Here's to many more together.",

    // Quote — displayed below the personal message
    quote: {
        text: "\"You are my today and all of my tomorrows.\"",
        attribution: "— Leo Christopher"
    },

    // Date reveal section
    dateLabel: "Save the date",
    dateText: "Saturday evening 🌹",

    // Closing line
    closingMessage: "Get ready for a special evening! ✨",

    // Easter Egg — Tap the heart 5 times to reveal
    // Set to null to disable the easter egg entirely
    easterEgg: {
        title: "Where it all began...",
        subtitle: "Our first conversation",
        footer: "...and the rest is history 💕",
        messages: [
            { sender: "You",  text: "Hey! How's it going?", type: "sent" },
            { sender: "Them", text: "Hi! I'm good, you?",   type: "received" },
            { sender: "You",  text: "Better now that we're talking 😊", type: "sent" },
            { sender: "Them", text: "Smooth 😄",            type: "received" }
        ]
    }
};
