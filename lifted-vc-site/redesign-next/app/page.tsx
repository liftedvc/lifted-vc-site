import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { WhatIsAuthenticFomo } from "@/components/WhatIsAuthenticFomo";

export default function Page() {
  return (
    <main>
      <NavBar />
      <Hero />
      <WhatIsAuthenticFomo />
      {/* Following sections will land here: */}
      {/* <AnatomyOfARaise /> */}
      {/* <ActivationHinge /> */}
      {/* <FourGoals /> */}
      {/* <KnowledgeCheck /> */}
      {/* <UpNext /> */}
    </main>
  );
}
