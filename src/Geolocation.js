import react from "react";

const Geolocation = () => {
  return (
    <a-scene
      vr-mode-ui="enabled: false"
      embedded
      arjs="sourceType: webcam; debugUIEnabled: false;"
    >
      <a-text
        value="This content will always face you."
        look-at="[gps-camera]"
        scale="120 120 120"
        gps-entity-place="latitude: 1.280734; longitude: 103.839828;"
      ></a-text>
      <a-camera gps-camera rotation-reader></a-camera>
    </a-scene>
  );
};

export default Geolocation;
