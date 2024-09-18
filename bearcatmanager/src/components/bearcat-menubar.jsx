'use client'

import { useState } from "react"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

export function BearcatMenubar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    (<div className="flex justify-between items-center bg-[#006633] text-white p-2">
      <h1 className="text-xl font-bold">Bearcat Event Manager</h1>
      <Menubar
        className="border-none bg-transparent"
        onValueChange={(value) => setIsMenuOpen(!!value)}>
        <MenubarMenu>
          <MenubarTrigger className={`text-white ${isMenuOpen ? 'bg-[#004d26]' : ''}`}>File</MenubarTrigger>
          <MenubarContent className="bg-[#006633] border-[#004d26]">
            <MenubarItem className="text-white focus:bg-[#004d26] focus:text-white">
              New Event <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem className="text-white focus:bg-[#004d26] focus:text-white">
              Open... <MenubarShortcut>⌘O</MenubarShortcut>
            </MenubarItem>
            <MenubarItem className="text-white focus:bg-[#004d26] focus:text-white">
              Save <MenubarShortcut>⌘S</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem className="text-white focus:bg-[#004d26] focus:text-white">
              Print... <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className={`text-white ${isMenuOpen ? 'bg-[#004d26]' : ''}`}>Edit</MenubarTrigger>
          <MenubarContent className="bg-[#006633] border-[#004d26]">
            <MenubarItem className="text-white focus:bg-[#004d26] focus:text-white">
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem className="text-white focus:bg-[#004d26] focus:text-white">
              Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem className="text-white focus:bg-[#004d26] focus:text-white">Cut</MenubarItem>
            <MenubarItem className="text-white focus:bg-[#004d26] focus:text-white">Copy</MenubarItem>
            <MenubarItem className="text-white focus:bg-[#004d26] focus:text-white">Paste</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className={`text-white ${isMenuOpen ? 'bg-[#004d26]' : ''}`}>View</MenubarTrigger>
          <MenubarContent className="bg-[#006633] border-[#004d26]">
            <MenubarCheckboxItem className="text-white focus:bg-[#004d26] focus:text-white">
              Show Sidebar
            </MenubarCheckboxItem>
            <MenubarCheckboxItem className="text-white focus:bg-[#004d26] focus:text-white" checked>
              Show Status Bar
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem className="text-white focus:bg-[#004d26] focus:text-white">
              Zoom In <MenubarShortcut>⌘+</MenubarShortcut>
            </MenubarItem>
            <MenubarItem className="text-white focus:bg-[#004d26] focus:text-white">
              Zoom Out <MenubarShortcut>⌘-</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className={`text-white ${isMenuOpen ? 'bg-[#004d26]' : ''}`}>Profile</MenubarTrigger>
          <MenubarContent className="bg-[#006633] border-[#004d26]">
            <MenubarRadioGroup value="benoit">
              <MenubarRadioItem value="andy" className="text-white focus:bg-[#004d26] focus:text-white">Andy</MenubarRadioItem>
              <MenubarRadioItem value="benoit" className="text-white focus:bg-[#004d26] focus:text-white">Benoit</MenubarRadioItem>
              <MenubarRadioItem value="Luis" className="text-white focus:bg-[#004d26] focus:text-white">Luis</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem className="text-white focus:bg-[#004d26] focus:text-white" inset>Edit...</MenubarItem>
            <MenubarSeparator />
            <MenubarItem className="text-white focus:bg-[#004d26] focus:text-white" inset>Add Profile...</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>)
  );
}