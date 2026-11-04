import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

const AddRepo = () => {
  return (
    <Button variant="outline" className="gap-2">
      <Github className="size-4" />
      Import from GitHub
    </Button>
  )
}

export default AddRepo
