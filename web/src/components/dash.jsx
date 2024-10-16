import * as React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Settings2, SquareTerminal } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export function Dashboard() {
  return (
    <div className="grid h-screen w-full pl-[56px]">
      <aside className="inset-y fixed left-0 z-20 flex h-full flex-col border-r">
        <nav className="grid gap-1 p-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-lg bg-muted" aria-label="Playground">
                <SquareTerminal className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Playground
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-lg" aria-label="Settings">
                <Settings2 className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Settings
            </TooltipContent>
          </Tooltip>
        </nav>

        {/* Scrollable Area */}
        <ScrollArea className="h-72 w-full p-4 border-t">
          <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
          {tags.map((tag) => (
            <div key={tag}>
              <div className="text-sm">{tag}</div>
              <Separator className="my-2" />
            </div>
          ))}
        </ScrollArea>
      </aside>

      <div className="flex flex-col flex-1">
        <main className="flex h-full min-h-[50vh] flex-col p-4 lg:col-span-2">
          <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4">
            <h2 className="absolute right-3 top-3 text-sm">Output</h2>
            <div className="flex-1 overflow-auto">Playground Output Here</div>
          </div>
        </main>
      </div>
    </div>
  )
}
