"use client";
import TemplateSelectionModal from "@/components/modal/template-selector-modal";
import { Button } from "@/components/ui/button"
import { createPlayground } from "@/features/playground/actions";
import { Plus } from 'lucide-react'
import { useRouter } from "next/navigation";
import { useState } from "react"
import { toast } from "sonner";

const AddNewButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<{
    title: string;
    template: "REACT" | "NEXTJS" | "EXPRESS" | "VUE" | "HONO" | "ANGULAR";
    description?: string;
  } | null>(null)
  const router = useRouter()

  const handleSubmit = async(data: {
    title: string;
    template: "REACT" | "NEXTJS" | "EXPRESS" | "VUE" | "HONO" | "ANGULAR";
    description?: string;
  }) => {
    setSelectedTemplate(data)
    const res = await createPlayground(data);
    toast("Playground created successfully");
    // Here you would typically handle the creation of a new playground
    // with the selected template data
    console.log("Creating new playground:", data)
    setIsModalOpen(false)
    router.push(`/playground/${res?.id}`)
  }

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)} className="gap-2">
        <Plus className="size-4" />
        New playground
      </Button>

      <TemplateSelectionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleSubmit}
      />
    </>
  )
}

export default AddNewButton
