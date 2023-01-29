/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function initialize() {
  const sardineRunSouthAfrica = { lat: -32.83336, lng: 28.1158 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: sardineRunSouthAfrica,
    zoom: 18,
  });
  const panorama = new google.maps.StreetViewPanorama(
    document.getElementById("pano"),
    {
      position: sardineRunSouthAfrica,
      pov: {
        heading: 34,
        pitch: 10,
      },
    }
  );

  map.setStreetView(panorama);
}

window.initialize = initialize;
