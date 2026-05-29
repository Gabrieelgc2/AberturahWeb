import { useState } from "react";
import { PRODUTOS } from "./produtos.data";

export function ProdutosCatalogo() {
    const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");

    const categorias = [
        "Todos",
        "Portas",
        "Brises",
        "Pergolados",
        "Revestimentos",
    ];

    const produtosFiltrados =
        categoriaAtiva === "Todos"
            ? PRODUTOS
            : PRODUTOS.filter(
                  (produto) => produto.categoria === categoriaAtiva
              );

    return (
        <section className="bg-background py-20 px-4">
            <div className="max-w-7xl mx-auto">

                {/* BOTÕES */}

                <div className="mb-12 flex justify-center">
                    <div
                        className="
                            flex
                            flex-wrap
                            items-center
                            justify-center
                            gap-2
                            rounded-full
                            border
                            border-zinc-200
                            bg-white/80
                            p-2
                        "
                    >
                        {categorias.map((categoria) => (
                            <button
                                key={categoria}
                                onClick={() =>
                                    setCategoriaAtiva(categoria)
                                }
                                className={`
                                    rounded-full
                                    px-5
                                    py-2.5
                                    text-sm
                                    transition-all
                                    duration-300

                                    ${
                                        categoriaAtiva === categoria
                                            ? "bg-[#1A1A1A] text-white"
                                            : "text-zinc-500 hover:bg-zinc-100 hover:text-[#1A1A1A]"
                                    }
                                `}
                            >
                                {categoria}
                            </button>
                        ))}
                    </div>
                </div>

                {/* HEADER */}

                <div className="mb-24 max-w-3xl mx-auto text-center">
                </div>

                {/* CARDS */}

                <div
                    className="
                        flex
                        gap-4
                        h-[620px]
                    "
                >
                    {produtosFiltrados.map((produto) => (
                        <div
                            key={produto.nome}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-[28px]
                                bg-white
                                basis-[25%]
                                hover:basis-[38%]
                                transition-all
                                duration-700
                                ease-out
                            "
                        >
                            {/* IMAGE */}

                            <img
                                src={produto.imagem}
                                alt={produto.nome}
                                className="
                                    absolute
                                    inset-0
                                    w-full
                                    h-full
                                    object-cover
                                    transition-transform
                                    duration-[1200ms]
                                    ease-out
                                    group-hover:scale-[1.02]
                                "
                            />

                            {/* SOFT OVERLAY */}

                            <div
                                className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-t
                                    from-black/35
                                    via-black/5
                                    to-transparent
                                "
                            />

                            {/* CONTENT */}

                            <div
                                className="
                                    absolute
                                    bottom-0
                                    left-0
                                    right-0
                                    p-8
                                "
                            >

                                <h3
                                    className="
                                        text-white
                                        text-3xl
                                        md:text-4xl
                                        font-medium
                                        tracking-[-0.03em]
                                        font-serif
                                    "
                                >
                                    {produto.nome}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
