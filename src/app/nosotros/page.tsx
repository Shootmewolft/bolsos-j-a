import { Card } from "@/components";
import { Cart, Manufacturing } from "@/icons";
import Image from "next/image";

function PageAbout() {
  return (
    <section className="flex flex-col gap-12 items-center py-5">
      <Image
        className="w-1/6 h-auto"
        src="/logo.svg"
        alt="Logotipo de Bolsos J&A"
        width={50}
        height={50}
        priority
      />
      <p className="w-2/3 text-pretty text-black/70 leading-7 text-center">
        En <strong>Bolsos J&A</strong>, somos una tienda apasionada por
        acompañarte en cada paso de tu vida con estilo y funcionalidad. Desde
        maletas de viaje y bolsos casuales hasta accesorios escolares y
        mochilas, ofrecemos productos diseñados para adaptarse a tus necesidades
        diarias con calidad y buen gusto. Aunque estamos en las primeras etapas
        de nuestro camino, nuestro compromiso es crecer contigo, innovando y
        ampliando nuestra oferta para ser tu opción confiable en todo lo
        relacionado con maletas y accesorios.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 px-16 gap-4 content-center">
        <Card
          icon={<Cart className="size-24" />}
          title="Ventas al por mayor y detal"
          description="Ofrecemos productos de alta calidad en maletas, bolsos y accesorios, disponibles tanto al por mayor como al detal, para satisfacer tus necesidades."
        />
        <Card
          icon={<Manufacturing className="size-24" />}
          title="Fabricación de bolsos a medida"
          description="Diseñamos y fabricamos bolsos personalizados que se adaptan a tus gustos y necesidades, combinando estilo, calidad y funcionalidad en cada creación."
        />
      </div>
    </section>
  );
}

export default PageAbout;
