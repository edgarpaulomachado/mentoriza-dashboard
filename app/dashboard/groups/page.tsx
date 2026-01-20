import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Search } from "lucide-react";
import { columns, Payment } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
  ];
}

export default async function GroupsPage() {
  const data = await getData();
  return (
    <div className="p-8 w-full">
      <div className="flex justify-end mb-11">
        <Button variant={"outline"}>
          Adicionar Grupo
          <Plus></Plus>
        </Button>
      </div>
      <section className="bg-zinc-50 p-3 rounded-xl flex justify-between mb-8 items-center">
        <div>
          <Label>Pesquisar</Label>
          <Input
            className="border-none focus:border-none shadow-none w-80 mt-2 p-0 "
            placeholder="Pesquise por grupos aqui"
          ></Input>
        </div>
        <Button>
          <Search></Search>
          Pesquisar
        </Button>
      </section>
      <div>
        <h1 className="text-xl font-bold">Groups Table</h1>
      </div>

      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
