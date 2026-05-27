// import { createFileRoute } from "@tanstack/react-router";
// import { PageLayout } from "@/components/PageLayout";
// import { CTA } from "@/components/home/CTA";
// import { NoticiasFeed } from "@/components/noticias/NoticiasFeed.tsx";
// import Noticias from "../assets/Noticias3.webp";
// import { useTranslation } from "react-i18next";

// export const Route = createFileRoute("/noticias")({
//   component: NoticiasPage,
//   head: () => ({
//     meta: [
//       { title: "ABERTURAh! | Notícias" },
//       {
//         name: "description",
//         content:
//           "Acompanhe os bastidores, obras e novidades da ABERTURAh! no Instagram e YouTube.",
//       },
//       { property: "og:title", content: "Notícias — ABERTURAh!" },
//       {
//         property: "og:description",
//         content: "Bastidores, obras e novidades da ABERTURAh!.",
//       },
//     ],
//   }),
// });

// function NoticiasPage() {
//   const {t} = useTranslation();
//   return (
//     <>
//       <PageLayout
//         eyebrow={t("PageLayout.eyebrow4")}
//         title={
//           <>
//             {t("PageLayout.title4.line1")}<br />
//             <span>{t("PageLayout.title4.line2")}</span>
//           </>
//         }
//         description={t("PageLayout.description4")}
//         image={Noticias}
//       />
//       <NoticiasFeed />
//       <CTA />
//     </>
//   );
// }