/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function initialize() {
  const lakeDistrictGreatBritain = { lat: 54.45962, lng: -3.10138 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: lakeDistrictGreatBritain,
    zoom: 18,
  });
  const panorama = new google.maps.StreetViewPanorama(
    document.getElementById("pano"),
    {
      position: lakeDistrictGreatBritain,
      pov: {
        heading: 34,
        pitch: 10,
      },
    }
  );

  map.setStreetView(panorama);
}

window.initialize = initialize;
