/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function initialize() {
  const tigersNestMonasteryBhutan = { lat: 27.49245, lng: 89.36216 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: tigersNestMonasteryBhutan,
    zoom: 18,
  });
  const panorama = new google.maps.StreetViewPanorama(
    document.getElementById("pano"),
    {
      position: tigersNestMonasteryBhutan,
      pov: {
        heading: 34,
        pitch: 10,
      },
    }
  );

  map.setStreetView(panorama);
}

window.initialize = initialize;
