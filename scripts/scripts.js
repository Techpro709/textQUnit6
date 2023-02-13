var titlecard = [
    {
        title1: `Animation`,
        title2: `Text Question Unit 6`,
        name: `Zakariah Y.`
    }
];

var mycards = [
    {
        txt: {
            tag: `h4`,
            txt: `Choose one of Newton’s Three Laws of Motion OR Newton’s Law of Gravity and explain what that Law states (in your own words) and why it is important and relevant to the world `,
            classes: `floating`,
        },
        txt2: {
            tag: `p`,
            txt: `When an object is in motion unless it is stopped or changed, it will stay in motion. It is important because otherwise there technically we would fly forever`,
            classes: `lead`,
        }
    },
    {
        txt: {
            tag: `h4`,
            txt: `Discuss ways to give an object motion in animation, and describe the ways that objects move in animation.`,
            classes: `floating`,
        },
        txt2: {
            tag: `p`,
            txt: `You might move the background and keep the object in the center to show it is moving, or you could keep the background still and let the object move over the screen.`,
            classes: `lead`
        }
    },
    {
        txt: {
            tag: `h4`,
            txt: `The unit discusses the importance of a character’s eyes in expressing their feelings and emotions. Imagine that you have a character with only black dots for eyes.`,
        },
        txt2: {
            tag: `h5`,
            txt: `How might this impact your character or story? What other ways could you express this character’s emotions?`,
            classes: `floating`
        },

        txt3: {
            tag: `p`,
            txt: `If a character had dots for eyes, then you couldn’t show as well the emotions for example eyes tearing up might be hard and so is the pleading eyes animation.`,
            classes: `lead`
        }
    },
    {
        txt: {
            tag: `h4`,
            txt: `How might observing the world and people around you improve your animation skills?`,
        },
        txt2: {
            tag: `h5`,
            txt: `Explain`,
            classes: `floating`
        },

        txt3: {
            tag: `p`,
            txt: `You might see different behaviors just like how people walk.`,
            classes: `lead`
        }
    },
    {
        txt: {
            tag: `h4`,
            txt: `From everything that you have learned about movement in animation, what aspect of movement do you think would be the most difficult to implement and why?`,
        },
        txt2: {
            tag: `h5`,
            txt: `How could you potentially master this aspect of motion in animation? Explain.`,
            classes: `floating`
        },

        txt3: {
            tag: `p`,
            txt: `Well probably the proper gravity in the world. Kind of hard for me simulate.`,
            classes: `lead`
        }
    },
];









// The Logic \/

function loadtitlecard() {
    for (var titles of titlecard) {
        document.getElementById('main').innerHTML += `
<div class="bg-text" data-aos="flip-down" data-aos-duration="1000">
        <h3>${titles.title1}</h3>
        <h4>${titles.title2}</h4>
        <h5>${titles.name}</h5>
        <br />
        <p class="lead floating">Scroll</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chevron-double-down floating" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
          <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
        </svg>
      </div>
`
    }
}


function load() {
    for (var card in mycards) {
        var cardText = [];

        var obj = mycards[card];
        for (var text in obj) {
            console.log(obj);
            cardText += `
            <${obj[text].tag} class="${obj[text].classes}">${obj[text].txt}</${obj[text].tag}>`;
        }
        document.getElementById("main").innerHTML += `
        <div class="bg-text" data-aos="flip-down" data-aos-duration="1000">
        ${cardText}
        </div>`;
    }

    document.getElementById("main").innerHTML += `<div>Built by ProtonZ With &hearts;</div>`;
}
