import { Cell, Pie, PieChart, Tooltip } from "recharts";
import type { Project } from "./data/pt-types";

const COLORS=["#64748b", "#60a5fa", "#34d399"];

type Props={
  projects: Project[];
};

const ProjectStatusChart = ({projects}:Props) => {
  const data=[
    {name: "Planned",value: projects.filter(p=>p.status==="planned").length},
    {name: "In-Progress",value: projects.filter(p=>p.status==="in-progress").length},
    {name: "Completed",value: projects.filter(p=>p.status==="completed").length}
  ];
  return (
    <div className="bg-[#16181C] p-6 rounded-2xl shadow-lg">
      <h2 className="text-white text-lg mb-4 font-semibold">Project Status</h2>
      <PieChart width={260} height={260}>
        <Pie data={data} innerRadius={70} outerRadius={100} paddingAngle={4} dataKey="value">
          {data.map((_,i)=>(
            <Cell key={i} fill={COLORS[i]} />
          ))}
        </Pie>
        <Tooltip/>
      </PieChart>
      <div>
        {data.map((d,i)=>(
          <h4 key={i} className="text-[#b1cbe2] text-center">{d.name}={d.value}</h4>
        ))}
      </div>
    </div>
  )
}

export default ProjectStatusChart