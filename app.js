var jobs = [
    {
        id: 1,
        company: "Mobile First Corp",
        position: "React Native Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$130,000 - $175,000",
        description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
        status: "Not Applied"
    },
    {
        id: 2,
        company: "WebFlow Agency",
        position: "Web Designer & Developer",
        location: "Los Angeles, CA",
        type: "Part-time",
        salary: "$80,000 - $120,000",
        description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
        status: "Not Applied"
    },
    {
        id: 3,
        company: "DataViz Solutions",
        position: "Data Visualization Specialist",
        location: "Boston, MA",
        type: "Full-time",
        salary: "$125,000 - $165,000",
        description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
        status: "Not Applied"
    },
    {
        id: 4,
        company: "CloudFirst Inc",
        position: "Backend Developer",
        location: "Seattle, WA",
        type: "Full-time",
        salary: "$140,000 - $190,000",
        description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
        status: "Not Applied"
    },
    {
        id: 5,
        company: "Innovation Labs",
        position: "UI/UX Engineer",
        location: "Austin, TX",
        type: "Full-time",
        salary: "$110,000 - $150,000",
        description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
        status: "Not Applied"
    },
    {
        id: 6,
        company: "MegaCorp Solutions",
        position: "JavaScript Developer",
        location: "New York, NY",
        type: "Full-time",
        salary: "$130,000 - $170,000",
        description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
        status: "Not Applied"
    },
    {
        id: 7,
        company: "StartupXYZ",
        position: "Full Stack Engineer",
        location: "Remote",
        type: "Full-time",
        salary: "$120,000 - $160,000",
        description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
        status: "Not Applied"
    },
    {
        id: 8,
        company: "TechCorp Industries",
        position: "Senior Frontend Developer",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$130,000 - $175,000",
        description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
        status: "Not Applied"
    },
    {
        id: 9,
        company: "Mobile First Corp",
        position: "React Native Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$130,000 - $175,000",
        description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
        status: "Not Applied"
    }
];

var currentTab = "All";

showCards();
updateCounts();


function showCards() {
    var container = document.getElementById("cards-container");
    var emptyState = document.getElementById("empty-state");

    container.innerHTML = "";

    var filteredJobs = [];

    if (currentTab == "All") {
        filteredJobs = jobs;
    } else if (currentTab == "Interview") {
        for (var i = 0; i < jobs.length; i++) {
            if (jobs[i].status == "Interview") {
                filteredJobs.push(jobs[i]);
            }
        }
    } else if (currentTab == "Rejected") {
        for (var i = 0; i < jobs.length; i++) {
            if (jobs[i].status == "Rejected") {
                filteredJobs.push(jobs[i]);
            }
        }
    }

    document.getElementById("jobs-count-text").innerText = filteredJobs.length + " jobs";

    if (filteredJobs.length == 0) {
        emptyState.classList.remove("hidden");

        if (currentTab == "Interview") {
            document.getElementById("empty-icon").innerText = "🎯";
            document.getElementById("empty-title").innerText = "No jobs available";
            document.getElementById("empty-sub").innerText = "Jobs you mark for interview will appear here";
        } else if (currentTab == "Rejected") {
            document.getElementById("empty-icon").innerText = "📋";
            document.getElementById("empty-title").innerText = "No jobs available";
            document.getElementById("empty-sub").innerText = "Check back soon for new job opportunities";
        }
    } else {
        emptyState.classList.add("hidden");

        for (var j = 0; j < filteredJobs.length; j++) {
            var job = filteredJobs[j];

            var statusLabel = "";
            if (job.status == "Not Applied") {
                statusLabel = "<p class='status-text'>Not Applied</p>";
            } else if (job.status == "Interview") {
                statusLabel = "<p class='status-text interview'>Interview</p>";
            } else if (job.status == "Rejected") {
                statusLabel = "<p class='status-text rejected'>Rejected</p>";
            }

            var interviewActive = "";
            var rejectedActive = "";

            if (job.status == "Interview") {
                interviewActive = "active";
            }
            if (job.status == "Rejected") {
                rejectedActive = "active";
            }

            var cardHTML = `
                <div class="job-card" id="card-` + job.id + `">
                    <div class="card-top">
                        <div>
                            <p class="company-name">` + job.company + `</p>
                            <p class="job-title">` + job.position + `</p>
                        </div>
                        <button class="delete-btn" onclick="deleteJob(` + job.id + `)">✕</button>
                    </div>

                    <div class="job-info">
                        <span>📍 ` + job.location + `</span>
                        <span>•</span>
                        <span>` + job.type + `</span>
                        <span>•</span>
                        <span>` + job.salary + `</span>
                    </div>

                    ` + statusLabel + `

                    <p class="job-desc">` + job.description + `</p>

                    <div class="card-buttons">
                        <button class="btn-interview ` + interviewActive + `" onclick="markInterview(` + job.id + `)">interview</button>
                        <button class="btn-rejected ` + rejectedActive + `" onclick="markRejected(` + job.id + `)">Rejected</button>
                    </div>
                </div>
            `;

            container.innerHTML = container.innerHTML + cardHTML;
        }
    }
}

function markInterview(id) {
    for (var i = 0; i < jobs.length; i++) {
        if (jobs[i].id == id) {
            if (jobs[i].status == "Interview") {
                jobs[i].status = "Not Applied";
            } else {
                jobs[i].status = "Interview";
            }
        }
    }
    showCards();
    updateCounts();
}

function markRejected(id) {
    for (var i = 0; i < jobs.length; i++) {
        if (jobs[i].id == id) {
            if (jobs[i].status == "Rejected") {
                jobs[i].status = "Not Applied";
            } else {
                jobs[i].status = "Rejected";
            }
        }
    }
    showCards();
    updateCounts();
}

function deleteJob(id) {
    var newJobs = [];
    for (var i = 0; i < jobs.length; i++) {
        if (jobs[i].id != id) {
            newJobs.push(jobs[i]);
        }
    }
    jobs = newJobs;
    showCards();
    updateCounts();
}