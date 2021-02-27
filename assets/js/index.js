const ham = document.getElementById('ham-list');
const cross = document.getElementById('cross-icon');
const navOptions = document.getElementById('nav-options');
const codeSection = document.getElementById("code-of-conduct-section");
const aboutSection = document.getElementById("about-inner");
const codeButton = document.getElementById("code-button-section");

function disableElement(element) {
    element.classList.add('disable');
}

function enableElement(element) {
    element.classList.remove('disable');
}

function renderCodeCon() {
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

    h2.innerHTML = "Code of Conduct";
    h3Security.innerHTML = "Security and expected behaviour during virtual events and workshops";
    h3Unexpected.innerHTML = "Unexpected behaviour and forms of harassment and discrimination";
    h3Consequence.innerHTML = "Consequences for Harassment and Discrimination";
    h3Report.innerHTML = "How to Report Harassment and Discrimination";
    pIntro.innerHTML = 'Women in Bioinformatics and Data Science LA is a community congress intended for networking and collaboration in the scientific community. We value the participation of each member of this community and want all attendees to have an enjoyable and fulfilling experience. We are dedicated to providing a respectful, harassment-free community for everyone. We do not tolerate harassment or bullying of any community member in any form. This does not only extend to members to local Women in Bioinformatics and Data Science LA communities but to anyone who chooses to become involved in the larger Women in Bioinformatics and Data Science LA community of scientists, users, developers, and integrators through events or interactions. Therefore, we have created this code of conduct that all participants are expected to read and adhere to.';
    pConsequence.innerHTML = "If a participant engages in harassing behavior, representatives of the community may take reasonable action they deem appropriate, including warning the offender, expulsion from any Women in Bioinformatics and Data Science LA event, or expulsion from mailing lists, IRC chats, discussion boards and other electronic communications channels to resolve the issue. This may include expulsion from Women in Bioinformatics and Data Science LA conference.";
    pReport.innerHTML = 'If you are being harassed, notice that someone else is being harassed, or have any other concerns, please act to intercede or ask for help from any member of the Women in Bioinformatics and Data Science LA community, IRC chat admins, website admins, or organizers/representatives of any physical events put on under the auspices of Women in Bioinformatics and Data Science LA. We encourage you to report any incident of harassment, discrimination, or unacceptable behavior as soon as possible. The Women in Bioinformatics and Data Science LA leadership team will take great care to ensure that the assistance provided meets the needs of attendees who were affected.';
    pUnexpected.innerHTML = "Will be considered as unacceptable behavior:Offensive comments, such as those related to gender, gender identity, gender expression, sexual orientation, physical abilities, mental health, physical appearance, ethnicity or religion. Unwanted comments about a person's lifestyle choices or practices, including those related to food, health, work, parenting, or drug use. Intentional and incorrect use of chosen pronouns or name when referring to a person. Sexual images or comments in public or online spaces, deliberate intimidation, bullying, stalking, following, harassing photography or recording, sustained disruption of talks, IRC chats, electronic meetings, physical meetings or other events, inappropriate physical contact, or unwelcome sexual attention; private communication that does not stop when requested. Other forms of harassment and discriminatory behavior include, but are not limited to: offensive verbal comments related to gender, gender identity and expression, sexual orientation, ability, physical appearance, body size, race, ethnicity, religion, socioeconomic status, caste or creed and are considered unacceptable. If any of these behaviors is detected or reported, participants will be asked to stop and to comply immediately.";
    pSecurity.innerHTML = 'Participants should be logged in the virtual conference using their full names. Any participant without appropriate identification and not registered will be removed from the session. If you need guidance on how to change your name in the conference ask one of the organizers and they will help you. Participants are expected to participate in an active and authentic way through a kind, considerate and respectful dialogue, thus contributing to the continuity of the community. Also, to be aware of their environment and the rest of the people who participate and notify the organization in case you observe any situation that is dangerous or that violates this Code of Conduct, even if it seems to have no consequences.';

    codeSection.appendChild(h2);
    codeSection.appendChild(pIntro);
    codeSection.appendChild(h3Security);
    codeSection.appendChild(pSecurity);
    codeSection.appendChild(h3Unexpected);
    codeSection.appendChild(pUnexpected);
    codeSection.appendChild(h3Consequence);
    codeSection.appendChild(pConsequence);
    codeSection.appendChild(h3Report);
    codeSection.appendChild(pReport);
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