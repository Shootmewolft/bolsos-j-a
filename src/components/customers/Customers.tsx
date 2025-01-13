import { fetching } from "@/services";
import { Customer } from "./components";
import { CustomersType } from "@/models";
import { URL_FETCHING_STRAPI } from "@/constants";

export async function Customers() {
  const customers = await fetching<CustomersType[]>(URL_FETCHING_STRAPI.CUSTOMERS);
  if (customers instanceof Error) {
    console.error(customers.message);
    return;
  }
  return (
    <section className="px-8 py-8 flex flex-col gap-4">
      <h2 className="text-3xl uppercase font-fontTitle">
        Opiniones de nuestros clientes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
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
