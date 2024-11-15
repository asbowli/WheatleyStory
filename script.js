const storyElement = document.getElementById("story");
const choicesElement = document.getElementById("choices");

// Define your story
const story = {
    start: {
        text: "You wake up in a dark forest. What do you do?",
        choices: [
            { text: "Look around", next: "look_around" },
            { text: "Stay still", next: "stay_still" }
        ]
    },
    look_around: {
        text: "You see a path leading out of the forest.",
        choices: [
            { text: "Follow the path", next: "follow_path" },
            { text: "Go back to sleep", next: "sleep" }
        ]
    },
    stay_still: {
        text: "You hear strange noises. What do you do?",
        choices: [
            { text: "Run", next: "run" },
            { text: "Hide", next: "hide" }
        ]
    },
    follow_path: { text: "You escape the forest. The end!", choices: [] },
    sleep: { text: "You are eaten by wolves. Game over.", choices: [] },
    run: { text: "You trip and fall. Game over.", choices: [] },
    hide: { text: "You survive the night. The end!", choices: [] }
};

// Render a scene
function renderScene(scene) {
    storyElement.textContent = scene.text;
    choicesElement.innerHTML = ""; // Clear old choices

    scene.choices.forEach(choice => {
        const span = document.createElement("span");
        span.textContent = choice.text;
        span.onclick = () => renderScene(story[choice.next]);
        choicesElement.appendChild(span);
    });
}

// Start the game
renderScene(story.start);
