import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';
import {
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  Brain,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  CircleDollarSign,
  Clock,
  Cog,
  LineChart,
  Loader2,
  MessageSquare,
  Package,
  Percent,
  RefreshCw,
  ShieldAlert,
  Sparkles,
  TrendingDown,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { ProductionChart } from '@/components/charts/ProductionChart';
import { InventoryChart } from '@/components/charts/InventoryChart';
import { FinancialChart } from '@/components/charts/FinancialChart';
import { SalesChart } from '@/components/charts/SalesChart';
import { AIInsightsCard } from '@/components/cards/AIInsightsCard';
import { ChatAssistant } from '@/components/ChatAssistant';

export default function Dashboard() {
  const { toast } = useToast();
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your manufacturing operations.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-9">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button size="sm" className="h-9">
            <Sparkles className="mr-2 h-4 w-4" />
            AI Insights
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              OEE Score
            </CardTitle>
            <Percent className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold">78.3%</div>
              <Badge variant="outline" className="text-xs">
                <ArrowUp className="mr-1 h-3 w-3 text-emerald-500" />
                4.2%
              </Badge>
            </div>
            <Progress value={78.3} className="mt-3 h-2" />
            <p className="text-xs text-muted-foreground mt-2">
              Target: 85%
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Production Rate
            </CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold">142</div>
              <div className="text-sm text-muted-foreground">units/hr</div>
              <Badge variant="outline" className="text-xs">
                <ArrowDown className="mr-1 h-3 w-3 text-red-500" />
                2.1%
              </Badge>
            </div>
            <Progress value={71} className="mt-3 h-2" />
            <p className="text-xs text-muted-foreground mt-2">
              Target: 200 units/hr
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Inventory Status
            </CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold">92%</div>
              <Badge className="bg-amber-500 text-xs">
                <AlertTriangle className="mr-1 h-3 w-3" />
                3 Low
              </Badge>
            </div>
            <Progress value={92} className="mt-3 h-2" />
            <p className="text-xs text-muted-foreground mt-2">
              3 materials below reorder point
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Cost Per Unit
            </CardTitle>
            <CircleDollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold">$12.47</div>
              <Badge variant="outline" className="text-xs">
                <ArrowDown className="mr-1 h-3 w-3 text-emerald-500" />
                1.8%
              </Badge>
            </div>
            <Progress value={65} className="mt-3 h-2" />
            <p className="text-xs text-muted-foreground mt-2">
              Target: $10.00
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="production" className="space-y-4">
        <TabsList>
          <TabsTrigger value="production">Production</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="sales">Sales & Orders</TabsTrigger>
          <TabsTrigger value="ai" className="bg-primary/10 text-primary">
            <Zap className="mr-1 h-4 w-4" />
            AI Insights
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="production" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Production Metrics</CardTitle>
                <CardDescription>
                  Real-time production data for the last 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ProductionChart />
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Machine Status</CardTitle>
                <CardDescription>
                  Current status of production equipment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] pr-4">
                  {[
                    { name: "CNC Machine #1", status: "Running", uptime: "98.2%", alert: false },
                    { name: "Assembly Line A", status: "Running", uptime: "97.5%", alert: false },
                    { name: "Packaging Unit 3", status: "Idle", uptime: "76.4%", alert: true },
                    { name: "Quality Control", status: "Running", uptime: "99.1%", alert: false },
                    { name: "Injection Molder", status: "Maintenance", uptime: "82.3%", alert: true },
                    { name: "Laser Cutter", status: "Running", uptime: "95.7%", alert: false },
                  ].map((machine, i) => (
                    <div key={i} className="mb-4">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{machine.name}</div>
                        <Badge 
                          variant={machine.status === "Running" ? "outline" : "secondary"}
                          className={machine.status === "Running" ? "bg-green-500/10 text-green-500" : 
                                    machine.status === "Idle" ? "bg-amber-500/10 text-amber-500" : 
                                    "bg-blue-500/10 text-blue-500"}
                        >
                          {machine.status}
                        </Badge>
                      </div>
                      <div className="mt-1 flex items-center justify-between text-sm">
                        <div className="text-muted-foreground">Uptime: {machine.uptime}</div>
                        {machine.alert && (
                          <div className="flex items-center text-amber-500">
                            <AlertTriangle className="mr-1 h-3 w-3" />
                            <span className="text-xs">Needs attention</span>
                          </div>
                        )}
                      </div>
                      <Progress 
                        value={parseFloat(machine.uptime)} 
                        className={`mt-2 h-1.5 ${
                          parseFloat(machine.uptime) > 95 ? "bg-green-500/20" : 
                          parseFloat(machine.uptime) > 85 ? "bg-amber-500/20" : 
                          "bg-red-500/20"
                        }`} 
                      />
                      {i < 5 && <Separator className="my-3" />}
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Quality Metrics</CardTitle>
                <CardDescription>
                  Defect rates and quality control data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Defect Rate</div>
                      <div className="text-2xl font-bold">1.2%</div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      <ArrowDown className="mr-1 h-3 w-3 text-emerald-500" />
                      0.3%
                    </Badge>
                  </div>
                  <Separator />
                  <div>
                    <div className="mb-2 text-sm font-medium">Quality by Product Line</div>
                    <div className="space-y-2">
                      {[
                        { name: "Product A", quality: 99.1 },
                        { name: "Product B", quality: 98.7 },
                        { name: "Product C", quality: 97.2 },
                      ].map((product, i) => (
                        <div key={i} className="grid grid-cols-2 gap-2">
                          <div className="text-sm">{product.name}</div>
                          <div className="flex items-center gap-2">
                            <Progress value={product.quality} className="h-2" />
                            <span className="text-xs">{product.quality}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Cycle Time Analysis</CardTitle>
                <CardDescription>
                  Production cycle efficiency metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Avg. Cycle Time</div>
                      <div className="text-2xl font-bold">4.2 min</div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      <ArrowDown className="mr-1 h-3 w-3 text-emerald-500" />
                      0.3 min
                    </Badge>
                  </div>
                  <Separator />
                  <div>
                    <div className="mb-2 text-sm font-medium">Process Breakdown</div>
                    <div className="space-y-2">
                      {[
                        { name: "Setup", time: 0.8, percent: 19 },
                        { name: "Processing", time: 2.5, percent: 60 },
                        { name: "Quality Check", time: 0.5, percent: 12 },
                        { name: "Transfer", time: 0.4, percent: 9 },
                      ].map((process, i) => (
                        <div key={i} className="grid grid-cols-3 gap-2">
                          <div className="text-sm">{process.name}</div>
                          <div className="text-sm">{process.time} min</div>
                          <div className="flex items-center gap-2">
                            <Progress value={process.percent} className="h-2" />
                            <span className="text-xs">{process.percent}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Workforce Productivity</CardTitle>
                <CardDescription>
                  Team performance metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Productivity Rate</div>
                      <div className="text-2xl font-bold">87.3%</div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      <ArrowUp className="mr-1 h-3 w-3 text-emerald-500" />
                      2.1%
                    </Badge>
                  </div>
                  <Separator />
                  <div>
                    <div className="mb-2 text-sm font-medium">Shift Performance</div>
                    <div className="space-y-2">
                      {[
                        { name: "Morning Shift", rate: 91.2 },
                        { name: "Afternoon Shift", rate: 86.7 },
                        { name: "Night Shift", rate: 84.1 },
                      ].map((shift, i) => (
                        <div key={i} className="grid grid-cols-2 gap-2">
                          <div className="text-sm">{shift.name}</div>
                          <div className="flex items-center gap-2">
                            <Progress value={shift.rate} className="h-2" />
                            <span className="text-xs">{shift.rate}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="inventory" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Inventory Levels</CardTitle>
                <CardDescription>
                  Current stock levels and material usage
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <InventoryChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Reorder Alerts</CardTitle>
                <CardDescription>
                  Materials below threshold levels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] pr-4">
                  {[
                    { name: "Aluminum Sheet 3mm", level: 15, threshold: 20, urgent: true },
                    { name: "Plastic Resin Type B", level: 18, threshold: 25, urgent: true },
                    { name: "Circuit Board v2", level: 32, threshold: 40, urgent: false },
                    { name: "Steel Rod 10mm", level: 28, threshold: 30, urgent: false },
                    { name: "Packaging Material", level: 22, threshold: 30, urgent: false },
                  ].map((material, i) => (
                    <div key={i} className="mb-4">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{material.name}</div>
                        <Badge 
                          variant={material.urgent ? "destructive" : "outline"}
                          className={!material.urgent && "bg-amber-500/10 text-amber-500"}
                        >
                          {material.urgent ? "Critical" : "Low"}
                        </Badge>
                      </div>
                      <div className="mt-1 flex items-center justify-between text-sm">
                        <div className="text-muted-foreground">
                          {material.level} units (min: {material.threshold})
                        </div>
                        <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
                          Order
                        </Button>
                      </div>
                      <Progress 
                        value={(material.level / material.threshold) * 100} 
                        className={`mt-2 h-1.5 ${
                          material.level < material.threshold * 0.5 ? "bg-red-500/20" : 
                          "bg-amber-500/20"
                        }`} 
                      />
                      {i < 4 && <Separator className="my-3" />}
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Material Usage</CardTitle>
                <CardDescription>
                  Consumption rates by material type
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Raw Materials", usage: 68, trend: "up", percent: 2.4 },
                    { name: "Components", usage: 42, trend: "down", percent: 1.2 },
                    { name: "Packaging", usage: 31, trend: "up", percent: 3.7 },
                  ].map((material, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{material.name}</div>
                        <div className="flex items-center">
                          {material.trend === "up" ? (
                            <TrendingUp className="mr-1 h-4 w-4 text-emerald-500" />
                          ) : (
                            <TrendingDown className="mr-1 h-4 w-4 text-red-500" />
                          )}
                          <span className={`text-xs ${
                            material.trend === "up" ? "text-emerald-500" : "text-red-500"
                          }`}>
                            {material.percent}%
                          </span>
                        </div>
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        {material.usage} units/day
                      </div>
                      <Progress value={material.usage} max={100} className="mt-2 h-2" />
                      {i < 2 && <Separator className="my-3" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>WIP Inventory</CardTitle>
                <CardDescription>
                  Work in progress by production stage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { stage: "Initial Assembly", units: 42, value: "$8,400" },
                    { stage: "Component Integration", units: 28, value: "$14,000" },
                    { stage: "Quality Testing", units: 15, value: "$9,750" },
                    { stage: "Final Assembly", units: 23, value: "$18,400" },
                  ].map((wip, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{wip.stage}</div>
                        <div className="text-sm font-medium">{wip.value}</div>
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        {wip.units} units
                      </div>
                      <Progress value={wip.units} max={50} className="mt-2 h-2" />
                      {i < 3 && <Separator className="my-3" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>EOQ Analysis</CardTitle>
                <CardDescription>
                  Economic order quantity optimization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { 
                      material: "Aluminum Sheet 3mm", 
                      current: 100, 
                      recommended: 150, 
                      savings: "$420" 
                    },
                    { 
                      material: "Plastic Resin Type B", 
                      current: 200, 
                      recommended: 175, 
                      savings: "$280" 
                    },
                    { 
                      material: "Circuit Board v2", 
                      current: 50, 
                      recommended: 75, 
                      savings: "$650" 
                    },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="font-medium">{item.material}</div>
                      <div className="mt-1 grid grid-cols-3 text-sm">
                        <div>
                          <div className="text-muted-foreground">Current</div>
                          <div>{item.current}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Optimal</div>
                          <div className="font-medium text-primary">{item.recommended}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Savings</div>
                          <div className="text-emerald-500">{item.savings}</div>
                        </div>
                      </div>
                      {i < 2 && <Separator className="my-3" />}
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="mt-2 w-full">
                    <Cog className="mr-2 h-4 w-4" />
                    Apply Optimizations
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="financial" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Financial Performance</CardTitle>
                <CardDescription>
                  Cost and revenue metrics over time
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <FinancialChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Cost Breakdown</CardTitle>
                <CardDescription>
                  Manufacturing cost analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { category: "Raw Materials", cost: "$4.82", percent: 38.7 },
                    { category: "Labor", cost: "$3.65", percent: 29.3 },
                    { category: "Overhead", cost: "$2.10", percent: 16.8 },
                    { category: "Packaging", cost: "$1.20", percent: 9.6 },
                    { category: "Shipping", cost: "$0.70", percent: 5.6 },
                  ].map((cost, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{cost.category}</div>
                        <div className="text-sm font-medium">{cost.cost}</div>
                      </div>
                      <div className="mt-1 flex items-center justify-between text-sm">
                        <Progress value={cost.percent} className="h-2 flex-1" />
                        <span className="ml-2 text-xs text-muted-foreground">{cost.percent}%</span>
                      </div>
                      {i < 4 && <Separator className="my-2" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Break-even Analysis</CardTitle>
                <CardDescription>
                  Production volume vs. profitability
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Break-even Point</div>
                      <div className="text-2xl font-bold">4,250</div>
                      <div className="text-xs text-muted-foreground">units/month</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Current Production</div>
                      <div className="text-2xl font-bold">5,120</div>
                      <div className="text-xs text-muted-foreground">units/month</div>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <div className="mb-2 text-sm font-medium">Profitability Status</div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                      <div className="text-sm">
                        Production is <span className="font-medium text-emerald-500">20.5%</span> above break-even
                      </div>
                    </div>
                    <Progress value={120.5} max={200} className="mt-3 h-2" />
                    <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                      <div>Break-even</div>
                      <div>Current</div>
                      <div>Target</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Cash Flow</CardTitle>
                <CardDescription>
                  30-day cash flow projection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Inflow (30d)</div>
                      <div className="text-2xl font-bold">$128.5k</div>
                      <div className="flex items-center text-xs text-emerald-500">
                        <ArrowUp className="mr-1 h-3 w-3" />
                        8.2% vs. last month
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Outflow (30d)</div>
                      <div className="text-2xl font-bold">$104.2k</div>
                      <div className="flex items-center text-xs text-red-500">
                        <ArrowUp className="mr-1 h-3 w-3" />
                        5.7% vs. last month
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <div className="mb-2 text-sm font-medium">Upcoming Payments</div>
                    <div className="space-y-2">
                      {[
                        { name: "Supplier Payment", amount: "$42,800", due: "In 5 days" },
                        { name: "Equipment Lease", amount: "$8,500", due: "In 12 days" },
                        { name: "Utility Bills", amount: "$3,200", due: "In 18 days" },
                      ].map((payment, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div className="text-sm">{payment.name}</div>
                          <div className="flex items-center space-x-2">
                            <div className="text-sm font-medium">{payment.amount}</div>
                            <div className="text-xs text-muted-foreground">{payment.due}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Cost Reduction</CardTitle>
                <CardDescription>
                  AI-suggested optimization opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { 
                      area: "Material Substitution", 
                      saving: "$0.42/unit", 
                      impact: "High",
                      description: "Replace aluminum components with composite alternatives"
                    },
                    { 
                      area: "Process Optimization", 
                      saving: "$0.28/unit", 
                      impact: "Medium",
                      description: "Reduce cycle time in assembly stage by 12%"
                    },
                    { 
                      area: "Supplier Negotiation", 
                      saving: "$0.15/unit", 
                      impact: "Medium",
                      description: "Consolidate orders with Supplier B for volume discount"
                    },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{item.area}</div>
                        <Badge 
                          variant="outline" 
                          className={
                            item.impact === "High" 
                              ? "bg-emerald-500/10 text-emerald-500" 
                              : "bg-amber-500/10 text-amber-500"
                          }
                        >
                          {item.impact}
                        </Badge>
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        {item.description}
                      </div>
                      <div className="mt-1 text-sm font-medium text-emerald-500">
                        Potential savings: {item.saving}
                      </div>
                      {i < 2 && <Separator className="my-3" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="sales" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Sales Performance</CardTitle>
                <CardDescription>
                  Order volume and revenue trends
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <SalesChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Order Status</CardTitle>
                <CardDescription>
                  Current order processing status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">New Orders</div>
                      <div className="text-2xl font-bold">24</div>
                      <div className="flex items-center text-xs text-emerald-500">
                        <ArrowUp className="mr-1 h-3 w-3" />
                        12% vs. yesterday
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Processing</div>
                      <div className="text-2xl font-bold">18</div>
                      <div className="flex items-center text-xs text-amber-500">
                        <Clock className="mr-1 h-3 w-3" />
                        Avg. 2.3 days
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <div className="mb-2 text-sm font-medium">Order Pipeline</div>
                    <div className="space-y-2">
                      {[
                        { stage: "New", count: 24, percent: 30 },
                        { stage: "Processing", count: 18, percent: 22.5 },
                        { stage: "Ready to Ship", count: 12, percent: 15 },
                        { stage: "Shipped", count: 26, percent: 32.5 },
                      ].map((stage, i) => (
                        <div key={i} className="grid grid-cols-3 gap-2">
                          <div className="text-sm">{stage.stage}</div>
                          <div className="text-sm">{stage.count}</div>
                          <div className="flex items-center gap-2">
                            <Progress value={stage.percent} className="h-2" />
                            <span className="text-xs">{stage.percent}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Sales Forecast</CardTitle>
                <CardDescription>
                  AI-powered 30-day projection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground">Projected Revenue</div>
                      <div className="text-2xl font-bold">$248.5k</div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      <ArrowUp className="mr-1 h-3 w-3 text-emerald-500" />
                      8.2%
                    </Badge>
                  </div>
                  <Separator />
                  <div>
                    <div className="mb-2 text-sm font-medium">Product Line Forecast</div>
                    <div className="space-y-3">
                      {[
                        { name: "Product Line A", forecast: "$124.2k", growth: 12.5, positive: true },
                        { name: "Product Line B", forecast: "$86.8k", growth: 5.2, positive: true },
                        { name: "Product Line C", forecast: "$37.5k", growth: -2.1, positive: false },
                      ].map((product, i) => (
                        <div key={i}>
                          <div className="flex items-center justify-between">
                            <div className="font-medium">{product.name}</div>
                            <div className="text-sm font-medium">{product.forecast}</div>
                          </div>
                          <div className="mt-1 flex items-center text-xs">
                            {product.positive ? (
                              <ArrowUp className="mr-1 h-3 w-3 text-emerald-500" />
                            ) : (
                              <ArrowDown className="mr-1 h-3 w-3 text-red-500" />
                            )}
                            <span className={product.positive ? "text-emerald-500" : "text-red-500"}>
                              {product.growth}% vs. last month
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Customer Insights</CardTitle>
                <CardDescription>
                  Key customer metrics and analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Active Customers</div>
                      <div className="text-2xl font-bold">128</div>
                      <div className="flex items-center text-xs text-emerald-500">
                        <ArrowUp className="mr-1 h-3 w-3" />
                        4 new this month
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Avg. Order Value</div>
                      <div className="text-2xl font-bold">$4,280</div>
                      <div className="flex items-center text-xs text-emerald-500">
                        <ArrowUp className="mr-1 h-3 w-3" />
                        6.2% increase
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <div className="mb-2 text-sm font-medium">Top Customers</div>
                    <div className="space-y-2">
                      {[
                        { name: "Acme Industries", revenue: "$42.8k", growth: 15.2 },
                        { name: "TechCorp Solutions", revenue: "$38.5k", growth: 8.7 },
                        { name: "Global Manufacturing", revenue: "$27.2k", growth: 12.1 },
                      ].map((customer, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div className="text-sm">{customer.name}</div>
                          <div className="flex items-center space-x-2">
                            <div className="text-sm font-medium">{customer.revenue}</div>
                            <div className="flex items-center text-xs text-emerald-500">
                              <ArrowUp className="mr-1 h-3 w-3" />
                              {customer.growth}%
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Sales Pipeline</CardTitle>
                <CardDescription>
                  Conversion metrics and opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground">Pipeline Value</div>
                      <div className="text-2xl font-bold">$1.24M</div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      <ArrowUp className="mr-1 h-3 w-3 text-emerald-500" />
                      18.5%
                    </Badge>
                  </div>
                  <Separator />
                  <div>
                    <div className="mb-2 text-sm font-medium">Conversion Funnel</div>
                    <div className="space-y-2">
                      {[
                        { stage: "Leads", count: 42, value: "$2.1M", rate: "—" },
                        { stage: "Qualified", count: 28, value: "$1.4M", rate: "66.7%" },
                        { stage: "Proposal", count: 15, value: "$750k", rate: "53.6%" },
                        { stage: "Negotiation", count: 8, value: "$400k", rate: "53.3%" },
                      ].map((stage, i) => (
                        <div key={i} className="grid grid-cols-4 gap-2">
                          <div className="text-sm">{stage.stage}</div>
                          <div className="text-sm">{stage.count}</div>
                          <div className="text-sm">{stage.value}</div>
                          <div className="text-sm">{stage.rate}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="ai" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>AI-Powered Insights</CardTitle>
                <CardDescription>
                  Actionable recommendations based on your data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AIInsightsCard />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Predictive Analytics</CardTitle>
                <CardDescription>
                  AI forecasts and trend analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { 
                      title: "Demand Forecast", 
                      prediction: "15% increase in Product A demand expected next quarter",
                      confidence: 87,
                      action: "Increase production capacity by 10%"
                    },
                    { 
                      title: "Maintenance Prediction", 
                      prediction: "CNC Machine #1 likely to require maintenance within 2 weeks",
                      confidence: 92,
                      action: "Schedule preventive maintenance next week"
                    },
                    { 
                      title: "Inventory Optimization", 
                      prediction: "Current stock levels for Component B will lead to stockout in 18 days",
                      confidence: 84,
                      action: "Place order for 2,000 units this week"
                    },
                  ].map((insight, i) => (
                    <div key={i} className="rounded-lg border bg-card p-4">
                      <div className="flex items-center gap-2">
                        <Brain className="h-5 w-5 text-primary" />
                        <div className="font-medium">{insight.title}</div>
                      </div>
                      <div className="mt-2 text-sm">{insight.prediction}</div>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="text-xs text-muted-foreground">
                          Confidence: {insight.confidence}%
                        </div>
                        <Badge variant="outline" className="bg-primary/10 text-primary">
                          AI Prediction
                        </Badge>
                      </div>
                      <Separator className="my-3" />
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <div className="text-sm font-medium">Recommended Action:</div>
                      </div>
                      <div className="mt-1 text-sm">{insight.action}</div>
                      <Button variant="outline" size="sm" className="mt-3 w-full">
                        Apply Recommendation
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>SOP Compliance</CardTitle>
                <CardDescription>
                  AI monitoring of standard operating procedures
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground">Overall Compliance</div>
                      <div className="text-2xl font-bold">92.7%</div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      <ArrowUp className="mr-1 h-3 w-3 text-emerald-500" />
                      3.2%
                    </Badge>
                  </div>
                  <Progress value={92.7} className="h-2" />
                  <Separator />
                  <div>
                    <div className="mb-2 text-sm font-medium">Compliance by Area</div>
                    <div className="space-y-3">
                      {[
                        { area: "Quality Control", compliance: 96.8, status: "Compliant" },
                        { area: "Safety Protocols", compliance: 98.2, status: "Compliant" },
                        { area: "Production Process", compliance: 88.5, status: "Needs Review" },
                        { area: "Material Handling", compliance: 91.3, status: "Compliant" },
                      ].map((item, i) => (
                        <div key={i}>
                          <div className="flex items-center justify-between">
                            <div className="font-medium">{item.area}</div>
                            <Badge 
                              variant="outline" 
                              className={
                                item.compliance > 95 
                                  ? "bg-emerald-500/10 text-emerald-500" 
                                  : item.compliance > 90
                                  ? "bg-amber-500/10 text-amber-500"
                                  : "bg-red-500/10 text-red-500"
                              }
                            >
                              {item.status}
                            </Badge>
                          </div>
                          <div className="mt-1 flex items-center gap-2">
                            <Progress value={item.compliance} className="h-2 flex-1" />
                            <span className="text-xs">{item.compliance}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Risk Assessment</CardTitle>
                <CardDescription>
                  AI-identified operational risks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { 
                      risk: "Supply Chain Disruption", 
                      probability: "Medium", 
                      impact: "High",
                      description: "Key supplier facing logistics challenges"
                    },
                    { 
                      risk: "Quality Control Issue", 
                      probability: "Low", 
                      impact: "High",
                      description: "Potential defect in component batch #4582"
                    },
                    { 
                      risk: "Production Bottleneck", 
                      probability: "High", 
                      impact: "Medium",
                      description: "Assembly stage capacity reaching limits"
                    },
                  ].map((risk, i) => (
                    <div key={i} className="rounded-lg border bg-card p-4">
                      <div className="flex items-center gap-2">
                        <ShieldAlert className="h-5 w-5 text-amber-500" />
                        <div className="font-medium">{risk.risk}</div>
                      </div>
                      <div className="mt-2 text-sm">{risk.description}</div>
                      <div className="mt-2 flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <div className="text-xs text-muted-foreground">Probability:</div>
                          <Badge 
                            variant="outline" 
                            className={
                              risk.probability === "Low" 
                                ? "bg-emerald-500/10 text-emerald-500" 
                                : risk.probability === "Medium"
                                ? "bg-amber-500/10 text-amber-500"
                                : "bg-red-500/10 text-red-500"
                            }
                          >
                            {risk.probability}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="text-xs text-muted-foreground">Impact:</div>
                          <Badge 
                            variant="outline" 
                            className={
                              risk.impact === "Low" 
                                ? "bg-emerald-500/10 text-emerald-500" 
                                : risk.impact === "Medium"
                                ? "bg-amber-500/10 text-amber-500"
                                : "bg-red-500/10 text-red-500"
                            }
                          >
                            {risk.impact}
                          </Badge>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="mt-3 w-full">
                        View Mitigation Plan
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div>
                  <CardTitle>AI Assistant</CardTitle>
                  <CardDescription>
                    Ask questions about your manufacturing data
                  </CardDescription>
                </div>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => setShowChat(!showChat)}
                >
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-primary" />
                    <div className="font-medium">NeuraOps Assistant</div>
                  </div>
                  <div className="mt-3 text-sm">
                    Ask me anything about your manufacturing operations, such as:
                  </div>
                  <div className="mt-2 space-y-2">
                    {[
                      "What's causing the drop in OEE today?",
                      "Which products have the highest profit margin?",
                      "When should we order more raw materials?",
                      "How can we reduce production costs?"
                    ].map((question, i) => (
                      <div 
                        key={i} 
                        className="cursor-pointer rounded-md bg-muted/50 px-3 py-2 text-sm hover:bg-muted"
                        onClick={() => {
                          setShowChat(true);
                          toast({
                            title: "Question submitted",
                            description: `"${question}" sent to AI assistant`,
                          });
                        }}
                      >
                        {question}
                      </div>
                    ))}
                  </div>
                  <Button className="mt-4 w-full" onClick={() => setShowChat(true)}>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Open AI Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
      
      {showChat && (
        <ChatAssistant onClose={() => setShowChat(false)} />
      )}
    </div>
  );
}