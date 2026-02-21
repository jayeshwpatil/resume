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
                    <p class="fs-4 fw-bold ">Freelancer <span class="badge text-bg-success smallerText">2.5
                            Year</span></p>
                    <p class="fw-bold">Toobzbox Entertainment </p>
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
                        <li>Developed responsive, SEO-optimized websites </li>
                        <li>Ensured code quality and performance optimisation for smooth user experience. </li>
                        <li>Delivered cross-browser compatible solutions. </li>
                        <li>Integrated third-party APIs and plugins to enhance functionality. </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Timeline Item 1 -->
        <div class="row timeline-box">
            <div class="col-3 text-end">
                <div class="text-white">
                    <p class="fs-4 fw-bold s">Senior Executive <span class="badge text-bg-success smallerText">16
                            Year</span></p>
                    <p class="fw-bold">Pinstorm</p>
                    <p class="text-secondary"><i class="bi bi-calendar-check text-danger1 mx-2"></i> August 2007 -
                        August 2023</p>
                </div>
            </div>
            <div class="col-1 position-relative">
                <div class="timeline-circle"></div>
            </div>
            <div class="col-8 mb-5">
                <div class="skillBox px-4 py-2 text-white">
                    <ul>
                        <li>Independently handled the Altigreen website — from client discussions and requirements
                            gathering to implementation and delivery based on continuous feedback. </li>
                        <li>Developed enterprise-level applications including Brand Central, ORM, Appraisal System and
                            HRMS using modern JavaScript and Vue.js</li>
                        <li>Built microsites and campaign pages for clients like Tata Steel, Adobe, Sharekhan, Cadbury,
                            ICICI, and Putzmeister India. </li>
                        <li>Optimized frontend performance achieving Lighthouse scores above 90 and reducing load times
                            by 15% </li>
                        <li>Increased user engagement by 20% through implementing responsive design and intuitive user
                            interfaces </li>
                        <li>Integrated RESTful APIs using Axios.</li>
                        <li>Collaborated with cross-functional Agile teams delivering projects 10% ahead of schedule
                            with 95% QA approval rate </li>
                        <li>Mentored junior developers and conducted code reviews to maintain high code quality
                            standards </li>
                        <li>Implemented SEO best practices improving organic search rankings and web accessibility </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Timeline Item 2 -->
        <div class="row timeline-box">
            <div class="col-3 text-end">
                <div class="text-white">
                    <p class="fs-4 fw-bold s">Executive <span class="badge text-bg-success smallerText">1
                            Year</span></p>
                    <p class="fw-bold">Technosoft Engineering </p>
                    <p class="text-secondary"><i class="bi bi-calendar-check text-danger1 mx-2"></i> February 2006
                        - August 2007</p>
                </div>
            </div>
            <div class="col-1 position-relative">
                <div class="timeline-circle"></div>
            </div>
            <div class="col-8 mb-5">
                <div class="skillBox px-4 py-2 text-white">
                    <ul>
                        <li>Digitized paper-based catalog systems into electronic format improving data accessibility
                            and user experience </li>
                        <li>Developed web interfaces using HTML, CSS, and JavaScript for catalog management systems</li>
                    </ul>
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

.smallerText {
    font-size: 12px;
}
</style>
