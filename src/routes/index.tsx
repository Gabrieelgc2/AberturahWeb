import { createFileRoute } from "@tanstack/react-router";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ABERTURAH — Material ACM de Alta Performance" },
      {
        name: "description",
        content:
          "ABERTURAH: fabricação e beneficiamento de chapas ACM com qualidade certificada, mais de 40 acabamentos e logística para todo o Brasil.",
      },
    ],
  }),
});

function Index() {
  return (
    <main>
      <WhyChooseUs />
    </main>
  );
}
