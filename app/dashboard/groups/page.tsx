"use client";

import GroupsButtons from "@/components/dashboard/groups-buttons/buttons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FileSearchCorner, User, Users } from "lucide-react";
import React, { useState } from "react";

export default function GroupsPage() {
  const [active, setActive] = useState("50/4");

  return (
    <div className="w-full h-dhvh flex flex-col items-center justify-start pt-4">
      <GroupsButtons />

      <Dialog>
        <div className="w-74.75 h-41.75 flex flex-col justify-center items-center mt-30">
          <FileSearchCorner className="w-10 h-10" />

          <div className="mt-5">
            <p className="text-sm font-medium text-center">No records found</p>
            <p className="text-sm font-normal text-[#999999] text-center">
              There are no records available at the moment
            </p>
          </div>

          <DialogTrigger asChild>
            <Button className="w-36 h-10.5 mt-5">Generate Groups</Button>
          </DialogTrigger>
        </div>

        <DialogContent className="w-110.75 h-61.25">
          <DialogHeader>
            <DialogTitle className="text-base font-bold">56 Groups</DialogTitle>
            <DialogDescription className="text-xs font-normal text-[#999999]">
              After suspending this student, he will not be able to access his
              account or perform any actions in the application.
            </DialogDescription>
          </DialogHeader>

          <div className="w-97 h-10 flex justify-between items-center">
            <Button
              variant={active === "50/4" ? "default" : "secondary"}
              onClick={() => setActive("50/4")}
              className={`w-21.25 h-10 rounded-lg ${active !== "50/4" ? "text-purple-500" : ""}`}
            >
              <Users />
              50/4
            </Button>

            <Button
              variant={active === "50/3" ? "default" : "secondary"}
              onClick={() => setActive("50/3")}
              className={`w-21.25 h-10 rounded-lg ${active !== "50/3" ? "text-purple-500" : ""}`}
            >
              <Users />
              50/3
            </Button>

            <Button
              variant={active === "50/5" ? "default" : "secondary"}
              onClick={() => setActive("50/5")}
              className={`w-21.25 h-10 rounded-lg ${active !== "50/5" ? "text-purple-500" : ""}`}
            >
              <Users />
              50/5
            </Button>

            <Button
              variant={active === "50/6" ? "default" : "secondary"}
              onClick={() => setActive("50/6")}
              className={`w-21.25 h-10 rounded-lg ${active !== "50/6" ? "text-purple-500" : ""}`}
            >
              <Users />
              50/6
            </Button>
          </div>

          <DialogFooter className="w-full flex justify-end">
            <Button className="w-36 h-10.5 bg-black text-white mt-5">
              Generate Groups
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
