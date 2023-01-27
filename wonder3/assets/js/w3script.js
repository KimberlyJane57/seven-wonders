/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function initialize() {
  const alulaSaudiArabia = { lat: 26.8029, lng: 37.94927 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: alulaSaudiArabia,
    zoom: 20,
  });
  const panorama = new google.maps.StreetViewPanorama(
    document.getElementById("pano"),
    {
      position: alulaSaudiArabia,
      pov: {
        heading: 34,
        pitch: 10,
      },
    }
  );

  map.setStreetView(panorama);
}

window.initialize = initialize;
