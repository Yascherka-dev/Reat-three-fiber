varying vec2 vUv;
varying vec3 vPosition;
uniform float uTime;
uniform float uAlpha;
uniform float uMultiplier;
uniform vec3 uColorA;
uniform vec3 uColorB;

void main() {
  float scanline = step(0.5, mod(vUv.y * uMultiplier + uTime * 2.0, 1.0));
  float flicker = 0.85 + 0.15 * sin(uTime * 20.0);
  float edge = abs(vUv.x - 0.5) * 2.0;
  edge = pow(edge, 3.0);
  vec3 color = mix(uColorA, uColorB, vUv.y);
  float alpha = (scanline * 0.6 + edge * 0.4) * flicker * uAlpha;
  gl_FragColor = vec4(color, alpha);
}
