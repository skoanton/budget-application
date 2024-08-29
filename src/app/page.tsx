import { Transaction } from "@/types/transaction";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: transactions } = await supabase
    .from("transactions")
    .select("*")
    .returns<Transaction[]>();

  return (
    <ul>
      {transactions?.map((transaction) => (
        <li key={transaction.id}>{transaction.id}</li>
      ))}
    </ul>
  );
}
