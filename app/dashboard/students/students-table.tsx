type Row = {
  id: number;
  fileName: string;
};

export default function StudentsTable({ data }: { data: Row[] }) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-muted">
          <tr>
            <th className="text-left p-3">File</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-t">
              <td className="p-3">{row.fileName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
