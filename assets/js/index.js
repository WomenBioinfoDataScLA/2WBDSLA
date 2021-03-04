const ham = document.getElementById('ham-list');
const cross = document.getElementById('cross-icon');
const navOptions = document.getElementById('nav-options');
const codeSection = document.getElementById("code-of-conduct-section");
const aboutSection = document.getElementById("about-inner");
const codeButton = document.getElementById("code-button-section");
const speakersButton = $("#speakers-nav-button");
const speakersSection = $('#speakers-section');
const sponsorsButton = $('#sponsors-nav-button');
const sponsorSection = $('#sponsorship-section');
const posterSection = $('#poster-section');
const posterButton = $('#poster-button');
const registrationSection = $('#registration-section');
const registrationButton = $('#registration-nav-button');
const committeeSection = $('#comittees-section');
const committeeButton = $('#comittees-nav-button');
const sponsorTitleSuport = document.getElementById('sponsors-tittle-suport');
const sponsorsLogosDiv = document.getElementById('sponsors-logos');
const orgasLogosDiv = document.getElementById('orgas-logos');


function disableElement(element) {
    element.classList.add('disable');
}

function enableElement(element) {
    element.classList.remove('disable');
}

function cleanBody() {
    disableElement(aboutSection);
    disableElement(sponsorsLogosDiv);
    disableElement(orgasLogosDiv);
    disableElement(sponsorTitleSuport);
    speakersSection.empty();
    $(codeSection).empty();
    sponsorSection.empty();
    posterSection.empty();
    committeeSection.empty();
    registrationSection.empty();

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
    const imgBottom2 = document.createElement('img');


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

    imgBottom.src = "./assets/img/hojas.png"
    imgBottom.alt = "code-img"
    imgBottom.classList = "code-img-left"

    imgBottom2.src = "./assets/img/hojas.png"
    imgBottom2.alt = "code-img"
    imgBottom2.classList = "code-img-right"

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
    codeSection.appendChild(imgBottom2);
}


const speakersList = [
    { "name": "Daniela Robles", 'img': 'Daniela_Robles_square.png', "filiation": "UNAM - Mexico" },
    { "name": "Janet Gonzalez", "img": "Janneth_Gonzalez.png", "filiation": "PUJ - Colombia" }
];

function renderSpeakersBios() {
    const pictsDivRow = $('<div class="bios-container"></div>');
    const imgLeft = $(`<img src="./assets/img/hojas.png" alt="hojas-left" class="speakers-img-left">`);
    const imgRight = $(`<img src="./assets/img/hojas.png" alt="hojas-right" class="speakers-img-right">`);

    speakersList.forEach(element => {

        const speakerBio = $(`
        <figure class="speaker-bio"> 
            <img src="./assets/img/speakers/${element.img}" alt="${element.name}-img"> 
            <figcaption class="caption-bio">${element.name}</figcaption>
            <figcaption class="sub-caption-bio">${element.filiation}</figcaption>
        </figure>`);
        speakerBio.appendTo(pictsDivRow);
    });

    pictsDivRow.appendTo(speakersSection);
    imgRight.appendTo(speakersSection);
    imgLeft.appendTo(speakersSection);
}


function renderSponsorshipSection() {
    const sponsorsSectionContent = $(`
    <div class="sponrship-content">
    <img src="./assets/img/Elementos_mujer 2.png" alt="hojas">
    <h2>Sponsorship opportunities</h2>
    <p>The Network of Women in Bioinformatics and Data
    Science LA is a community seeking to reduce the gender
    gap in STEM. This is an opportunity to support and
    promote the dissemination of the work carried out by
    women and leading dissidents in the fields of IT and
    academic research</p>
    <p> We offer a variety of sponsorship opportunities, including advertisement space in our conference program and website.
    For information on sponsorship opportunities, please download the sponsorship <a target=”_blank” href="https://drive.google.com/file/d/1myA94IjMknfAJIAqnQTTakabAooh5f7z/view?usp=sharing">brochure</a>
    If you need more information on sponsorship, please email: <a target=”_blank” href="#">womenbioinformaticsnetworkla@gmail.com</a></p>
    </div>`);

    sponsorsSectionContent.appendTo(sponsorSection);
}

function renderRegistrationSection() {
    const registrationContent = $(`
    <h2>FAQs Virtual Poster Session 2020</h2>
    <h3><strong>Who can send an abstract?</strong></h3>
    <p>This event is open to the entire community, anyone can send an abstract for the poster session and be selected for oral presentation. </p>
    <h3><strong>How will be the selection for oral presentation?</strong></h3>
    <p>All abstracts will be reviewed by 2 specialists in the field. According to their recommendations, the Scientific Committee will determine if the abstract is presented as oral or poster. </p>
    <h3><strong>Which will be the virtual poster session format?</strong></h3>
    <p>Virtual poster sessions will be done through a 10-minute live presentation in a virtual room. Every room will count with a host and a moderator. At the end of the presentations, 5 minutes discussions will be allowed in small groups. </p>
    <h3><strong>How is the format poster?</strong></h3>
    <p>Participants will receive from the official email account a template PowerPoint slide.</p>
    <h3><strong>Which topics does congress have?</strong></h3>
    <p>Deep Learning </p>
    <p>Data mining and big data analysis</p>

    <p>Chemoinformatics and Drug discovery</p>
    <p>Genomics and Evolution</p>
    <p>Systems Biology</p>
    <p>Structural Bioinformatics - Biomolecular Simulations</p>
    <p>Bioinformatics and Diseases</p>
    <p>Education</p>

    <hr style="border:2px solid white;">
    <hr style="border:2px solid white;">
    <h2>Volunteers</h2>
    <p>If you want to join the volunteers team for helping us during the event, pleas clomplete this <a target="_blank" href="#">form</a> and soon you will be contacted. Thank you!!</p>

    `);

    registrationContent.appendTo(registrationSection);
}

