import { Customer } from "./components";

const CUSTOMERS = [
  {
    name: "Sara M.",
    id: 1,
    description:
      "Me encanta la calidad de los productos que ofrecen. No solo son muy bonitos, sino que también son increíblemente duraderos. He comprado varios artículos y cada uno ha superado mis expectativas. Definitivamente recomendaría esta tienda a cualquiera que busque calidad y buen diseño.",
    calification: 5,
  },
  {
    name: "Juan P.",
    id: 2,
    description:
      "La atención al cliente fue excelente. Todo el equipo fue muy amable y atento en cada paso del proceso. Aunque tuve un pequeño inconveniente con mi pedido, lo solucionaron rápidamente y de forma profesional. Agradezco mucho el esfuerzo que ponen para garantizar la satisfacción del cliente.",
    calification: 3.5,
  },
  {
    name: "Luisa R.",
    id: 3,
    description:
      "Estoy muy satisfecha con mi compra. Desde el principio, la experiencia fue muy agradable. El proceso de compra fue fácil, el envío fue rápido, y el producto llegó en perfectas condiciones. Sin duda volveré a comprar en el futuro y recomendaré esta tienda a mis amigos.",
    calification: 4,
  },
];

export function Customers() {
  return (
    <section className="px-8 py-8 flex flex-col gap-4">
      <h2 className="text-3xl uppercase font-fontTitle">
        Opiniones de nuestros clientes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {CUSTOMERS.map((customer) => (
          <Customer
            key={customer.id}
            calification={customer.calification}
            description={customer.description}
            name={customer.name}
          />
        ))}
      </div>
    </section>
  );
}
