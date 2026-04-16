import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

type Repo = {
  name: string
  stars: number
  forks: number
}

export function Github({ data }: { data: Repo[] }) {
  return (
    <div className="w-full h-[400px] bg-white rounded-xl p-4 shadow">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey="stars" fill="#facc15" />
          <Bar dataKey="commits" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}