function renderKeyDatesSection() {
    const keydatesContent = $(``)
}


function renderPosterSessionSection() {
    const posterSessionContent = $(`
    <article>
        <h2>Virtual Poster session</h2>
        <p>We will hold a virtual poster session that will take place on Twitter and our web site. It will start one week before the conference (21 to 24th September 2020) and will continue until the end of the conference. All official posters will be
            retweeted by <a target="_blank" href="https://twitter.com/BioinfoLa">@BioinfoLa</a>. Oficial email account: <a href="#">womenbioinformaticsnetworkla@gmail.com</a></p>
    </article>
    <article>
        <h2>Instructions</h2>
        <p>Participants must create a 45 cm x 53 cm high-resolution image with all the poster information in English, using the background image <a target="_blank" href="#"> provided </a>by
            the organizing committee. Please send a copy of the poster to the conference official email account, using the Subject: Virtual Poster Session. The file name should be named with the last name of the first author and the poster number:
            “Velez_Rueda_Poster5.png”. <strong> Please send it before the 10th of September </strong>. To clearly explain your work to a broad technical audience, we recommend the following content for the image: Title, author list, affiliation, and
            the abstract: background, or motivation to your approach, method or techniques, results, conclusions, and any related references (Please see the poster bellow as example).
        </p>
        <p>Participants should post their posters on Twitter at the beginning of the conference using a single tweet, which should include the official poster image, with a brief explanation. In order to increase their visibility and associate them with
            the conference, please use the hashtags <strong>#VirtualPostersSession</strong> and <strong>#WBDS_LA</strong>. Please use the handle <a target="_blank" href="https://twitter.com/BioinfoLa">@BioinfoLa</a> as well so that we will receive
            a notification. Other suggestions for hashtags are <strong>#bioinformatics #datascience #WomenSTEM</strong> or the topics of the congress <strong>#DeepLearning #DataMining&BigDataAnalysis #Chemoinformatics&DrugDiscovery #Genomics&Evolution #SystemsBiology #StructuralBioinformatics #BiomolecularSimulations
                #Bioinformatics&Diseases #Education</strong>
        </p>
        <p>If the poster is associated with a preprint/publication, we advise you to post a second tweet with its url. </p>
        <p>In case you are in a country that does not allow for Twitter posting, please contact us and we will post it for you on the <a target="_blank" href="https://twitter.com/BioinfoLa">@BioinfoLa</a> page.</p>
        <p>You should also send a pre-record 3-5 minute presentation which will be uploaded to our <a target="_blank" href="https://www.youtube.com/watch?v=anq8YaRMQDo&feature=youtu.be">youtube channel</a>. If that is the case, please send it to the
            official email account. <strong> Please send it before the 10th of September </strong>. The prerecorded poster videos will be transmited on a virtual poster session and Open MIC track, with space for questions on live. You should also be around to reply to any comments that may arise.</p>
    </article>
    `);

    posterSessionContent.appendTo(posterSection);
}


function renderCommitteesSection() {
    const committeeContent = $(`
    <h2>Scientific Committee Chairs</h2>
    <ul>
        <li>Wendy González,  Universidad de Talca - CBSM, Chile</li>
        <li>Cristina Marino-Buslje, Fundación Instituto Leloir - CONICET, Argentine</li>
    </ul>

    <h2>Executive Committee</h2>
    <ul>
        <li>Ana Julia Velez Rueda, Universidad Nacional de Quilmes - CONICET, Argentine</li>
        <li>Lucy Jiménez, Universidad de Los Andes, Colombia</li>
        <li>Cristina Marino-Buslje, Fundación Instituto Leloir - CONICET, Argentine</li>
        <li>Wendy González,  Universidad de Talca - CBSM, Chile</li>
        <li>Liliane Conteville, IOC, Brazil</li>
        <li>Ivana Feldfeber, Observatorio de Datos con Perspectiva de Género, Argentine</li>
        <li>Agustina Nardo, CIDCA- CONICET, Argentine</li>
        <li>Mercedes Didier Garnham, Genetics and bioinformatics Lab, IIB-UNSAM, Argentine</li>
    </ul>
    `);

    committeeContent.appendTo(committeeSection)
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
    cleanBody();
    renderCodeCon();
})


speakersButton.on('click', () => {
    cleanBody();
    renderSpeakersBios();
})


posterButton.on('click', () => {
    event.preventDefault()
    cleanBody();
    renderPosterSessionSection();
})

committeeButton.on('click', () => {
    event.preventDefault()
    cleanBody();
    renderCommitteesSection();
})

sponsorsButton.on('click', () => {
    cleanBody();
    renderSponsorshipSection();
})

registrationButton.on('click', () => {
    cleanBody();
    renderRegistrationSection();
})