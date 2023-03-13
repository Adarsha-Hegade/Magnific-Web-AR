import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <a-scene
        vr-mode-ui="enabled: false;"
        renderer="logarithmicDepthBuffer: true;"
        embedded
        arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
      >
        <a-nft
          type="nft"
          url="https://us-central1-webar-a28d4.cloudfunctions.net/app/tracking/trex"
          smooth="true"
          smoothCount="10"
          smoothTolerance="0.01"
          smoothThreshold="5"
        >
          <mesh>
            <boxBufferGeometry args={ [1, 1, 1] } />
            <meshStandardMaterial color={ "green" } />
          </mesh>
        </a-nft>
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}
