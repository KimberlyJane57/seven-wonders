/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function initialize() {
  const cappadociaTurkey = { lat: 38.67719, lng: 34.85303 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: cappadociaTurkey,
    zoom: 18,
  });
  const panorama = new google.maps.StreetViewPanorama(
    document.getElementById("pano"),
    {
      position: cappadociaTurkey,
      pov: {
        heading: 34,
        pitch: 10,
      },
    }
  );

  map.setStreetView(panorama);
}

window.initialize = initialize;
