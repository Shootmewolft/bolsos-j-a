import { fetching } from "@/services";
import { Customer } from "./components";
import { CustomersType } from "@/models";
import { URL_FETCHING_STRAPI } from "@/constants";

export async function Customers() {
  const response = await fetching<CustomersType[]>(URL_FETCHING_STRAPI.CUSTOMERS);
  if (response instanceof Error) {
    return <h2>¡Hubo un error!</h2>
  }
  const { data: customers } = response;
  return (
    <section className="px-4 pt-1 md:px-8 md:pt-8 flex flex-col gap-4">
      <h2 className="text-center md:text-left text-xl sm:text-2xl md:text-3xl uppercase font-fontTitle">
        Opiniones de nuestros clientes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {customers.map((customer) => (
          <Customer
            key={customer.id}
            calification={customer.calification}
            opinion={customer.opinion}
            name={customer.name}
          />
        ))}
      </div>
    </section>
  );
}
