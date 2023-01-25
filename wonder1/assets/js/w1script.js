  /**
       * @license
       * Copyright 2019 Google LLC. All Rights Reserved.
       * SPDX-License-Identifier: Apache-2.0
       */
  function initialize() {
    const MontStMichel = { lat: 48.63595145114208, lng: -1.5117471804227718};
    const map = new google.maps.Map(document.getElementById("map"), {
      center: MontStMichel,
      zoom: 18,
    });
    const panorama = new google.maps.StreetViewPanorama(
      document.getElementById("pano"),
      {
        position: MontStMichel,
        pov: {
          heading: 34,
          pitch: 10,
        },
      }
    );

    map.setStreetView(panorama);
  }

  window.initialize = initialize;