import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const rawMaterialsData = [
  { name: 'Aluminum', current: 85, min: 20, max: 100 },
  { name: 'Steel', current: 62, min: 15, max: 100 },
  { name: 'Plastic', current: 18, min: 20, max: 100 },
  { name: 'Circuit Boards', current: 32, min: 30, max: 100 },
  { name: 'Copper Wire', current: 45, min: 25, max: 100 },
  { name: 'Glass', current: 38, min: 20, max: 100 },
  { name: 'Rubber', current: 55, min: 30, max: 100 },
  { name: 'Packaging', current: 22, min: 25, max: 100 },
];

const finishedGoodsData = [
  { name: 'Product A', current: 120, min: 50, max: 150 },
  { name: 'Product B', current: 85, min: 40, max: 150 },
  { name: 'Product C', current: 45, min: 30, max: 150 },
  { name: 'Product D', current: 65, min: 35, max: 150 },
  { name: 'Product E', current: 95, min: 45, max: 150 },
];

const wipData = [
  { name: 'Assembly Line 1', current: 28, min: 10, max: 40 },
  { name: 'Assembly Line 2', current: 32, min: 10, max: 40 },
  { name: 'Quality Testing', current: 15, min: 5, max: 40 },
  { name: 'Packaging', current: 22, min: 8, max: 40 },
];

export function InventoryChart() {
  const [inventoryType, setInventoryType] = useState('raw');
  
  const data = inventoryType === 'raw' ? rawMaterialsData : 
               inventoryType === 'finished' ? finishedGoodsData : wipData;

  return (
    <Card className="border-0 shadow-none">
      <CardContent className="p-0">
        <Tabs defaultValue="raw" onValueChange={setInventoryType} className="w-full">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="raw">Raw Materials</TabsTrigger>
              <TabsTrigger value="finished">Finished Goods</TabsTrigger>
              <TabsTrigger value="wip">WIP</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="raw" className="mt-2">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart
                data={rawMaterialsData}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="name" 
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
                  formatter={(value, name) => {
                    if (name === 'current') return [`${value} units`, 'Current Level'];
                    if (name === 'min') return [`${value} units`, 'Minimum Level'];
                    return [value, name];
                  }}
                />
                <Legend />
                <Bar 
                  dataKey="current" 
                  fill="hsl(var(--chart-1))" 
                  radius={[4, 4, 0, 0]}
                  name="Current Level"
                />
                <ReferenceLine 
                  y={0} 
                  stroke="hsl(var(--border))" 
                />
                {rawMaterialsData.map((entry, index) => (
                  <ReferenceLine 
                    key={`ref-min-${index}`}
                    x={entry.name}
                    y={entry.min}
                    stroke="hsl(var(--destructive))"
                    strokeDasharray="3 3"
                    isFront={true}
                  />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="finished" className="mt-2">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart
                data={finishedGoodsData}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="name" 
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
                  formatter={(value, name) => {
                    if (name === 'current') return [`${value} units`, 'Current Level'];
                    if (name === 'min') return [`${value} units`, 'Minimum Level'];
                    return [value, name];
                  }}
                />
                <Legend />
                <Bar 
                  dataKey="current" 
                  fill="hsl(var(--chart-2))" 
                  radius={[4, 4, 0, 0]}
                  name="Current Level"
                />
                <ReferenceLine 
                  y={0} 
                  stroke="hsl(var(--border))" 
                />
                {finishedGoodsData.map((entry, index) => (
                  <ReferenceLine 
                    key={`ref-min-${index}`}
                    x={entry.name}
                    y={entry.min}
                    stroke="hsl(var(--destructive))"
                    strokeDasharray="3 3"
                    isFront={true}
                  />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="wip" className="mt-2">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart
                data={wipData}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="name" 
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
                  formatter={(value, name) => {
                    if (name === 'current') return [`${value} units`, 'Current Level'];
                    if (name === 'min') return [`${value} units`, 'Minimum Level'];
                    return [value, name];
                  }}
                />
                <Legend />
                <Bar 
                  dataKey="current" 
                  fill="hsl(var(--chart-3))" 
                  radius={[4, 4, 0, 0]}
                  name="Current Level"
                />
                <ReferenceLine 
                  y={0} 
                  stroke="hsl(var(--border))" 
                />
                {wipData.map((entry, index) => (
                  <ReferenceLine 
                    key={`ref-min-${index}`}
                    x={entry.name}
                    y={entry.min}
                    stroke="hsl(var(--destructive))"
                    strokeDasharray="3 3"
                    isFront={true}
                  />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}