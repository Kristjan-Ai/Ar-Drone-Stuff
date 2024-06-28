var config = {
        plugins: [
            "video-png"     // Display the video feed as static pngs (work in every browser)
        //  , "video-stream"  // Display the video as a native h264 stream decoded in JS 
          , "hud"           // Display the artificial horizon, altimeter, compass, etc.
          , "battery"       // Display a simple battery widget in the header bar
          , "pilot"         // Pilot the drone with the keyboard
          , "blackbox"      // Experimental: Records all mision data (navData, raw video, PaVE headers, etc.)
        //, "replay"        // Experimental: Replay the data recorded by the blackbox
          , "copterface"
          , "gamepad"
        ],

        // Config for pilot plugin
        keyboard: 'qwerty',

        // Config for blackbox plugin. Path is an existing folder where to store mission data
        // Each new mission will have its own timestamped folder.
        blackbox: {
            path: "/tmp"
        },

        // Config for replay plugin. Path points to a specific mission folder to be replayed.
        replay: {
            path: "/tmp/2013-06-03_09-10-33/"
        },

        gamepad: {
            // hover when no input is given after delay seconds
            autoStabilize: { enabled: true, delay: 0.15 },
            // controller mapping
            controls: {
                yaw:      { axis: 2, invert: false, deadZone: 0.1, maxSpeed: 1 },
                altitude: { axis: 3, invert: false, deadZone: 0.1, maxSpeed: 1 },
                roll:     { axis: 0, invert: false, deadZone: 0.1, maxSpeed: 0.2 },
                pitch:    { axis: 1, invert: false, deadZone: 0.1, maxSpeed: 0.2 },
                disableEmergency: 8,
                switchCams: 0,
                hover:      1,
                flip:       2,
                flatTrim:   9,
                takeoff:    4,
                land:       5
            },
            // add custom commands
            customCommands: []
        }
};

module.exports = config;

