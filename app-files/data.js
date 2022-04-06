var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.296705972839046,
        "pitch": 0.0823412680354636,
        "fov": 1.5104476355254983
      },
      "linkHotspots": [
        {
          "yaw": 0.3271078467112023,
          "pitch": -0.35140388927829136,
          "rotation": 6.283185307179586,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.1833692673728038,
          "pitch": 0.517532995092294,
          "title": "Tile",
          "text": "This is a special tile"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.3406713775407688,
        "pitch": 0.09201888343968001,
        "fov": 1.5104476355254983
      },
      "linkHotspots": [
        {
          "yaw": -3.093068447989708,
          "pitch": 0.03235628300091875,
          "rotation": 4.71238898038469,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4702712445116397,
          "pitch": -0.05089894406195761,
          "title": "Coffee Stand",
          "text": "Popular among students"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.3062835247354947,
        "pitch": -0.14507473981685415,
        "fov": 1.5104476355254983
      },
      "linkHotspots": [
        {
          "yaw": 0.05022093979227549,
          "pitch": 0.04058934488820398,
          "rotation": 0.7853981633974483,
          "target": "1-engineering-auditorium-atrium"
        },
        {
          "yaw": -1.7562209508765392,
          "pitch": -0.036287076047525346,
          "rotation": 3.9269908169872414,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.1282445644820136,
          "pitch": -0.5466114435165395,
          "title": "Auditorium",
          "text": "Many classes are carried out here"
        }
      ]
    }
  ],
  "name": "GG_Practice Faculty of Eng",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
