import { useState } from "react";

export const defaultParams = { speed: 1, force: 1, size: 4 };

export default function useSceneParams() {
  return useState({ ...defaultParams });
}
