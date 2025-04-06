<script setup>


import * as maptilersdk from '@maptiler/sdk';
import { onMounted } from 'vue';

onMounted(() => {
    maptilersdk.config.apiKey = 'zevzERRq0uLunlt7FwD5';

    const map = new maptilersdk.Map({
        container: 'map', // ID of the map div
        style: maptilersdk.MapStyle.STREETS, // Map style
        center: [72.862419, 19.277140], // Mira Road coordinates [lng, lat]
        zoom: 10.8, // Zoom level
    });

    // Create a custom marker element
    const markerElement = document.createElement('div');
    markerElement.className = 'custom-marker';

    // Create a marker
    new maptilersdk.Marker(markerElement)
        .setLngLat([72.862419, 19.277140]) // Mira Road coordinates [lng, lat]
        .addTo(map);

});
</script>

<template>
    <div class="marTB marginBottom100">
        <h2 class="text-center text-white fs-2 mb-2 ">Contact</h2>
        <div class="title-shape mb-5">
            <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor"
                    stroke-width="2"></path>
            </svg>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <ul class=" listItem text-white d-flex justify-content-between">
                    <li class=" d-flex p-2 "><i class=" bi bi-person-badge text-danger1 "></i> Jayesh
                        Patil</li>
                    <li class=" d-flex p-2"><i class="bi bi-envelope-at text-danger1"></i> <a
                            href="mailto:jayeshwpatil@gmail.com">jayeshwpatil@gmail.com</a></li>
                    <li class=" d-flex p-2"><i class="bi bi-phone text-danger1"></i> 7021785713</li>
                    <li class=" d-flex p-2"><i class="bi bi-geo text-danger1"></i> Mira Road (Thane)</li>
                </ul>
            </div>
            <div class="col-sm-12">
                <div id="map" style="height: 350px;"></div>
            </div>


        </div>


    </div>

</template>


<style scoped>
.bi {
    width: 30px;
    display: inline-block;
}

.marginBottom100 {
    padding-bottom: 100px;
}

.listItem {
    list-style: none;
    padding: 0;
}


.listItem li {
    background: none;
    width: 100%;
    color: #fff;
    border: 1px solid #262626;
    padding: 10px 20px;
    margin: 10px;

}

a {
    color: #fff;
    text-decoration: none;
}

.custom-marker {
    width: 20px;
    height: 20px;
    background-color: #f00 !important;
    /* Red color */
    border-radius: 50%;
    border: 2px solid #fff;
}

@media screen and (max-width: 992px) {

    .listItem {
        flex-direction: column;


    }
}
</style>