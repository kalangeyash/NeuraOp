import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Line, ComposedChart } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const monthlyData = [
  { month: 'Jan', orders: 125, revenue: 425000, target: 400000 },
  { month: 'Feb', orders: 132, revenue: 438000, target: 410000 },
  { month: 'Mar', orders: 141, revenue: 452000, target: 420000 },
  { month: 'Apr', orders: 138, revenue: 445000, target: 430000 },
  { month: 'May', orders: 145, revenue: 460000, target: 440000 },
  { month: 'Jun', orders: 152, revenue: 478000, target: 450000 },
  { month: 'Jul', orders: 158, revenue: 492000, target: 460000 },
  { month: 'Aug', orders: 162, revenue: 505000, target: 470000 },
  { month: 'Sep', orders: 168, revenue: 520000, target: 480000 },
  { month: 'Oct', orders: 175, revenue: 535000, target: 490000 },
  { month: 'Nov', orders: 182, revenue: 550000, target: 500000 },
  { month: 'Dec', orders: 188, revenue: 565000, target: 510000 },
];

const productData = [
  { product: 'Product A', orders: 520, revenue: 1820000 },
  { product: 'Product B', orders: 480, revenue: 1680000 },
  { product: 'Product C', orders: 320, revenue: 1120000 },
  { product: 'Product D', orders: 280, revenue: 980000 },
  { product: 'Product E', orders: 240, revenue: 840000 },
];

const regionData = [
  { region: 'North', orders: 480, revenue: 1680000 },
  { region: 'South', orders: 420, revenue: 1470000 },
  { region: 'East', orders: 380, revenue: 1330000 },
  { region: 'West', orders: 520, revenue: 1820000 },
  { region: 'International', orders: 240, revenue: 840000 },
];

export function SalesChart() {
  const [viewType, setViewType] = useState('monthly');
  
  const data = viewType === 'monthly' ? monthlyData : 
               viewType === 'product' ? productData : regionData;
  
  const xAxisKey = viewType === 'monthly' ? 'month' : 
                   viewType === 'product' ? 'product' : 'region';

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Card className="border-0 shadow-none">
      <CardContent className="p-0">
        <Tabs defaultValue="monthly" onValueChange={setViewType} className="w-full">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="product">By Product</TabsTrigger>
              <TabsTrigger value="region">By Region</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="monthly" className="mt-2">
            <ResponsiveContainer width="100%" height={250}>
              <ComposedChart
                data={monthlyData}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="month" 
                  tick={{ fontSize: 12 }} 
                  tickLine={false}
                  axisLine={false}
                  className="text-muted-foreground"
                />
                <YAxis 
                  yAxisId="left"
                  tick={{ fontSize: 12 }} 
                  tickLine={false}
                  axisLine={false}
                  className="text-muted-foreground"
                  tickFormatter={(value) => `$${value / 1000}k`}
                />
                <YAxis 
                  yAxisId="right"
                  orientation="right"
                  tick={{ fontSize: 12 }} 
                  tickLine={false}
                  axisLine={false}
                  className="text-muted-foreground"
                  tickFormatter={(value) => `${value}`}
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
                    if (name === 'revenue' || name === 'target') {
                      return [formatCurrency(value as number), name === 'revenue' ? 'Revenue' : 'Target'];
                    }
                    return [value, 'Orders'];
                  }}
                />
                <Legend />
                <Bar 
                  yAxisId="left"
                  dataKey="revenue" 
                  fill="hsl(var(--chart-1))" 
                  radius={[4, 4, 0, 0]}
                  name="Revenue"
                />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="target" 
                  stroke="hsl(var(--chart-2))" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={false}
                  name="Target"
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="orders" 
                  stroke="hsl(var(--chart-4))" 
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                  name="Orders"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="product" className="mt-2">
            <ResponsiveContainer width="100%" height={250}>
              <ComposedChart
                data={productData}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="product" 
                  tick={{ fontSize: 12 }} 
                  tickLine={false}
                  axisLine={false}
                  className="text-muted-foreground"
                />
                <YAxis 
                  yAxisId="left"
                  tick={{ fontSize: 12 }} 
                  tickLine={false}
                  axisLine={false}
                  className="text-muted-foreground"
                  tickFormatter={(value) => `$${value / 1000}k`}
                />
                <YAxis 
                  yAxisId="right"
                  orientation="right"
                  tick={{ fontSize: 12 }} 
                  tickLine={false}
                  axisLine={false}
                  className="text-muted-foreground"
                  tickFormatter={(value) => `${value}`}
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
                    if (name === 'revenue') {
                      return [formatCurrency(value as number), 'Revenue'];
                    }
                    return [value, 'Orders'];
                  }}
                />
                <Legend />
                <Bar 
                  yAxisId="left"
                  dataKey="revenue" 
                  fill="hsl(var(--chart-1))" 
                  radius={[4, 4, 0, 0]}
                  name="Revenue"
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="orders" 
                  stroke="hsl(var(--chart-4))" 
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                  name="Orders"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="region" className="mt-2">
            <ResponsiveContainer width="100%" height={250}>
              <ComposedChart
                data={regionData}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="region" 
                  tick={{ fontSize: 12 }} 
                  tickLine={false}
                  axisLine={false}
                  className="text-muted-foreground"
                />
                <YAxis 
                  yAxisId="left"
                  tick={{ fontSize: 12 }} 
                  tickLine={false}
                  axisLine={false}
                  className="text-muted-foreground"
                  tickFormatter={(value) => `$${value / 1000}k`}
                />
                <YAxis 
                  yAxisId="right"
                  orientation="right"
                  tick={{ fontSize: 12 }} 
                  tickLine={false}
                  axisLine={false}
                  className="text-muted-foreground"
                  tickFormatter={(value) => `${value}`}
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
                    if (name === 'revenue') {
                      return [formatCurrency(value as number), 'Revenue'];
                    }
                    return [value, 'Orders'];
                  }}
                />
                <Legend />
                <Bar 
                  yAxisId="left"
                  dataKey="revenue" 
                  fill="hsl(var(--chart-1))" 
                  radius={[4, 4, 0, 0]}
                  name="Revenue"
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="orders" 
                  stroke="hsl(var(--chart-4))" 
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                  name="Orders"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}