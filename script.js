var audio = new Audio('assets/sentmessage.mp3');
var contactString = `
<div class='social'> 
    <a target='_blank' href='tel:+919457876920'> 
        <div class='socialItem' id='call'>
            <img class='socialItemI' src='images/phone.svg'/>
            <label class='number'>9457876920</label>
        </div> 
    </a> 
    <a href='mailto:skashinwar@gmail.com'> 
        <div class='socialItem'>
            <img class='socialItemI' src='images/gmail.svg' alt=''>
        </div> 
    </a> 
    <a target='_blank' href='https://github.com/Saurabhss2029'> 
        <div class='socialItem'>
            <img class='socialItemI' src='images/github.svg' alt=''>
        </div> 
    </a> <a target='_blank' href='https://wa.me/919457876920'> 
        <div class='socialItem'>
            <img class='socialItemI' src='images/whatsapp.svg' alt=''>
        </div> 
    </a> 
    <a target='_blank' href='https://t.me/Prozpekt_20'> 
        <div class='socialItem'>
            <img class='socialItemI' src='images/telegram.svg' alt=''>
        </div> 
    </a> 
    <a target='_blank' href='https://www.instagram.com/i__saurabh_chaudhary'> 
        <div class='socialItem'>
            <img class='socialItemI' src='images/instagram.svg' alt=''> 
        </div> 
    </a> 
    <a href='https://www.linkedin.com/in/skashinwar' target='_blank' rel='noopener noreferrer'> 
        <div class='socialItem'>
            <img class='socialItemI' src='images/linkedin.svg' alt=''>
        </div> 
    </a> 
</div>`;
var resumeString = "<img src='images/resume_thumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>saurabh_resume.pdf</label></div><a href='assets/saurabh_resume.pdf' download='saurabh_resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";

var addressString = `<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.273220409675!2d77.4958458!3d28.7526051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf47204fb9241%3A0xd11ed4123c7691fe!2sKIET%20GROUP%20OF%20INSTITUTIONS!5e0!3m2!1sen!2sin!4v1715937980000!5m2!1sen!2sin' class='map' width='100%' height='300' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe></div><label class='add'><address>KIET Group of Institutions<br>Ghaziabad<br>Uttar Pradesh, INDIA 201206</address></label>`;


function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}

function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    x.style.display = x.style.display === 'flex' ? 'none' : 'flex';
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    x.style.display = x.style.display === 'flex' ? 'none' : 'flex';
}

function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") return;
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Saurabh Kumar Kashinwar</a>.</span><br><br>I am a Computer Science Engineering student at <span class='bold'>KIET Group of Institutions, Ghaziabad 👨🏻‍💻📚</span><br><br>I am eager to hear about potential career opportunities, so I would be pleased to chat about job openings in the engineering sphere.<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>I am currently pursuing B.Tech degree in Computer Science Engineering.<br><br>I can comfortably write code in following languages :<br><span class='bold'>Java<br>Typescript<br>Java<br>C<br>JavaScript<br>Python<br>CSS<br>HTML</span><br><br>I've experience with the following frameworks :<span class='bold'><br>React<br>Node.js<br>Express<br>MongoDB</span><br><br>I use <span class='bold'>Linux</span> as daily driver.<br>Favourite IDE: VSCode</span>");
            break;
        case "education":
    sendTextMessage(
    "I am currently pursuing B.Tech in Computer Science Engineering from KIET Group of Institutions, Ghaziabad<br>" +
    "Passing Year: 2026<br><br>" +
    "Academic Background:<br>" +
    "• Class 12 – Milton Public School, Agra – 91.2%<br>" +
    "• Class 10 – Milton Public School, Agra – 91%"
);

            break;
        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 This portfolio website is built using HTML, CSS and JavaScript from SCRATCH!<br><br>👩🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https://github.com/Saurabhss2029'><span class='bold'>Saurabh Kumar Kashinwar</a> with ❤️</span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/Saurabhss2029'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }
}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}

function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry...";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
