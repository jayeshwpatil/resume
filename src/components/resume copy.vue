<script setup>
</script>

<template>
    <div class="marTB">
        <h2 class="text-center text-white fs-2 mb-2 ">PROFESSIONAL EXPERIENCE</h2>
        <div class="title-shape mb-5">
            <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor"
                    stroke-width="2"></path>
            </svg>
        </div>


        <!-- Timeline Item top -->
        <div class="row timeline-box">
            <div class="col-3 text-end">
                <div class="text-white">
                    <p class="fs-4 fw-bold ">Team Lead</p>
                    <p class="fs-4 text-success">Toobzbox Entertainment </p>
                    <p class="text-secondary"><i class="bi bi-calendar-check text-danger1 mx-2"></i> Sept 2023
                        - Present</p>
                </div>
            </div>
            <div class="col-1 position-relative">
                <div class="timeline-circle"></div>
            </div>
            <div class="col-8 mb-5">
                <div class="skillBox px-4 py-2 text-white">

                    <ul>
                        <li>Leading a team of frontend developers for modern web application development using Vue.js 3
                            and related technologies </li>
                        <li>Responsible for task planning, project tracking, and work allocation to ensure timely and
                            quality deliverables </li>
                        <li>Mentoring junior developers through code reviews</li>
                        <li>Ensuring code quality and performance optimisation through regular review and testing
                            processes </li>
                        <li>Collaborating with product managers and backend teams for smooth integration and delivery
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Timeline Item 1 -->
        <div class="row timeline-box">
            <div class="col-3 text-end">
                <div class="text-white">
                    <p class="fs-4 fw-bold s">Senior Executive</p>
                    <p class="fs-4 text-success">Pinstorm</p>
                    <p class="text-secondary"><i class="bi bi-geo-alt-fill text-danger1 mx-2"></i> Mumbai </p>
                    <p class="text-secondary"><i class="bi bi-calendar-check text-danger1 mx-2"></i> August 2007 -
                        August 2023</p>
                </div>
            </div>
            <div class="col-1 position-relative">
                <div class="timeline-circle"></div>
            </div>
            <div class="col-8 mb-5">
                <div class="skillBox px-4 py-2 text-white">


                    <p class="greenFont ">Handling Campaigns and microsites :</p>
                    <ul>
                        <li>Building responsive landing pages and microsites based
                            on client requirements, ensuring cross-browser
                            compatibility.
                        </li>
                        <li>PageSpeed metrics were 90 and above.</li>
                        <li>Document semantics and schema in sync with Google
                            SEO recommendations.</li>
                        <li>Proficient in handling asynchronous requests , thirdparty APIs and integrating RESTful APIs.
                        </li>
                    </ul>
                    <p class="mt-2 text-secondary"><small>Key Clients: </small><br>
                        Tata Steel India, Sharekhan, ICICI Home Search, Putzmeister
                        India, Adobe, Radio Mirchi, NSE, Cadbury India, and Wipro India</p>

                    <p class="greenFont mt-4">Build Web Applications :</p>
                    <ul>
                        <li class="mb-3"><strong>ORM Console & Dashboards :</strong><br>Led the design and
                            implementation of a web console at Pinstorm, featuring
                            customized client dashboards with modes for internal data
                            modification and external data visualization. Focused on
                            delivering a high-performance, visually intuitive UI. </li>
                        <li class="mb-3"><strong>BrandCentral :</strong><br>Designed and implemented 12+ visually
                            intensive screens for the internal war room, showcasing
                            real-time client analytics on visibility, engagement, social
                            chatter, search profiles, and share of voice.
                        </li>
                        <li class="mb-3"><strong>HRMS (Human Resource Management System) :</strong><br>An
                            internal tool, created user-friendly interfaces and also a few
                            backend, around efficient database management and
                            email automation workflows
                        </li>
                    </ul>

                    <p class="greenFont mt-4">Emailers and Newsletters :</p>
                    <p>Developed cross mail client compatible HTML emailers. </p>
                    <p class="mt-2 text-secondary"><small>Projects: </small>
                    </p>
                    <ul>
                        <li><a href="https://jayeshwpatil.github.io/emailer/godrejInterio/newsLetter.html"
                                target="_blank">Godrej Interio</a></li>
                        <li><a href="https://jayeshwpatil.github.io/emailer/sharekhan/newsLetter.html"
                                target="_blank">Sharekhan</a></li>
                        <li><a href="https://jayeshwpatil.github.io/emailer/putzmeisterIndia/putzmeisterEmail.html"
                                target="_blank">Putzmeister India</a></li>
                        <li><a href="https://jayeshwpatil.github.io/emailer/signatureEmail/signature.html"
                                target="_blank">Email Signature</a></li>
                    </ul>

                    <p class="greenFont mt-4">Occasionally Designed Websites from Scratch :</p>
                    <p>Sketched initial designs and transformed them into
                        digital layouts using Photoshop and Adobe XD, then
                        converted approved designs into HTML.</p>


                    <p class="greenFont mt-4">Mentored and Guided Junior Developers :</p>
                    <p>Facilitated skill development and implementation of best
                        practices in front-end development.</p>

                </div>
            </div>
        </div>

        <!-- Timeline Item 2 -->
        <div class="row timeline-box">
            <div class="col-3 text-end">
                <div class="text-white">
                    <p class="fs-4">Technosoft</p>
                    <p class="text-secondary"><i class="bi bi-geo-alt-fill text-danger1 mx-2"></i> Mumbai </p>
                    <p class="text-secondary"><i class="bi bi-calendar-check text-danger1 mx-2"></i> February 2006
                        - August 2007</p>
                </div>
            </div>
            <div class="col-1 position-relative">
                <div class="timeline-circle"></div>
            </div>
            <div class="col-8 mb-5">
                <div class="skillBox px-4 py-2 text-white">
                    <p class="greenFont">Web Designer</p>
                    <p>I Was a senior member of that team that translated paper
                        catalog data to e-catalog format and Ensuring catalog data on the Thomasnet website was in
                        sync across systems.</p>
                </div>
            </div>
        </div>


    </div>

</template>

<style scoped>
.timeline-box {
    position: relative;
}

.timeline-box::before {
    content: "";
    position: absolute;
    width: 2px;
    background-color: #0d6efd;
    top: 0;
    bottom: 0;
    left: 29.25%;
    margin-left: -1px;
}

.timeline-circle {
    position: absolute;
    width: 14px;
    height: 14px;
    background-color: #0d6efd;
    border-radius: 50%;
    left: 50%;
    margin-left: -7px;
    top: 15px;
}

/* .company-info, */
.work-info {
    padding: 15px;
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.company-name {
    font-weight: bold;
    color: #0d6efd;
}

.greenFont {
    font-weight: bold;
    color: #198754;
}

ul {
    margin: 0;
    padding-left: 18px;
}

ul li a {
    text-decoration: none;
    color: #fff;
}

ul li a:hover {
    color: #e51b49;
}

.skillBox {
    background: #000;
    /* border: 1px solid #2f2f2f; */
    margin-bottom: 20px;
}
</style>
