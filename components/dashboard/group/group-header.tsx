import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ClipboardList, MoreVertical, Trash2 } from "lucide-react";

interface GroupHeaderProps {
  groupName: string;
  description: string;
}

export default function GroupHeader({
  groupName,
  description,
}: GroupHeaderProps) {
  return (
    <div className="w-full flex justify-between p-3">
      <div className="flex flex-col">
        <div className="w-[78px] h-[26px] bg-[#E4E4E7] rounded-sm">
          <p className="font-bold text-lg text-center">{groupName}</p>
        </div>
        <p className="text-sm">{description}</p>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="text-[#999999] border border-[#D9D9D9]"
            variant={"outline"}
            size="icon"
          >
            <MoreVertical size={18} />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-44">
          <DropdownMenuItem>
            <ClipboardList className="mr-2 h-4 w-4" />
            Ver Detalhes
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Trash2 className="mr-2 h-4 w-4" />
            Deletar
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
