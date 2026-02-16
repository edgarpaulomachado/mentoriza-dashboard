"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import {
  FileDown,
  Plus,
  ClipboardClock,
  ChartColumnStacked,
  FileSpreadsheet,
  MoreHorizontal,
  Trash2,
  Pencil,
  ClipboardList,
} from "lucide-react";

import { Label } from "@/components/ui/label";

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
    deadline: "",
    stage: "",
    status: "",
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
      deadline: "",
      stage: "",
      status: "",
    });

    setOpen(false);
  };

  const toggleStatus = (id: number) => {
    setSubmissions((prev) =>
      prev.map((sub) =>
        sub.id === id
          ? {
              ...sub,
              status: sub.status === "active" ? "inactive" : "active",
            }
          : sub,
      ),
    );
  };

  const deleteSubmission = (id: number) => {
    setSubmissions((prev) => prev.filter((sub) => sub.id !== id));
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
              <div className="flex flex-col gap-3">
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
                  leftIcon={<ClipboardClock size={18} />}
                />
              </div>

              <div className="flex gap-2">
                <div className="flex flex-col gap-3">
                  <Label>Stage</Label>
                  <Input
                    placeholder="Submission stage"
                    value={form.stage}
                    onChange={(e) =>
                      setForm({ ...form, stage: e.target.value })
                    }
                    className="w-49 h-13"
                    leftIcon={<FileSpreadsheet size={18} />}
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <Label>Status</Label>
                  <Input
                    placeholder="active / inactive"
                    value={form.status}
                    onChange={(e) =>
                      setForm({ ...form, status: e.target.value })
                    }
                    className="w-49 h-13"
                    leftIcon={<ChartColumnStacked size={18} />}
                  />
                </div>
              </div>
            </div>

            <DialogFooter>
              <Button
                className="w-31 h-10.5 bg-black text-white gap-2"
                onClick={handleCreate}
              >
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
            <TableRow className="bg-muted">
              <TableHead className="w-28 flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-6 h-6 rounded-lg bg-transparent"
                />
                ID
              </TableHead>

              <TableHead>Stage</TableHead>
              <TableHead>Date Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {submissions.map((submission) => (
              <TableRow key={submission.id}>
                <TableCell className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="w-6 h-6 rounded-lg bg-transparent"
                  />
                  {submission.id.toString().padStart(2, "0")}
                </TableCell>

                <TableCell>{submission.stage}</TableCell>

                <TableCell>
                  {new Date(submission.deadline).toLocaleString()}
                </TableCell>

                <TableCell>
                  <span
                    className={`px-4 py-1 rounded-full text-sm font-medium
                      ${
                        submission.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }
                    `}
                  >
                    {submission.status}
                  </span>
                </TableCell>

                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon">
                        <MoreHorizontal size={18} />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="w-44">
                      <DropdownMenuItem>
                        <ClipboardList className="mr-2 h-4 w-4" />
                        See Details
                      </DropdownMenuItem>

                      <DropdownMenuItem>
                        <Pencil className="mr-2 h-4 w-4" />
                        Edit Information
                      </DropdownMenuItem>

                      <DropdownMenuSeparator />

                      <DropdownMenuItem
                        onClick={() => toggleStatus(submission.id)}
                      >
                        Status: {submission.status}
                      </DropdownMenuItem>

                      <DropdownMenuSeparator />

                      <DropdownMenuItem
                        className="text-red-500"
                        onClick={() => deleteSubmission(submission.id)}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}

            {submissions.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-6">
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
