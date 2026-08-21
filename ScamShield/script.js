// ==========================================
// SCAMSHIELD JAVASCRIPT
// ==========================================


// Current statistics

let messagesScanned = 247;

let threatsBlocked = 18;

let threatsToday = 3;

let safeMessages = 229;



// ==========================================
// OPEN SCANNER
// ==========================================

function openScanner() {

    document.getElementById("scannerWindow").style.display = "flex";

}



// ==========================================
// CLOSE SCANNER
// ==========================================

function closeScanner() {

    document.getElementById("scannerWindow").style.display = "none";

}



// ==========================================
// ANALYSE MESSAGE
// ==========================================

function analyseMessage() {


    let message =
        document.getElementById("messageInput").value;


    let result =
        document.getElementById("scanResult");



    // Check if the user entered anything

    if (message.trim() === "") {

        result.innerHTML = `

            <div class="scan-result warning-result">

                <div class="result-label">
                    SCAMSHIELD
                </div>

                <h2>
                    No message entered
                </h2>

                <p>
                    Please paste a message before
                    starting the analysis.
                </p>

            </div>

        `;

        return;

    }



    // Show analysing screen

    result.innerHTML = `

        <div class="scan-result">

            <div class="result-label">
                SCAMSHIELD AI
            </div>

            <h2>
                Analysing message...
            </h2>

            <p>
                Checking sender, language, links
                and suspicious patterns.
            </p>

        </div>

    `;



    // Wait 1.5 seconds to simulate AI analysis

    setTimeout(function() {

        detectScam(message);

    }, 1500);

}



// ==========================================
// SCAM DETECTION
// ==========================================

function detectScam(message) {


    let lowerMessage =
        message.toLowerCase();


    let scamWords = [

        "urgent",
        "verify",
        "account suspended",
        "click here",
        "winner",
        "won",
        "prize",
        "bank",
        "password",
        "otp",
        "login",
        "payment",
        "send money",
        "claim",
        "immediately",
        "congratulations"

    ];



    let suspiciousWords = 0;



    // Check the message for suspicious words

    for (let i = 0; i < scamWords.length; i++) {

        if (lowerMessage.includes(scamWords[i])) {

            suspiciousWords++;

        }

    }



    let result =
        document.getElementById("scanResult");



    // ==========================================
    // HIGH RISK
    // ==========================================

    if (suspiciousWords >= 3) {


        let riskScore =
            Math.min(98, 70 + suspiciousWords * 5);


        result.innerHTML = `

            <div class="scan-result danger-result">

                <div class="result-label">
                    🚨 THREAT DETECTED
                </div>

                <h2>
                    HIGH RISK
                </h2>

                <div class="result-score">
                    ${riskScore}% Scam Probability
                </div>

                <p>
                    ScamShield detected multiple
                    indicators commonly associated
                    with scam messages.
                </p>

                <p>

                    ⚠ Suspicious language detected<br>

                    ⚠ Possible impersonation<br>

                    ⚠ Urgency or pressure detected<br>

                    ⚠ Potential malicious request

                </p>

            </div>

        `;


        updateThreatStatistics();


        addThreatActivity();


        showThreatNotification();

    }



    // ==========================================
    // SUSPICIOUS
    // ==========================================

    else if (suspiciousWords >= 1) {


        result.innerHTML = `

            <div class="scan-result warning-result">

                <div class="result-label">
                    ⚠ SUSPICIOUS
                </div>

                <h2>
                    REVIEW REQUIRED
                </h2>

                <div class="result-score">
                    62% Risk
                </div>

                <p>
                    ScamShield detected some
                    suspicious characteristics.
                    Be careful before interacting
                    with this message.
                </p>

            </div>

        `;


        updateSafeScan();

    }



    // ==========================================
    // SAFE
    // ==========================================

    else {


        result.innerHTML = `

            <div class="scan-result safe-result">

                <div class="result-label">
                    ✓ SCAN COMPLETE
                </div>

                <h2>
                    LOW RISK
                </h2>

                <div class="result-score">
                    8% Scam Probability
                </div>

                <p>
                    ScamShield did not detect
                    significant scam indicators
                    in this message.
                </p>

            </div>

        `;


        updateSafeScan();

    }

}



