import k from "../kaplayCtx";

export function createRing(pos) {
  return k.add([
    k.sprite("ring", {anim: "spin"}),
    k.area(),
    k.scale(4),
    k.anchor("center"),
    k.pos(pos),
    k.offscreen(),
    "ring",
  ]);
}