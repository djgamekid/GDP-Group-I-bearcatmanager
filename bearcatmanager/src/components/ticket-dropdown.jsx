'use client'

import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Ticket, Clock, User, MessageSquare, Tag, AlertCircle, CheckCircle2, AlertTriangle, Paperclip, Eye, BarChart2 } from "lucide-react"

export function TicketDropdownComponent() {
  return (
    (<DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="bg-[#006747] text-white hover:bg-[#004d35]">
          <Ticket className="mr-2 h-4 w-4" />
          Ticket Actions
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 max-h-[300px] overflow-y-auto">
        <DropdownMenuLabel className="text-[#006747]">Ticket Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="text-sm">
            <Clock className="mr-2 h-3 w-3 text-[#006747]" />
            <span>Set Due Date</span>
            <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-sm">
            <User className="mr-2 h-3 w-3 text-[#006747]" />
            <span>Assign</span>
            <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-sm">
            <MessageSquare className="mr-2 h-3 w-3 text-[#006747]" />
            <span>Comment</span>
            <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-sm">
            <Tag className="mr-2 h-3 w-3 text-[#006747]" />
            <span>Add Label</span>
            <DropdownMenuShortcut>⌘L</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-sm">
            <AlertTriangle className="mr-2 h-3 w-3 text-[#006747]" />
            <span>Set Priority</span>
            <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-sm">
            <Paperclip className="mr-2 h-3 w-3 text-[#006747]" />
            <span>Attach File</span>
            <DropdownMenuShortcut>⌘F</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-sm">
            <Eye className="mr-2 h-3 w-3 text-[#006747]" />
            <span>Watch</span>
            <DropdownMenuShortcut>⌘W</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-sm">
            <BarChart2 className="mr-2 h-3 w-3 text-[#006747]" />
            <span>View Stats</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="text-sm">
            <AlertCircle className="mr-2 h-3 w-3 text-[#006747]" />
            <span>Escalate</span>
            <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-sm">
            <CheckCircle2 className="mr-2 h-3 w-3 text-[#006747]" />
            <span>Resolve</span>
            <DropdownMenuShortcut>⌘R</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>)
  );
}