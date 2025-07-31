<script setup>
</script>

<template>
    <div class="marTB">
        <h2 class="text-center text-white fs-2 mb-2 ">ABOUT ME</h2>
        <div class="title-shape mb-5">
            <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor"
                    stroke-width="2"></path>
            </svg>
        </div>
        <div class="row">

            <div class="col-sm-12 text-white">
                <p class="pb-5">Results-driven Team Lead and frontend Developer with 16+ years of experience in
                    designing, developing, and delivering high-performance web applications. Specialised in Vue.js 3 and
                    RESTful APIs, with a proven ability to lead cross-functional teams, mentor junior developers, and
                    manage end-to-end frontend execution. Delivered multiple enterprise-level SPAs with 95%+ QA success
                    rates, consistently meeting or beating project timelines. Achieving Lighthouse scores above 90, and
                    improving user engagement by 20%. </p>

            </div>

            <div class="col-sm-12">
                <div class="row text-white">
                    <div class="col-md-12 col-lg-6">
                        <h4 class="text-center">Technical skill sets</h4><br>
                        <img src="/src/assets/images/3.png" class="img-fluid mb-5" alt="Skill set" />
                    </div>
                    <div class="col-md-12 col-lg-6">

                        <h5>Frontend Technologies:</h5>
                        <p>Vue.js 3, Vue.js 2, Composition API, Options API, Nuxt.js, JavaScript ES6+, HTML5, CSS3</p>
                        <h5>State Management & Routing:</h5>
                        <p>Pinia, Vuex, Vue Router, RESTful APIs, Axios</p>
                        <h5>CSS Frameworks & UI:</h5>
                        <p>Bootstrap, Tailwind CSS, Responsive Web Design, Cross-browser Compatibility</p>
                        <h5>CMS, Cloud:</h5>
                        <p>WordPress, Webflow, AWS</p>
                        <h5>Tools & DevOps:</h5>
                        <p>Git, GitHub, NPM, Vite, Visual Studio Code, Chrome DevTools </p>
                        <h5>Team Leadership & Project Tools: </h5>
                        <p>Jira, slack</p>
                        <h5>Design & Optimization:</h5>
                        <p>SEO Optimization, Performance Testing, Adobe Photoshop, Adobe XD, Canva</p>
                    </div>
                </div>
                <p class="mt-5 fs-4 text-center text-white">Education</p>
                <div class="d-flex flex-column flex-lg-row justify-content-center">
                    <div class="m-2 text-center grayBox px-5 ">
                        <strong class="text-success  fs-4">BCA</strong>
                        <p>Vinayaka Mission University - 2013 </p>
                    </div>
                    <div class="m-2 text-center grayBox px-5">
                        <strong class="text-success  fs-4">HSC</strong>
                        <p>Abhinav College - 2000 </p>
                    </div>
                    <div class="m-2 text-center grayBox px-5">
                        <strong class="text-success fs-4">SSC</strong>
                        <p>Arvind Gandbhir Highschool - 1998 </p>
                    </div>
                </div>



            </div>
        </div>

    </div>

</template>

<style scoped>
.personalInfoBg,
.personalInfoBg tr,
.personalInfoBg td {
    background: #ccc !important;
}

.borderLess,
.borderLess td {
    border: 0px;
}

.skillBox {
    background: #000;
    border: 1px solid #2f2f2f;
    margin-bottom: 20px;
}

.skillBox:hover {
    background: #262626;
    color: #fff;
}

.skillDes {
    height: 50px;
    display: none
}

.progress {
    height: 7px;

}

.progress-bar {
    background-color: #e51b49;
}

.grayBox {
    background: #262626;
    color: #fff;
}
</style>
