<script setup>
</script>

<template>
    <!-- <nav class="navbar navbar-expand-lg  ">bg-body-tertiary -->
    <header id="home" class="d-flex align-items-center ">
        <!-- <nav class="d-flex flex-column flex-md-row align-items-center justify-content-between py-2 ">
            <a class="logo text-white text-decoration-none fw-bold animate__animated animate__bounceInLeft"
                href="#"><span class="customRed">J</span>ayesh.</a>
            <ul class="menuList animate__animated animate__bounceInRight">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contactMe">Contact</a></li>
            </ul>
        </nav> -->
        <nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-dark  fixed-top">
            <div class="container">
                <a class="logo text-white text-decoration-none fw-bold animate__animated animate__bounceInLeft"
                    href="#"><span class="customRed">J</span>ayesh</a>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#resume">Resume</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contactMe">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="bannerBox">
            <h1 class="fs-2">Hi, I'm <span class="customRed">Jayesh</span></h1>
            <div class="fs-3">Frontend Developer ( Vue js )</div>
            <div class="mt-3">"Crafting responsive, SEO-friendly web applications<br />with modern JavaScript
                frameworks"</div>
        </div>
    </header>

</template>

<style scoped>
.customRed {
    color: #e51b49 !important;
}

.navbar a.active {
    border-radius: 5px;
    background: #e51b49;
    color: #fff !important;

}



.navbar a.nav-link {
    color: #fff !important;
    margin: 0px 2px;
    padding: 4px 8px;
}

.navbar a.nav-link:hover {
    border-radius: 5px;
    background: #e51b49;
    color: #fff !important;

}

header {
    width: 100%;
    height: 100vh;
    background-image: url(../assets/images/myPhoto.png);
    background-size: 60em;
    background-position: right bottom;
    background-repeat: no-repeat;
    border-bottom: 2px solid #5b492c;
}

.logo {
    font-size: 25px;
}



.menuList {
    margin: 0;
    padding: 0;
    list-style: none;
}

.menuList li {
    display: inline-block;
}

.menuList li a {
    padding: 7px 15px;
    text-decoration: none;
    color: #fff;
}

.menuList li a:hover {
    color: #e51b49;
}

.bannerBox {
    width: 45%;
    text-align: center;
    /* margin-top: 20%; */
    color: #fff;
}

@media screen and (max-width: 992px) {
    .navbar-nav {
        flex-direction: row;
    }
}

@media screen and (max-width: 768px) {
    nav .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .navbar-nav {
        margin: 0px auto;
    }

    header {
        background-size: 150%;
        align-items: normal !important;
        padding-top: 120px
    }

    .bannerBox {
        width: 100%;
    }

}
</style>
