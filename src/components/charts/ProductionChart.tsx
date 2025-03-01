import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const hourlyData = [
  { time: '00:00', production: 132, target: 150, defects: 2 },
  { time: '01:00', production: 128, target: 150, defects: 3 },
  { time: '02:00', production: 125, target: 150, defects: 1 },
  { time: '03:00', production: 118, target: 150, defects: 2 },
  { time: '04:00', production: 115, target: 150, defects: 4 },
  { time: '05:00', production: 110, target: 150, defects: 3 },
  { time: '06:00', production: 125, target: 150, defects: 2 },
  { time: '07:00', production: 138, target: 150, defects: 1 },
  { time: '08:00', production: 142, target: 150, defects: 2 },
  { time: '09:00', production: 148, target: 150, defects: 3 },
  { time: '10:00', production: 152, target: 150, defects: 2 },
  { time: '11:00', production: 155, target: 150, defects: 1 },
  { time: '12:00', production: 160, target: 150, defects: 2 },
  { time: '13:00', production: 158, target: 150, defects: 3 },
  { time: '14:00', production: 155, target: 150, defects: 4 },
  { time: '15:00', production: 152, target: 150, defects: 2 },
  { time: '16:00', production: 148, target: 150, defects: 1 },
  { time: '17:00', production: 145, target: 150, defects: 2 },
  { time: '18:00', production: 140, target: 150, defects: 3 },
  { time: '19:00', production: 138, target: 150, defects: 2 },
  { time: '20:00', production: 135, target: 150, defects: 1 },
  { time: '21:00', production: 132, target: 150, defects: 2 },
  { time: '22:00', production: 130, target: 150, defects: 3 },
  { time: '23:00', production: 128, target: 150, defects: 2 },
];

const dailyData = [
  { day: 'Mon', production: 3250, target: 3600, defects: 48 },
  { day: 'Tue', production: 3420, target: 3600, defects: 52 },
  { day: 'Wed', production: 3380, target: 3600, defects: 45 },
  { day: 'Thu', production: 3510, target: 3600, defects: 50 },
  { day: 'Fri', production: 3620, target: 3600, defects: 55 },
  { day: 'Sat', production: 2850, target: 3000, defects: 38 },
  { day: 'Sun', production: 2100, target: 2400, defects: 25 },
];

const weeklyData = [
  { week: 'Week 1', production: 22500, target: 24000, defects: 320 },
  { week: 'Week 2', production: 23100, target: 24000, defects: 345 },
  { week: 'Week 3', production: 23800, target: 24000, defects: 310 },
  { week: 'Week 4', production: 24200, target: 24000, defects: 290 },
];

export function ProductionChart() {
  const [timeframe, setTimeframe] = useState('hourly');
  
  const data = timeframe === 'hourly' ? hourlyData : 
               timeframe === 'daily' ? dailyData : weeklyData;
  
  const xAxisKey = timeframe === 'hourly' ? 'time' : 
                   timeframe === 'daily' ? 'day' : 'week';

  return (
    <Card className="border-0 shadow-none">
      <CardContent className="p-0">
        <Tabs defaultValue="hourly" onValueChange={setTimeframe} className="w-full">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="hourly">Hourly</TabsTrigger>
              <TabsTrigger value="daily">Daily</TabsTrigger>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="hourly" className="mt-2">
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart
                data={hourlyData}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorProduction" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorDefects" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--destructive))" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(var(--destructive))" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="time" 
                  tick={{ fontSize: 12 }} 
                  tickLine={false}
                  axisLine={false}
                  interval="preserveStartEnd"
                  className="text-muted-foreground"
                />
                <YAxis 
                  tick={{ fontSize: 12 }} 
                  tickLine={false}
                  axisLine={false}
                  className="text-muted-foreground"
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--popover))',
                    borderColor: 'hsl(var(--border))',
                    borderRadius: 'var(--radius)',
                    fontSize: '12px',
                    color: 'hsl(var(--popover-foreground))'
                  }}
                />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="production" 
                  stroke="hsl(var(--chart-1))" 
                  fillOpacity={1}
                  fill="url(#colorProduction)" 
                  strokeWidth={2}
                  name="Production"
                />
                <Area 
                  type="monotone" 
                  dataKey="target" 
                  stroke="hsl(var(--chart-2))" 
                  fillOpacity={0}
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Target"
                />
                <Area 
                  type="monotone" 
                  dataKey="defects" 
                  stroke="hsl(var(--destructive))" 
                  fillOpacity={0.2}
                  fill="url(#colorDefects)" 
                  strokeWidth={2}
                  name="Defects"
                />
              </AreaChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="daily" className="mt-2">
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart
                data={dailyData}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorProduction" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorDefects" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--destructive))" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(var(--destructive))" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="day" 
                  tick={{ fontSize: 12 }} 
                  tickLine={false}
                  axisLine={false}
                  className="text-muted-foreground"
                />
                <YAxis 
                  tick={{ fontSize: 12 }} 
                  tickLine={false}
                  axisLine={false}
                  className="text-muted-foreground"
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--popover))',
                    borderColor: 'hsl(var(--border))',
                    borderRadius: 'var(--radius)',
                    fontSize: '12px',
                    color: 'hsl(var(--popover-foreground))'
                  }}
                />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="production" 
                  stroke="hsl(var(--chart-1))" 
                  fillOpacity={1}
                  fill="url(#colorProduction)" 
                  strokeWidth={2}
                  name="Production"
                />
                <Area 
                  type="monotone" 
                  dataKey="target" 
                  stroke="hsl(var(--chart-2))" 
                  fillOpacity={0}
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Target"
                />
                <Area 
                  type="monotone" 
                  dataKey="defects" 
                  stroke="hsl(var(--destructive))" 
                  fillOpacity={0.2}
                  fill="url(#colorDefects)" 
                  strokeWidth={2}
                  name="Defects"
                />
              </AreaChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="weekly" className="mt-2">
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart
                data={weeklyData}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorProduction" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorDefects" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--destructive))" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(var(--destructive))" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="week" 
                  tick={{ fontSize: 12 }} 
                  tickLine={false}
                  axisLine={false}
                  className="text-muted-foreground"
                />
                <YAxis 
                  tick={{ fontSize: 12 }} 
                  tickLine={false}
                  axisLine={false}
                  className="text-muted-foreground"
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--popover))',
                    borderColor: 'hsl(var(--border))',
                    borderRadius: 'var(--radius)',
                    fontSize: '12px',
                    color: 'hsl(var(--popover-foreground))'
                  }}
                />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="production" 
                  stroke="hsl(var(--chart-1))" 
                  fillOpacity={1}
                  fill="url(#colorProduction)" 
                  strokeWidth={2}
                  name="Production"
                />
                <Area 
                  type="monotone" 
                  dataKey="target" 
                  stroke="hsl(var(--chart-2))" 
                  fillOpacity={0}
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Target"
                />
                <Area 
                  type="monotone" 
                  dataKey="defects" 
                  stroke="hsl(var(--destructive))" 
                  fillOpacity={0.2}
                  fill="url(#colorDefects)" 
                  strokeWidth={2}
                  name="Defects"
                />
              </AreaChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}