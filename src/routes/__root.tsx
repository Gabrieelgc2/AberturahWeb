import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-[color:var(--steel)]">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-[color:var(--brand-foreground)]"
            style={{ background: "var(--gradient-brand)" }}
          >
            Voltar para a Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ABERTURAH — Material ACM de Alta Performance" },
      {
        name: "description",
        content:
          "ABERTURAH: fabricação e beneficiamento de chapas ACM com qualidade certificada para fachadas em todo o Brasil.",
      },
      { name: "author", content: "ABERTURAH" },
      { property: "og:title", content: "ABERTURAH — Material ACM de Alta Performance" },
      {
        property: "og:description",
        content: "Chapas ACM, beneficiamento e suporte técnico para fachadas em todo o Brasil.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "ABERTURAH — Material ACM de Alta Performance" },
      {
        name: "twitter:description",
        content:
          "ABERTURAH: fabricação e beneficiamento de chapas ACM com qualidade certificada para fachadas em todo o Brasil.",
      },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/565e9950-2f7a-42e9-98cd-92495f3220ce/id-preview-18345c1d--6f20dbc8-d541-4ab0-bf30-02ab67688ffb.lovable.app-1776640301043.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/565e9950-2f7a-42e9-98cd-92495f3220ce/id-preview-18345c1d--6f20dbc8-d541-4ab0-bf30-02ab67688ffb.lovable.app-1776640301043.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="progress" />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
