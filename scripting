function checkPhoneNumber() {

    const phoneNumber = document
        .getElementById("phoneInput")
        .value;

    const result = document
        .getElementById("phoneResult");


    result.classList.remove(
        "hidden",
        "low-risk",
        "medium-risk",
        "high-risk"
    );


    // Basic validation

    if (phoneNumber.length < 8) {

        result.classList.add("medium-risk");

        result.innerHTML = `
            <h3>⚠️ Invalid Number</h3>

            <p>
                Please enter a valid phone number.
            </p>
        `;

        return;

    }


    /*
        Temporary example database.

        Later, this will be replaced by
        a real Java database.
    */

    const reportedNumbers = {

        "+27123456789": {
            reports: 42,
            category: "Phishing"
        },

        "+27811234567": {
            reports: 18,
            category: "Spam"
        },

        "+27721234567": {
            reports: 67,
            category: "Scam Calls"
        }

    };


    const cleanNumber = phoneNumber.replace(/\s/g, "");


    if (reportedNumbers[cleanNumber]) {

        const numberData =
            reportedNumbers[cleanNumber];


        result.classList.add("high-risk");


        result.innerHTML = `

            <h3>⚠️ POSSIBLE SCAM NUMBER</h3>

            <p>
                <strong>Number:</strong>
                ${cleanNumber}
            </p>

            <p>
                <strong>User Reports:</strong>
                ${numberData.reports}
            </p>

            <p>
                <strong>Reported Category:</strong>
                ${numberData.category}
            </p>

            <br>

            <p>
                Be cautious when communicating with this number.
            </p>

        `;

    }

    else {

        result.classList.add("low-risk");

        result.innerHTML = `

            <h3>✓ NO REPORTS FOUND</h3>

            <p>
                No reports currently exist for:
                <strong>${cleanNumber}</strong>
            </p>

            <br>

            <p>
                This does not guarantee that the number is safe.
                It may simply not have been reported yet.
            </p>

        `;

    }

}