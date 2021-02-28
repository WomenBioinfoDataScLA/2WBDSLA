const ham = document.getElementById('ham-list');
const cross = document.getElementById('cross-icon');
const navOptions = document.getElementById('nav-options');
const codeSection = document.getElementById("code-of-conduct-section");
const aboutSection = document.getElementById("about-inner");
const codeButton = document.getElementById("code-button-section");
const speakersButton = $("#speakers-nav-button");
const speakersSection = $('#speakers-section');

function disableElement(element) {
    element.classList.add('disable');
}

function enableElement(element) {
    element.classList.remove('disable');
}

function renderCodeCon() {
    const introDiv = document.createElement('div');
    const secDiv = document.createElement('div');
    const consequenceDiv = document.createElement('div');
    const unexpectedDiv = document.createElement('div');
    const reportDiv = document.createElement('div');
    const h2 = document.createElement('h2');
    const h3Security = document.createElement('h3');
    const h3Unexpected = document.createElement('h3');
    const h3Consequence = document.createElement('h3');
    const h3Report = document.createElement('h3');
    const pSecurity = document.createElement('p');
    const pUnexpected = document.createElement('p');
    const pConsequence = document.createElement('p');
    const pReport = document.createElement('p');
    const pIntro = document.createElement('p');
    const imgBottom = document.createElement('img');
    const imgTop = document.createElement('img');


    h2.innerHTML = "Code of Conduct";
    pIntro.innerHTML = 'Women in Bioinformatics and Data Science LA is a community congress intended for networking and collaboration in the scientific community. We value the participation of each member of this community and want all attendees to have an enjoyable and fulfilling experience. We are dedicated to providing a respectful, harassment-free community for everyone. We do not tolerate harassment or bullying of any community member in any form. This does not only extend to members to local Women in Bioinformatics and Data Science LA communities but to anyone who chooses to become involved in the larger Women in Bioinformatics and Data Science LA community of scientists, users, developers, and integrators through events or interactions. Therefore, we have created this code of conduct that all participants are expected to read and adhere to.';
    
    h3Security.innerHTML = "Security and expected behaviour during virtual events and workshops";
    pSecurity.innerHTML = 'Participants should be logged in the virtual conference using their full names. Any participant without appropriate identification and not registered will be removed from the session. If you need guidance on how to change your name in the conference ask one of the organizers and they will help you. Participants are expected to participate in an active and authentic way through a kind, considerate and respectful dialogue, thus contributing to the continuity of the community. Also, to be aware of their environment and the rest of the people who participate and notify the organization in case you observe any situation that is dangerous or that violates this Code of Conduct, even if it seems to have no consequences.';
    
    h3Unexpected.innerHTML = "Unexpected behaviour and forms of harassment and discrimination";
    pUnexpected.innerHTML = "Will be considered as unacceptable behavior:Offensive comments, such as those related to gender, gender identity, gender expression, sexual orientation, physical abilities, mental health, physical appearance, ethnicity or religion. Unwanted comments about a person's lifestyle choices or practices, including those related to food, health, work, parenting, or drug use. Intentional and incorrect use of chosen pronouns or name when referring to a person. Sexual images or comments in public or online spaces, deliberate intimidation, bullying, stalking, following, harassing photography or recording, sustained disruption of talks, IRC chats, electronic meetings, physical meetings or other events, inappropriate physical contact, or unwelcome sexual attention; private communication that does not stop when requested. Other forms of harassment and discriminatory behavior include, but are not limited to: offensive verbal comments related to gender, gender identity and expression, sexual orientation, ability, physical appearance, body size, race, ethnicity, religion, socioeconomic status, caste or creed and are considered unacceptable. If any of these behaviors is detected or reported, participants will be asked to stop and to comply immediately.";
    
    h3Consequence.innerHTML = "Consequences for Harassment and Discrimination";
    pConsequence.innerHTML = "If a participant engages in harassing behavior, representatives of the community may take reasonable action they deem appropriate, including warning the offender, expulsion from any Women in Bioinformatics and Data Science LA event, or expulsion from mailing lists, IRC chats, discussion boards and other electronic communications channels to resolve the issue. This may include expulsion from Women in Bioinformatics and Data Science LA conference.";
    
    h3Report.innerHTML = "How to Report Harassment and Discrimination";
    pReport.innerHTML = 'If you are being harassed, notice that someone else is being harassed, or have any other concerns, please act to intercede or ask for help from any member of the Women in Bioinformatics and Data Science LA community, IRC chat admins, website admins, or organizers/representatives of any physical events put on under the auspices of Women in Bioinformatics and Data Science LA. We encourage you to report any incident of harassment, discrimination, or unacceptable behavior as soon as possible. The Women in Bioinformatics and Data Science LA leadership team will take great care to ensure that the assistance provided meets the needs of attendees who were affected.';

    imgBottom.src = "./assets/img/Elementos_mujer 1.png" 
    imgBottom.alt = "code-img"
    imgBottom.classList = "code-img-women"

    introDiv.appendChild(h2);
    introDiv.appendChild(pIntro);
    
    secDiv.appendChild(h3Security);
    secDiv.appendChild(pSecurity);
    
    unexpectedDiv.appendChild(h3Unexpected);
    unexpectedDiv.appendChild(pUnexpected);
    
    consequenceDiv.appendChild(h3Consequence);
    consequenceDiv.appendChild(pConsequence);
    
    reportDiv.appendChild(h3Report);
    reportDiv.appendChild(pReport);


    codeSection.appendChild(introDiv);
    codeSection.appendChild(secDiv);
    codeSection.appendChild(unexpectedDiv);
    codeSection.appendChild(consequenceDiv);
    codeSection.appendChild(reportDiv);
    codeSection.appendChild(imgBottom);
}


const speakersList = [
{"name": "Daniela Robles",'img':'Daniela_Robles.png', "filiation": "UNAM - Mexico"},
{"name": "Janet Gonzalez","img":"Janneth_Gonzalez.png","filiation":"UNAM - Mexico"}
];

function renderSpeakersBios() {
    const pictsDivRow = $('<div class="bios-container"></div>')

    speakersList.forEach(element => {
        const speakerBio = $(`
        <figure class="speaker-bio"> 
            <img src="./assets/img/speakers/${element.img}" alt="${element.name}-img"> 
            <figcaption>${element.name}</figcaption>
            <figcaption>${element.filiation}</figcaption>
        </figure>`
        );
        speakerBio.appendTo(pictsDivRow);
    });

    pictsDivRow.appendTo(speakersSection);
}

cross.addEventListener("click", () => {
    disableElement(cross);
    enableElement(ham);
    disableElement(navOptions);
});


ham.addEventListener("click", () => {
    disableElement(ham);
    enableElement(cross);
    enableElement(navOptions);
});

codeButton.addEventListener("click", () => {
    disableElement(aboutSection);
    codeSection.classList.remove("disable");
    renderCodeCon();

})


speakersButton.on('click', () =>{
    disableElement(aboutSection);
    speakersSection.remove("disable");
    renderSpeakersBios();
})

