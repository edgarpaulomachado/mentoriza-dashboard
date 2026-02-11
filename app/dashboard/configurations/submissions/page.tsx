'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { FileDown, Plus, ClipboardClock, ChartColumnStacked, FileSpreadsheet } from 'lucide-react';
import { Label } from '@/components/ui/label';

interface Submission {
  id: number;
  deadline: string;
  stage: string;
  status: string;
}

export default function Submissions() {
  const [open, setOpen] = useState(false);

  const [submissions, setSubmissions] = useState<Submission[]>([]);

  const [form, setForm] = useState({
    deadline: '',
    stage: '',
    status: '',
  });

  const generateId = () => {
    return submissions.length > 0
      ? submissions[submissions.length - 1].id + 1
      : 1;
  };

  const handleCreate = () => {
    const newSubmission: Submission = {
      id: generateId(),
      ...form,
    };

    setSubmissions([...submissions, newSubmission]);

    setForm({
      deadline: '',
      stage: '',
      status: '',
    });

    setOpen(false);
  };

  return (
    <>
      <div className="w-full h-11 flex justify-end items-center gap-2 mt-5 px-3">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="w-31 h-11">
              Add new
              <Plus />
            </Button>
          </DialogTrigger>

          <DialogContent className="w-110.75 h-87">
            <DialogHeader>
              <DialogTitle>New submission</DialogTitle>
            </DialogHeader>

            <div className="space-y-2 mt-4">
              <div className="w-100.75 h-22 flex flex-col gap-3">
                <Label>Date End</Label>
                <Input
                  type={form.deadline ? "datetime-local" : "text"}
                  placeholder="Selecionar data e hora"
                  value={form.deadline}
                  onFocus={(e) => (e.target.type = "datetime-local")}
                  onBlur={(e) => {
                    if (!form.deadline) e.target.type = "text";
                  }}
                  onChange={(e) =>
                    setForm({ ...form, deadline: e.target.value })
                  }
                  leftIcon={<ClipboardClock size={18} strokeWidth={1.5} />}
                />
              </div>

              <div className="w-100.75 h-22 flex gap-2">
                <div className="flex flex-col gap-3">
                  <Label>Stage</Label>
                  <Input
                    placeholder="Submission stage"
                    value={form.stage}
                    onChange={(e) =>
                      setForm({ ...form, stage: e.target.value })
                    }
                    className="w-49 h-13 outline-none"
                    leftIcon={<FileSpreadsheet size={18} strokeWidth={1.5} />}
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <Label>Status</Label>
                  <Input
                    placeholder="Status"
                    value={form.status}
                    onChange={(e) =>
                      setForm({ ...form, status: e.target.value })
                    }
                    className="w-49 h-13 outline-none"
                    leftIcon={<ChartColumnStacked size={18} strokeWidth={1.5}/>}
                  />
                </div>
              </div>
            </div>

            <DialogFooter className="w-full flex justify-end">
              
              <Button onClick={handleCreate}  className="w-25.5 h-10.5 bg-black text-white gap-4">
                Add
                <Plus />
              </Button>

            </DialogFooter>

          </DialogContent>
        </Dialog>

        <Button variant="outline" className="w-31 h-11 border-2">
          Export
          <FileDown />
        </Button>
      </div>

      <div className="px-3 mt-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Stage</TableHead>
              <TableHead>Date Time</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {submissions.map((submission) => (
              <TableRow key={submission.id}>
                <TableCell>
                  {submission.id}
                </TableCell>
                <TableCell>
                  {submission.stage}
                </TableCell>
                <TableCell>
                  {new Date(submission.deadline).toLocaleString()}
                </TableCell>
                <TableCell>
                  {submission.status}
                </TableCell>
              </TableRow>
            ))}

            {submissions.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-6">
                  No submissions created yet
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
