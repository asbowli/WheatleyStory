const storyElement = document.getElementById("story");
const choicesElement = document.getElementById("choices");

// Define your story
const story = {
    start: {
        text: "You are born in West Africa in a small tribal community, food is scarce but the residents of the community manage to get by.<br>Years after you are born, while you are still a child, your chief takes you from your family and chooses to sell you and many others to the Oyinbo, or white people.",
        choices: [
            { text: "Attempt Escape", next: "escape" },
            { text: "Surrender Peacefully", next: "surr_young"}
        ]
    },
    escape: {
        text: "You manage to fool the senses of the Oyinbo and you make a run for it.<br>Now you have to decide where to run to.",
        choices: [
            { text: "Return to Your Home", next: "recapture" },
            { text: "Seek a Refugee Community", next: "refugee"},
            { text: "Try to fend for yourself", next: "lone_wolf"},
            { text: "Rely on another escapee", next: "betrayal"}
        ]
    },
    recapture: {
        text: "You go back to your hometown to find your family and try to go back to your life.<br>Not long after you reach your community, the chief and his warriors capture you again and return you to the Oyinbo.<br>They keep a close eye on you to prevent another escape.",
        choices: [
            { text: "There's Nothing We Can Do", next: "surr_young" }
        ]
    },
    refugee: {
        text: "After searching for a refugee community for days, which you had only heard about from the warriors in your community, you nearly starve before another refugee finds you unconscious.<br>Once you awaken, you find yourself in the refugee community you had been looking for.<br>The people in this community are worse off than you home, since they don't trade and are almost completely self-sufficient.<br>The leaders of the community offer to let you stay.",
        choices: [
            { text: "Stay", next: "refugee_life" },
            { text: "Return Home", next: "recapture"}
        ]
    },
    refugee_life: {
        text: "You choose to stay and are quickly given tasks to help out the refugee community.<br>One day you may be tending to plants and herbs learning from other escapees.<br>Another you may be helping clean the meat after a party of refugees luckily got ahold of a couple of rabbits.<br>Sometimes wild animals will take the lives of some refugees but that is to be expected.<br>You live out your life in the refugee camp, never satisfied but at least living, unlike others.<br>One day, a tribe finds your camp and raids it, killing some and capturing others.<br>You are amongst the captured, and are once again sold to Oyinbo.",
        choices: [
            { text: "There's Nothing We Can Do", next: "surr_young" }
        ]
    },
    lone_wolf: {
        text: "You choose to head out on your own, not knowing who you can trust. After all, your own leader sold you for a bag of spices.<br>Through your journey, most of your sustenance consists of grasses and herbs, and on the rare occasion you manage to catch a small animal like a rabbit, you are forced to eat its meat raw, swallong chunks of fur at a time.<br>You don't last long, eventually, a wild animal leaves an injury on you which leads to your death.",
        choices: [
            { text: "Self-Sufficient?", next: "end_meanless" },
        ]
    },
    betrayal: {
        text: "After evading the eslavers, you come across another person who claims to have escaped as well.<br>You choose to stick with them as they promise they know of a safe community where you'll be able to live your life freely again.<br>After night falls and you fall asleep, you feel a sudden jerk of your arm and awaken to a group of warriors.<br>Turns out, the escapee you had been traveling with was just another enslaver who specialized in catching other escapees.",
        choices: [
            { text: "There's Nothing We Can Do", next: "surr_young" }
        ]
    },
    surr_young: {
        text: "You are taken to a colonial outpost where several more people than your community could ever house were loaded onto boats bigger than any house you'd seen.<br>Eventually, you too are loaded into one of these boats where there is barely enough space for one to breathe.<br>Once the boat sets sail, you notice a man is standing eerily close to the edge, staring longingly at the dark ocean.",
        choices: [
            { text: "Approach the Man", next: "suicide_strt" },
            { text: "Ignore the Man", next: "arrv_Amer"}
        ]
    },
    suicide_strt: {
        text: "You ask the man what he's searching for in the water.<br>The man breaks away from his connection with the ocean, stares at you and says:<br><span class='quote'>Why, I'm searching for the only thing worth looking for. Freedom.</span><br>The man proceeds to tell you about his group's plan to fight for their freedom.<br>They will jump and offer their lives to the deep sea, so they may not be abused by their enslavers.",
        choices: [
            { text: "Join the Cause", next: "suicide" },
            { text: "Wish Them Luck", next: "arrv_Amer"}
        ]
    },
    suicide: {
        text: "If the stories of the other world are as bad as they say they are, then you choose to join the man's cause and seek freedom.<br>Not an hour later, you, along with 3 others, including the man, jump overboard into the dark sea and welcome freedom.",
        choices: [
            { text: "Real Freedom?", next: "end_meanless" }
        ]
    },
    arrv_Amer: {
        text: "After your boat arrives on a new world, you are quickly taken to the community of Boston, or as it is called in the new world, the town of Boston.<br>There, you are offered to the white person who offers the higher resources in exchange for you.<br>Once this process is over, you are quickly taken the the home of your new \"owner.\"<br>Although you are forced to work within the home, cleaning it or preparing food, you are given an option by your \"owner.\"",
        choices: [
            { text: "Learn to Read And Write", next: "phillis" },
            { text: "Refuse", next: "average" }
        ]
    },
    average: {
        text: "You refuse the opportunity to learn, you believe the more you know, the more complex things you'll be forced to do.<br>You continue to live your life, doing household chores.<br>Years pass and you barely interact with another enslaved person outside of when friends of your \"owner\" come to visit along with their servants.<br>You quickly grow depressed and you never have a family of your own.<br>At the ripe age of 35, you pass away exhausted.",
        choices: [
            { text: "Land of Opportunity?", next: "end_meanless" }
        ]
    },
    phillis: {
        text: "You choose to learn how to read an write. The children of your \"owner\" become your tutors.<br>You are fascinated by the words and the sentences they make once you learn to understand them and eventually learn to use words for your own means.<br>At age 14, you write your first poem. And many more after that, some which speak out about the incorrect nature of slavery, which you hope could reach the right audience.<br>",
        choices: [
            { text: "A Genius Artist", next: "phillis2" }
        ]
    },
    phillis2: {
        text: "You are recognized for your talents not only by those who hold ownership over you, but by their friends and eventually important people outside of Boston.<br>At the age of 20, you and your \"owner\" travel to London in order to treat you for an illness and to further your writing achievements.<br>In London, you meet the Lord Mayor and other important British persons.<br>Here you published a book containing your poems.<br>",
        choices: [
            { text: "Reached Stardom", next: "decline" }
        ]
    },
    decline: {
        text: "Some years after your poems are published in the form of a book, you are freed of esnalvement by your \"benefactors\"<br>Sadly, not many years after your newfound freedom, your benefactors pass away, and right after you married someone, something most enslaved in Boston did not have the luxury of doing.<br>The person you married was poor, like most freed enslaved, but you still started a family with them.",
        choices: [
            { text: "There Are No Happy Endings in Boston Town", next: "death" }
        ]
    },
    death: {
        text: "Of the three children you had with your spouse, 2 of them die. Infant mortality is already high, and it becomes higher when you can't afford a doctor or medicine for them.<br>Your spouse is encarcerated for failure to pay debts and you are left to raise the last child on your own.<br>You are forced to do the work you would have done as a slave had you not been offered education by your now dead benefactors.<br>Not long after, you come down with Pneumonia with a child on the way and die after bringing a new child into the world.",
        choices: [
            { text: "Phillis Weatley", next: "heroic_end" }
        ]
    },
    heroic_end: {
        text: "You have reached the end of your story, if you are reading this, then you chose the same path as Phillis Weatley, the first African-American author of a book of Poetry.<br>Although you could say her end was miserable, she still left her mark in history and accomplished something great.",
        choices: [
            { text: "Start over?", next: "start" }
        ]
    },
    end_meanless: {
        text: "You have reached the end of your story, if you are reading this, then you chose a path that many others have chosen, whether it be escaping from pursuers and dying not long after, seeking freedom before entering a lifelong cage, or realizing the life most slaves shipped to Boston endured.<br>Although you might consider this a meaningless end, it does not invalidate the pain, suffering, and discourse they had to go through every day they lived.",
        choices: [
            { text: "Start over?", next: "start" }
        ]
    },
};

// Render a scene
// Start the minigame when reaching the "minigame" node
function renderScene(scene) {
    storyElement.innerHTML = scene.text;
    choicesElement.innerHTML = "";

    scene.choices.forEach(choice => {
        const span = document.createElement("span");
        span.textContent = choice.text;
        span.onclick = () => renderScene(story[choice.next]);
        choicesElement.appendChild(span);
    });
}

// Start the game
renderScene(story.start);
