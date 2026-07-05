import { useParams } from "react-router-dom";
import { toolRegistry } from "../tools/registry";
import { tools } from "../data/tools";

export default function ToolPage() {
  const { toolId } = useParams();

  const ToolComponent = toolRegistry[toolId];
  const toolMeta = tools.find((t) => t.slug === toolId);

  if (!ToolComponent) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Tool not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-10">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold">{toolMeta?.name}</h1>
        <p className="text-zinc-400 mt-2">
          {toolMeta?.description}
        </p>
      </div>

      {/* TOOL ENGINE RENDER */}
      <div className="p-6 border border-zinc-800 rounded-xl bg-zinc-900">
        <ToolComponent />
      </div>

    </div>
  );
}