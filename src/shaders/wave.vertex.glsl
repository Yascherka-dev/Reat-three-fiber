varying vec2 vUv;
uniform float uTime;
uniform float uMultiplier;

void main() {
  vUv = uv;
  vec3 pos = position;
  pos.z += sin(pos.x * uMultiplier + uTime) * 0.03;
  pos.z += sin(pos.y * uMultiplier * 0.8 + uTime * 1.3) * 0.03;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
