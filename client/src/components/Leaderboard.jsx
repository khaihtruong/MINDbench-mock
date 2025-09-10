import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import { leaderboard } from "../data/models";

export default function Leaderboard() {
  const [sorting, setSorting] = React.useState([]);

  const data = React.useMemo(() => leaderboard, []);

  const columns = React.useMemo(
    () => [
      {
        accessorKey: "rank",
        header: () => "Rank",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "model",
        header: () => "Model",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "scale",
        header: () => "Scale",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "rmse",
        header: () => "RMSE",
        cell: ({ getValue }) => {
          const v = getValue();
          return typeof v === "number" ? v.toFixed(3) : v;
        },
      },
      {
        accessorKey: "Nruns",
        header: () => "N Runs",
        cell: (info) => info.getValue(),
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div style={{ padding: 12 }}>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          {table.getHeaderGroups().map((hg) => (
            <tr key={hg.id}>
              {hg.headers.map((header) => {
                // Make headers clickable to sort
                const canSort = header.column.getCanSort();
                const sortDir = header.column.getIsSorted(); // false | 'asc' | 'desc'
                return (
                  <th
                    key={header.id}
                    onClick={canSort ? header.column.getToggleSortingHandler() : undefined}
                    style={{
                      textAlign: "left",
                      padding: "8px 10px",
                      borderBottom: "1px solid #ddd",
                      cursor: canSort ? "pointer" : "default",
                      userSelect: "none",
                    }}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {canSort && (
                      <span style={{ marginLeft: 6, fontSize: 12, opacity: 0.8 }}>
                        {sortDir === "asc" ? "▲" : sortDir === "desc" ? "▼" : "↕"}
                      </span>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.original.id ?? row.original.model}
              style={{ borderBottom: "1px solid #f0f0f0" }}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} style={{ padding: "8px 10px" }}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
