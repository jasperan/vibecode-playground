import Image from "next/image"
import { formatDistanceToNow } from "date-fns"
import type { Project } from "../types"
import { Badge } from "@/components/ui/badge"
import { Calendar, Code, User } from "lucide-react"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const createdAtFormatted = formatDistanceToNow(new Date(project.createdAt), { addSuffix: true })

  const getTemplateIcon = (template: string) => {
    switch (template.toUpperCase()) {
      case "REACT":
        return "/react-icon.png"
      case "NEXTJS":
        return "/nextjs-icon.png"
      case "EXPRESS":
        return "/express-icon.png"
      default:
        return "/placeholder.svg"
    }
  }

  return (
    <div className="overflow-hidden rounded-xl border bg-card transition-colors hover:border-foreground/20">
      <div className="p-6">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-md border bg-background">
              <Image
                src={getTemplateIcon(project.template) || "/placeholder.svg"}
                alt=""
                width={22}
                height={22}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium">{project.title}</h3>
              <Badge
                variant="outline"
                className="mt-1 rounded-sm font-mono text-[11px] font-normal text-muted-foreground"
              >
                {project.template}
              </Badge>
            </div>
          </div>

          <div className="size-9 overflow-hidden rounded-full">
            <Image
              src={project.user.image || "/placeholder.svg"}
              alt={project.user.name}
              width={36}
              height={36}
              className="size-9 object-cover"
            />
          </div>
        </div>

        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{project.description}</p>

        <div className="flex flex-col gap-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="size-3.5" />
            <span>{project.user.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="size-3.5" />
            <span>Created {createdAtFormatted}</span>
          </div>
          <div className="flex items-center gap-2">
            <Code className="size-3.5" />
            <span className="font-mono">{project.id.substring(0, 8)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
