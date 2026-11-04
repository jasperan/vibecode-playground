/**
 * The hero visual: the product's own screen, not an illustration.
 * One generated app - file tree with the caret on the file being written,
 * the changed line in the editor, and the result running in the preview.
 */
export function HeroPreview() {
  return (
    <div className="overflow-hidden rounded-xl border bg-card shadow-[0_1px_2px_rgba(29,27,24,0.05),0_24px_56px_-40px_rgba(29,27,24,0.4)]">
      <div className="flex items-center justify-between border-b px-4 py-2.5">
        <span className="font-mono text-xs text-muted-foreground">todo-app · main</span>
        <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span className="size-1.5 rounded-full bg-muted-foreground/60" />
          preview ready
        </span>
      </div>

      <div className="grid grid-cols-[136px_minmax(0,1fr)]">
        <div className="border-r px-3 py-3 font-mono text-[11px] leading-6 text-muted-foreground">
          <p className="text-foreground/60">src/</p>
          <p className="-mx-1 rounded-sm bg-primary/15 px-1 text-foreground">App.tsx</p>
          <p className="pl-3">main.tsx</p>
          <p className="pl-3">styles.css</p>
          <p className="mt-3 text-foreground">
            <span className="text-primary">&rsaquo;</span>{" "}
            <span className="text-muted-foreground">writing App.tsx</span>
          </p>
        </div>

        <div className="overflow-x-auto py-3 font-mono text-[11px] leading-6">
          <p className="px-4 text-muted-foreground">
            <span className="text-foreground/70">import</span> {"{ useState }"} <span className="text-foreground/70">from</span>{" "}
            <span className="text-primary">&quot;react&quot;</span>
          </p>
          <p className="px-4 text-muted-foreground/60"> </p>
          <p className="px-4">
            <span className="text-foreground/70">export function</span>{" "}
            <span className="text-foreground">App</span>() {"{"}
          </p>
          <p className="border-l-2 border-primary bg-primary/10 px-4 text-foreground">
            {"  const [filter, setFilter] = useState(\"all\")"}
          </p>
          <p className="px-4 text-foreground">
            {"  return <TodoList filter={filter} />"}
          </p>
          <p className="px-4 text-foreground">{"}"}</p>
          <p className="px-4 text-muted-foreground/70">{"// filter row added in App.tsx"}</p>
        </div>
      </div>

      <div className="border-t bg-background p-4">
        <div className="rounded-lg border bg-card p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Today</p>
            <div className="flex items-center gap-2">
              <span className="flex size-6 items-center justify-center rounded-full bg-muted font-mono text-[10px] text-muted-foreground">
                JM
              </span>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-4 border-b pb-2 font-mono text-[11px] text-muted-foreground">
            <span className="border-b-2 border-foreground pb-2 text-foreground">All</span>
            <span>Active</span>
            <span>Done</span>
          </div>

          <ul className="mt-2 space-y-1.5 text-[13px]">
            <li className="flex items-center gap-2">
              <span className="size-3.5 rounded-sm border" />
              <span>Write the filter row</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="size-3.5 rounded-sm border" />
              <span>Wire it to the list</span>
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <span className="flex size-3.5 items-center justify-center rounded-sm border bg-foreground/80" />
              <span className="line-through">Pick a template</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
