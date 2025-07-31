declare module "react-block-reveal-animation" {
  import { ReactNode } from "react";

  interface BlockRevealProps {
    children: ReactNode;
    color?: string;
    delay?: number;
    duration?: number;
  }

  const BlockReveal: React.FC<BlockRevealProps>;
  export default BlockReveal;
}
