varying vec2 vUv;
varying vec3 vPosition;
uniform float uTime;

void main() {
  vUv = uv;
  vPosition = position;
  vec3 pos = position;
  pos.x += sin(pos.y * 10.0 + uTime * 2.0) * 0.005;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
