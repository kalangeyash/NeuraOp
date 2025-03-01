import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {
  BarChart3,
  BoxIcon,
  CircleDollarSign,
  ClipboardList,
  Home,
  LayoutDashboard,
  LineChart,
  Settings,
  ShoppingCart,
  Users,
  Zap,
  ChevronRight,
  ChevronLeft,
  Brain,
} from 'lucide-react';

interface SidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  open: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const SidebarItem = ({ icon: Icon, label, active, open, onClick, children }: SidebarItemProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mb-1">
      <div
        className={cn(
          "flex items-center py-2 px-3 rounded-md cursor-pointer transition-colors",
          active ? "bg-primary/10 text-primary" : "hover:bg-muted",
          !open && "justify-center"
        )}
        onClick={() => {
          if (onClick) onClick();
          if (children) setExpanded(!expanded);
        }}
      >
        <Icon className={cn("h-5 w-5", active && "text-primary")} />
        {open && (
          <>
            <span className="ml-3 text-sm font-medium flex-1">{label}</span>
            {children && (
              <ChevronRight
                className={cn(
                  "h-4 w-4 transition-transform",
                  expanded && "transform rotate-90"
                )}
              />
            )}
          </>
        )}
      </div>
      {open && expanded && children && (
        <div className="ml-8 mt-1 space-y-1">{children}</div>
      )}
    </div>
  );
};

export function Sidebar({ open, onOpenChange }: SidebarProps) {
  return (
    <>
      <motion.div
        className={cn(
          "fixed inset-y-0 left-0 z-20 flex h-full flex-col border-r bg-card",
          open ? "w-64" : "w-16"
        )}
        initial={false}
        animate={{ width: open ? 256 : 64 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <div className={cn("flex h-16 items-center justify-between px-4", !open && "justify-center")}>
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            {open && <span className="text-lg font-semibold">NeuraOps</span>}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(!open)}
            className={cn(!open && "hidden")}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>

        <ScrollArea className="flex-1 py-2">
          <nav className="grid gap-1 px-2">
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <SidebarItem
                      icon={Home}
                      label="Overview"
                      active={true}
                      open={open}
                    />
                  </div>
                </TooltipTrigger>
                {!open && <TooltipContent side="right">Overview</TooltipContent>}
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <SidebarItem
                      icon={LayoutDashboard}
                      label="Production & Manufacturing"
                      open={open}
                    >
                      <div className="py-1 px-3 rounded-md hover:bg-muted cursor-pointer">
                        <span className="text-sm">Real-time Monitoring</span>
                      </div>
                      <div className="py-1 px-3 rounded-md hover:bg-muted cursor-pointer">
                        <span className="text-sm">OEE Analytics</span>
                      </div>
                      <div className="py-1 px-3 rounded-md hover:bg-muted cursor-pointer">
                        <span className="text-sm">Quality Control</span>
                      </div>
                    </SidebarItem>
                  </div>
                </TooltipTrigger>
                {!open && <TooltipContent side="right">Production & Manufacturing</TooltipContent>}
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <SidebarItem
                      icon={BoxIcon}
                      label="Inventory & Materials"
                      open={open}
                    >
                      <div className="py-1 px-3 rounded-md hover:bg-muted cursor-pointer">
                        <span className="text-sm">Stock Levels</span>
                      </div>
                      <div className="py-1 px-3 rounded-md hover:bg-muted cursor-pointer">
                        <span className="text-sm">Material Usage</span>
                      </div>
                      <div className="py-1 px-3 rounded-md hover:bg-muted cursor-pointer">
                        <span className="text-sm">Reorder Alerts</span>
                      </div>
                    </SidebarItem>
                  </div>
                </TooltipTrigger>
                {!open && <TooltipContent side="right">Inventory & Materials</TooltipContent>}
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <SidebarItem
                      icon={CircleDollarSign}
                      label="Financial Insights"
                      open={open}
                    >
                      <div className="py-1 px-3 rounded-md hover:bg-muted cursor-pointer">
                        <span className="text-sm">Cost Analysis</span>
                      </div>
                      <div className="py-1 px-3 rounded-md hover:bg-muted cursor-pointer">
                        <span className="text-sm">Profit & Loss</span>
                      </div>
                      <div className="py-1 px-3 rounded-md hover:bg-muted cursor-pointer">
                        <span className="text-sm">Cash Flow</span>
                      </div>
                    </SidebarItem>
                  </div>
                </TooltipTrigger>
                {!open && <TooltipContent side="right">Financial Insights</TooltipContent>}
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <SidebarItem
                      icon={ShoppingCart}
                      label="Sales & Orders"
                      open={open}
                    >
                      <div className="py-1 px-3 rounded-md hover:bg-muted cursor-pointer">
                        <span className="text-sm">Order Tracking</span>
                      </div>
                      <div className="py-1 px-3 rounded-md hover:bg-muted cursor-pointer">
                        <span className="text-sm">Sales Forecasting</span>
                      </div>
                      <div className="py-1 px-3 rounded-md hover:bg-muted cursor-pointer">
                        <span className="text-sm">Customer Management</span>
                      </div>
                    </SidebarItem>
                  </div>
                </TooltipTrigger>
                {!open && <TooltipContent side="right">Sales & Orders</TooltipContent>}
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <SidebarItem
                      icon={Zap}
                      label="AI Optimization"
                      open={open}
                    >
                      <div className="py-1 px-3 rounded-md hover:bg-muted cursor-pointer">
                        <span className="text-sm">AI Insights</span>
                      </div>
                      <div className="py-1 px-3 rounded-md hover:bg-muted cursor-pointer">
                        <span className="text-sm">Predictive Analytics</span>
                      </div>
                      <div className="py-1 px-3 rounded-md hover:bg-muted cursor-pointer">
                        <span className="text-sm">SOP Compliance</span>
                      </div>
                    </SidebarItem>
                  </div>
                </TooltipTrigger>
                {!open && <TooltipContent side="right">AI Optimization</TooltipContent>}
              </Tooltip>
            </TooltipProvider>

            <div className="mt-6 px-3">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {open ? "Management" : ""}
              </div>
            </div>

            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <SidebarItem
                      icon={Users}
                      label="Team"
                      open={open}
                    />
                  </div>
                </TooltipTrigger>
                {!open && <TooltipContent side="right">Team</TooltipContent>}
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <SidebarItem
                      icon={ClipboardList}
                      label="Reports"
                      open={open}
                    />
                  </div>
                </TooltipTrigger>
                {!open && <TooltipContent side="right">Reports</TooltipContent>}
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <SidebarItem
                      icon={Settings}
                      label="Settings"
                      open={open}
                    />
                  </div>
                </TooltipTrigger>
                {!open && <TooltipContent side="right">Settings</TooltipContent>}
              </Tooltip>
            </TooltipProvider>
          </nav>
        </ScrollArea>
      </motion.div>
      {open && (
        <div
          className="fixed inset-0 z-10 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => onOpenChange(false)}
        />
      )}
    </>
  );
}