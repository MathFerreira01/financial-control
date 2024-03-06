import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import Header from "./header";
import NavBar from "./navBar";

export default function Home() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <NavBar/>
      <div className="flex flex-col">
        <Header/>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center gap-4">
            <h1 className="font-semibold text-lg md:text-xl">Expenses</h1>
            <Button className="ml-auto" size="sm">
              Add expense
            </Button>
            <Button className="h-8" variant="outline">
              Export CSV
            </Button>
          </div>
          <div className="border shadow-sm rounded-lg mt-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Category</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>2023-07-05</TableCell>
                  <TableCell className="font-medium">Lunch meeting</TableCell>
                  <TableCell>$25.00</TableCell>
                  <TableCell>Business</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-07-10</TableCell>
                  <TableCell className="font-medium">Office supplies: Pens</TableCell>
                  <TableCell>$5.00</TableCell>
                  <TableCell>Office Supplies</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-07-15</TableCell>
                  <TableCell className="font-medium">Software subscription</TableCell>
                  <TableCell>$20.00</TableCell>
                  <TableCell>Software</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-07-20</TableCell>
                  <TableCell className="font-medium">Team lunch</TableCell>
                  <TableCell>$80.00</TableCell>
                  <TableCell>Team Building</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-07-25</TableCell>
                  <TableCell className="font-medium">Office rent: Monthly payment</TableCell>
                  <TableCell>$1500.00</TableCell>
                  <TableCell>Rent</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </div>
  );
}