// ==========================================
// UPDATE THREAT STATISTICS
// ==========================================

function updateThreatStatistics() {


    messagesScanned++;

    threatsBlocked++;

    threatsToday++;


    document.getElementById("messagesScanned").textContent =
        messagesScanned;


    document.getElementById("threatsBlocked").textContent =
        threatsBlocked;


    document.getElementById("threatsToday").textContent =
        threatsToday;

}



// ==========================================
// UPDATE SAFE SCAN
// ==========================================

function updateSafeScan() {


    messagesScanned++;

    safeMessages++;


    document.getElementById("messagesScanned").textContent =
        messagesScanned;


    document.getElementById("safeMessages").textContent =
        safeMessages;

}



// ==========================================
// ADD THREAT TO ACTIVITY
// ==========================================

function addThreatActivity() {


    let activityList =
        document.getElementById("activityList");


    let newActivity =
        document.createElement("div");


    newActivity.className =
        "activity-item";


    newActivity.innerHTML = `

        <div class="activity-icon danger">
            ⚠
        </div>

        <div class="activity-info">

            <strong>
                Threat Blocked
            </strong>

            <p>
                Scam message detected by AI
            </p>

        </div>

        <div class="activity-time">
            Just now
        </div>

    `;


    activityList.prepend(newActivity);

}



// ==========================================
// THREAT NOTIFICATION
// ==========================================

function showThreatNotification() {


    let notification =
        document.createElement("div");


    notification.style.position =
        "fixed";


    notification.style.right =
        "25px";


    notification.style.bottom =
        "25px";


    notification.style.width =
        "320px";


    notification.style.padding =
        "20px";


    notification.style.backgroundColor =
        "#2a1418";


    notification.style.border =
        "1px solid #70313a";


    notification.style.borderRadius =
        "12px";


    notification.style.color =
        "white";


    notification.style.zIndex =
        "2000";


    notification.innerHTML = `

        <strong style="color:#ff6b78;">
            🚨 SCAM DETECTED
        </strong>

        <p>
            ScamShield blocked a potentially
            dangerous message.
        </p>

        <small style="color:#8995a3;">
            Threat protection is active.
        </small>

    `;


    document.body.appendChild(notification);



    // Remove notification after 5 seconds

    setTimeout(function() {

        notification.remove();

    }, 5000);

}



// ==========================================
// SIDEBAR NAVIGATION (VIEW SWITCHING)
// ==========================================
// Every nav item with a data-view attribute swaps the
// visible panel in <main>. The "Scan Message" link is
// excluded on purpose — it keeps its own onclick="openScanner()".

function initNavigation() {

    let navLinks =
        document.querySelectorAll(".nav-item[data-view], a[data-view]");


    navLinks.forEach(function(link) {

        link.addEventListener("click", function(event) {

            event.preventDefault();

            let targetView =
                link.getAttribute("data-view");

            showView(targetView);

        });

    });

}


function showView(viewName) {


    // Hide every view, then show the one requested

    document.querySelectorAll(".view").forEach(function(view) {

        view.classList.remove("active");

    });


    let target =
        document.getElementById("view-" + viewName);


    if (target) {

        target.classList.add("active");

    }


    // Update the highlighted sidebar item to match,
    // regardless of which link triggered the switch
    // (dashboard nav item vs. the "View all" link, etc.)

    document.querySelectorAll(".nav-item").forEach(function(item) {

        item.classList.remove("active");

    });


    document.querySelectorAll('.nav-item[data-view="' + viewName + '"]').forEach(function(item) {

        item.classList.add("active");

    });

}



// ==========================================
// COVERAGE / SETTINGS TOGGLES
// ==========================================
// Delegated listener so it works for every .toggle on the
// page, including the ones inside the Protection and
// Settings panels, not just the dashboard widget.

function initToggles() {

    document.addEventListener("click", function(event) {

        let toggle =
            event.target.closest(".toggle");


        if (!toggle) {

            return;

        }


        let isActive =
            toggle.classList.toggle("active");


        toggle.textContent =
            isActive ? "ON" : "OFF";

    });

}



// ==========================================
// INITIALISE
// ==========================================

document.addEventListener("DOMContentLoaded", function() {

    initNavigation();

    initToggles();

});