import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const monthlyData = [
  { month: 'Jan', revenue: 425000, costs: 318000, profit: 107000 },
  { month: 'Feb', revenue: 438000, costs: 325000, profit: 113000 },
  { month: 'Mar', revenue: 452000, costs: 332000, profit: 120000 },
  { month: 'Apr', revenue: 445000, costs: 328000, profit: 117000 },
  { month: 'May', revenue: 460000, costs: 335000, profit: 125000 },
  { month: 'Jun', revenue: 478000, costs: 342000, profit: 136000 },
  { month: 'Jul', revenue: 492000, costs: 348000, profit: 144000 },
  { month: 'Aug', revenue: 505000, costs: 352000, profit: 153000 },
  { month: 'Sep', revenue: 520000, costs: 360000, profit: 160000 },
  { month: 'Oct', revenue: 535000, costs: 368000, profit: 167000 },
  { month: 'Nov', revenue: 550000, costs: 375000, profit: 175000 },
  { month: 'Dec', revenue: 565000, costs: 382000, profit: 183000 },
];

const quarterlyData = [
  { quarter: 'Q1', revenue: 1315000, costs: 975000, profit: 340000 },
  { quarter: 'Q2', revenue: 1383000, costs: 1005000, profit: 378000 },
  { quarter: 'Q3', revenue: 1517000, costs: 1060000, profit: 457000 },
  { quarter: 'Q4', revenue: 1650000, costs: 1125000, profit: 525000 },
];

const yearlyData = [
  { year: '2020', revenue: 4850000, costs: 3720000, profit: 1130000 },
  { year: '2021', revenue: 5120000, costs: 3850000, profit: 1270000 },
  { year: '2022', revenue: 5450000, costs: 4050000, profit: 1400000 },
  { year: '2023', revenue: 5780000, costs: 4250000, profit: 1530000 },
  { year: '2024', revenue: 6150000, costs: 4450000, profit: 1700000 },
];

export function FinancialChart() {
  const [timeframe, setTimeframe] = useState('monthly');
  
  const data = timeframe === 'monthly' ? monthlyData : 
               timeframe === 'quarterly' ? quarterlyData : yearlyData;
  
  const xAxisKey = timeframe === 'monthly' ? 'month' : 
                   timeframe === 'quarterly' ? 'quarter' : 'year';

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
        <Tabs defaultValue="monthly" onValueChange={setTimeframe} className="w-full">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
              <TabsTrigger value="yearly">Yearly</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="monthly" className="mt-2">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart
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
                  tick={{ fontSize: 12 }} 
                  tickLine={false}
                  axisLine={false}
                  className="text-muted-foreground"
                  tickFormatter={(value) => `$${value / 1000}k`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--popover))',
                    borderColor: 'hsl(var(--border))',
                    borderRadius: 'var(--radius)',
                    fontSize: '12px',
                    color: 'hsl(var(--popover-foreground))'
                  }}
                  formatter={(value) => [formatCurrency(value as number), '']}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="hsl(var(--chart-1))" 
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                  name="Revenue"
                />
                <Line 
                  type="monotone" 
                  dataKey="costs" 
                  stroke="hsl(var(--chart-3))" 
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                  name="Costs"
                />
                <Line 
                  type="monotone" 
                  dataKey="profit" 
                  stroke="hsl(var(--chart-2))" 
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                  name="Profit"
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="quarterly" className="mt-2">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart
                data={quarterlyData}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="quarter" 
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
                  tickFormatter={(value) => `$${value / 1000}k`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--popover))',
                    borderColor: 'hsl(var(--border))',
                    borderRadius: 'var(--radius)',
                    fontSize: '12px',
                    color: 'hsl(var(--popover-foreground))'
                  }}
                  formatter={(value) => [formatCurrency(value as number), '']}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="hsl(var(--chart-1))" 
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                  name="Revenue"
                />
                <Line 
                  type="monotone" 
                  dataKey="costs" 
                  stroke="hsl(var(--chart-3))" 
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                  name="Costs"
                />
                <Line 
                  type="monotone" 
                  dataKey="profit" 
                  stroke="hsl(var(--chart-2))" 
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                  name="Profit"
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="yearly" className="mt-2">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart
                data={yearlyData}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="year" 
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
                  tickFormatter={(value) => `$${value / 1000000}M`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--popover))',
                    borderColor: 'hsl(var(--border))',
                    borderRadius: 'var(--radius)',
                    fontSize: '12px',
                    color: 'hsl(var(--popover-foreground))'
                  }}
                  formatter={(value) => [formatCurrency(value as number), '']}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="hsl(var(--chart-1))" 
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                  name="Revenue"
                />
                <Line 
                  type="monotone" 
                  dataKey="costs" 
                  stroke="hsl(var(--chart-3))" 
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                  name="Costs"
                />
                <Line 
                  type="monotone" 
                  dataKey="profit" 
                  stroke="hsl(var(--chart-2))" 
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                  name="Profit"
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}