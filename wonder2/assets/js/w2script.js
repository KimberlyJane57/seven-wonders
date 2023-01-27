/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function initialize() {
  const peritoMorenoGlacier = { lat: -50.47353, lng: -73.03781 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: peritoMorenoGlacier,
    zoom: 18,
  });
  const panorama = new google.maps.StreetViewPanorama(
    document.getElementById("pano"),
    {
      position: peritoMorenoGlacier,
      pov: {
        heading: 34,
        pitch: 10,
      },
    }
  );

  map.setStreetView(panorama);
}

window.initialize = initialize;

