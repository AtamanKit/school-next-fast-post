"use client"

import * as React from "react"
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { EmployeeProps } from "@/types"
import { Employees }  from "@/constants"

// const data: EmployeeProps[] = [
//   {
//     id: 1,
//     firstName: "Igor",
//     lastName: "Talkov",
//     gender: "Male",
//     age: 45,
//     email: "igortalkiv@hotmail.com",
//     phone: "063823234",
//     education: "PhD",
//     occupation: "Musician",
//     experienceYears: 32,
//     salary: 10321,
//     maritalStatus: "Married",
//     numberOfChildren: 1,
//   },
//   {
//     id: 2,
//     firstName: "Alla",
//     lastName: "Pugachiova",
//     gender: "Female",
//     age: 58,
//     email: "allapugachiova@gmail.com",
//     phone: "063823234",
//     education: "Bachelor",
//     occupation: "Singer",
//     experienceYears: 32,
//     salary: 9321,
//     maritalStatus: "Married",
//     numberOfChildren: 3,
//   },
//   {
//     id: 3,
//     firstName: "Iurii",
//     lastName: "Shatunov",
//     gender: "Male",
//     age: 34,
//     email: "iuriishatunov@mail.ru",
//     phone: "063823234",
//     education: "PhD",
//     occupation: "Hacker",
//     experienceYears: 18,
//     salary: 8321,
//     maritalStatus: "Married",
//     numberOfChildren: 2,
//   },

//   {
//     id: 4,
//     firstName: "Bogdan",
//     lastName: "Titamir",
//     gender: "Male",
//     age: 54,
//     email: "bogdantitamir@gmail.com",
//     phone: "063343234",
//     education: "High School",
//     occupation: "Construction Worker",
//     experienceYears: 34,
//     salary: 4321,
//     maritalStatus: "Single",
//     numberOfChildren: 0,
//   },
//   {
//     id: 5,
//     firstName: "Sofia",
//     lastName: "Rotaru",
//     gender: "Female",
//     age: 34,
//     email: "sofiarotaru@hotmail.com",
//     phone: "063823234",
//     education: "Bachelor",
//     occupation: "Singer",
//     experienceYears: 14,
//     salary: 4321,
//     maritalStatus: "Divorced",
//     numberOfChildren: 2,
//   },
// ]

// export type Payment = {
//   id: string
//   amount: number
//   status: "pending" | "processing" | "success" | "failed"
//   email: string
// }

export const columns: ColumnDef<Employee>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "firstName",
    // header: "First Name",
    // cell: ({ row }) => (
    //   <div className="capitalize">{row.getValue("firstName")}</div>
    // ),
  },
  {
    accessorKey: "lastName",
    // header: "Last Name",
    // cell: ({ row }) => (
    //   <div className="capitalize">{row.getValue("firstName") + " " + row.getValue("lastName")}</div>
    // ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({row}) => (
      <div className="capitalize">{row.getValue("firstName") + " " + row.getValue("lastName")}</div>
    )
  },
  {
    accessorKey: "gender",
    header: "Gender",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("gender")}</div>
    ),
  },
  {
    accessorKey: "age",
    header: "Age",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("age")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("phone")}</div>
    ),
  },
  {
    accessorKey: "education",
    header: "Education",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("education")}</div>
    ),
  },
  {
    accessorKey: "experienceYears",
    header: "Experience Years",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("experienceYears")}</div>
    ),
  },
  {
    accessorKey: "salary",
    header: "Salary",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("salary")}</div>
    ),
  },
  {
    accessorKey: "maritalStatus",
    header: "Marital Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("maritalStatus")}</div>
    ),
  },
  {
    accessorKey: "numberOfChildren",
    header: "Number Of Children",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("numberOfChildren")}</div>
    ),
  },

  // {
  //   accessorKey: "numberOfChildren",
  //   header: () => <div className="text-right">Number Of Children</div>,
  //   cell: ({ row }) => (
  //     <div className="text-right font-medium">{row.getValue("numberOfChildren")}</div>
  //   ),
  // },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const employee = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(employee.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export default function DataTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({firstName: false, lastName: false})
  const [rowSelection, setRowSelection] = React.useState({})

  const data: EmployeeProps[] = Employees
  
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
