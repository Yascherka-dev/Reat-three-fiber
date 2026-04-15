varying vec2 vUv;
uniform float uTime;
uniform float uAlpha;
uniform float uMultiplier;
uniform vec3 uColorA;
uniform vec3 uColorB;

void main() {
  float wave = sin(vUv.x * uMultiplier + uTime) * 0.5 + 0.5;
  wave *= sin(vUv.y * uMultiplier * 0.7 + uTime * 1.2) * 0.5 + 0.5;
  vec3 color = mix(uColorA, uColorB, wave);
  gl_FragColor = vec4(color, wave * uAlpha);
}
