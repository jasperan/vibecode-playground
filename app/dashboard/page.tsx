import AddNewButton from "@/features/dashboard/components/add-new-btn";
import AddRepo from "@/features/dashboard/components/add-repo";

import ProjectTable from "@/features/dashboard/components/project-table";
import { getAllPlaygroundForUser , deleteProjectById ,editProjectById , duplicateProjectById} from "@/features/playground/actions";

const EmptyState = () => (
  <div className="rounded-lg border border-dashed px-6 py-16 text-center">
    <p className="text-sm text-muted-foreground">
      No playgrounds yet. Start from a template.
    </p>
  </div>
);

const DashboardMainPage = async () => {
  const playgrounds = await getAllPlaygroundForUser();
  const count = playgrounds?.length ?? 0;

  return (
    <div className="mx-auto w-full max-w-[1280px] px-6 py-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl">Playgrounds</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {count === 1 ? "1 project in your workspace" : `${count} projects in your workspace`}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <AddRepo />
          <AddNewButton />
        </div>
      </div>

      <div className="mt-8">
        {count === 0 ? (
          <EmptyState />
        ) : (
          // @ts-ignore
          <ProjectTable
            projects={playgrounds || []}
            onDeleteProject={deleteProjectById}
            onUpdateProject={editProjectById}
            onDuplicateProject={duplicateProjectById}
          />
        )}
      </div>
    </div>
  );
};

export default DashboardMainPage;
