"use client"

import { useState, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  Play,
  Save,
  Download,
  Upload,
  Settings,
  Plus,
  Trash2,
  Copy,
  Zap,
  MessageSquare,
  BarChart3,
  FileText,
  GitBranch,
  Eye,
  EyeOff,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Node types for the workflow canvas
const nodeTypes = [
  { id: "input", name: "Input", icon: MessageSquare, color: "bg-blue-500", description: "Receive user input" },
  { id: "llm", name: "LLM", icon: Zap, color: "bg-purple-500", description: "Language model processing" },
  { id: "tool", name: "Tool", icon: Settings, color: "bg-green-500", description: "External tool call" },
  { id: "condition", name: "Condition", icon: GitBranch, color: "bg-yellow-500", description: "Conditional logic" },
  { id: "output", name: "Output", icon: FileText, color: "bg-red-500", description: "Return response" },
  { id: "chart", name: "Chart", icon: BarChart3, color: "bg-indigo-500", description: "Generate visualization" },
]

interface WorkflowNode {
  id: string
  type: string
  name: string
  x: number
  y: number
  config: Record<string, any>
  connections: string[]
}

interface WorkflowEdge {
  id: string
  from: string
  to: string
}

export default function CanvasPage() {
  const [nodes, setNodes] = useState<WorkflowNode[]>([
    {
      id: "start",
      type: "input",
      name: "User Input",
      x: 100,
      y: 200,
      config: { prompt: "Enter your question..." },
      connections: ["llm-1"],
    },
    {
      id: "llm-1",
      type: "llm",
      name: "Process Query",
      x: 350,
      y: 200,
      config: { model: "gpt-4", temperature: 0.7 },
      connections: ["output-1"],
    },
    {
      id: "output-1",
      type: "output",
      name: "Response",
      x: 600,
      y: 200,
      config: { format: "text" },
      connections: [],
    },
  ])

  const [selectedNode, setSelectedNode] = useState<WorkflowNode | null>(null)
  const [isRunning, setIsRunning] = useState(false)
  const [showGrid, setShowGrid] = useState(true)
  const canvasRef = useRef<HTMLDivElement>(null)

  const addNode = useCallback((type: string, x = 300, y = 300) => {
    const nodeType = nodeTypes.find((t) => t.id === type)
    if (!nodeType) return

    const newNode: WorkflowNode = {
      id: `${type}-${Date.now()}`,
      type,
      name: nodeType.name,
      x,
      y,
      config: {},
      connections: [],
    }

    setNodes((prev) => [...prev, newNode])
  }, [])

  const deleteNode = useCallback((nodeId: string) => {
    setNodes((prev) => prev.filter((node) => node.id !== nodeId))
    setSelectedNode(null)
  }, [])

  const updateNodeConfig = useCallback((nodeId: string, config: Record<string, any>) => {
    setNodes((prev) => prev.map((node) => (node.id === nodeId ? { ...node, config } : node)))
  }, [])

  const runWorkflow = useCallback(async () => {
    setIsRunning(true)
    // Simulate workflow execution
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsRunning(false)
  }, [])

  const getNodeIcon = (type: string) => {
    const nodeType = nodeTypes.find((t) => t.id === type)
    return nodeType?.icon || MessageSquare
  }

  const getNodeColor = (type: string) => {
    const nodeType = nodeTypes.find((t) => t.id === type)
    return nodeType?.color || "bg-gray-500"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3">
                <Image src="/hugger-logo.png" alt="HuggingGraph" width={40} height={40} className="rounded-lg" />
                <div>
                  <h1 className="text-xl font-bold text-slate-900">HuggingGraph</h1>
                  <p className="text-xs text-slate-600">Workflow Canvas</p>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" onClick={() => setShowGrid(!showGrid)}>
                {showGrid ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                Grid
              </Button>
              <Button variant="outline" size="sm">
                <Upload className="h-4 w-4 mr-2" />
                Import
              </Button>
              <Button variant="outline" size="sm">
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button size="sm" onClick={runWorkflow} disabled={isRunning}>
                <Play className="h-4 w-4 mr-2" />
                {isRunning ? "Running..." : "Test Run"}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Node Palette */}
        <div className="w-80 bg-white border-r p-4 overflow-y-auto">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Node Types</h3>
              <div className="grid grid-cols-2 gap-2">
                {nodeTypes.map((nodeType) => {
                  const Icon = nodeType.icon
                  return (
                    <Card
                      key={nodeType.id}
                      className="cursor-pointer hover:shadow-md transition-shadow border-2 hover:border-blue-200"
                      onClick={() => addNode(nodeType.id)}
                    >
                      <CardContent className="p-3">
                        <div className="flex flex-col items-center gap-2 text-center">
                          <div className={`w-8 h-8 rounded-lg ${nodeType.color} flex items-center justify-center`}>
                            <Icon className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">{nodeType.name}</div>
                            <div className="text-xs text-slate-600">{nodeType.description}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Node Configuration */}
            {selectedNode && (
              <div>
                <h3 className="font-semibold text-slate-900 mb-3">Node Configuration</h3>
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{selectedNode.name}</CardTitle>
                      <Button variant="ghost" size="sm" onClick={() => deleteNode(selectedNode.id)}>
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {selectedNode.type}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="node-name">Name</Label>
                      <Input
                        id="node-name"
                        value={selectedNode.name}
                        onChange={(e) =>
                          setNodes((prev) =>
                            prev.map((node) =>
                              node.id === selectedNode.id ? { ...node, name: e.target.value } : node,
                            ),
                          )
                        }
                      />
                    </div>

                    {selectedNode.type === "llm" && (
                      <>
                        <div>
                          <Label htmlFor="model">Model</Label>
                          <Select
                            value={selectedNode.config.model || "gpt-4"}
                            onValueChange={(value) =>
                              updateNodeConfig(selectedNode.id, { ...selectedNode.config, model: value })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="gpt-4">GPT-4</SelectItem>
                              <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                              <SelectItem value="claude-3">Claude 3</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="temperature">Temperature</Label>
                          <Input
                            id="temperature"
                            type="number"
                            min="0"
                            max="2"
                            step="0.1"
                            value={selectedNode.config.temperature || 0.7}
                            onChange={(e) =>
                              updateNodeConfig(selectedNode.id, {
                                ...selectedNode.config,
                                temperature: Number.parseFloat(e.target.value),
                              })
                            }
                          />
                        </div>
                      </>
                    )}

                    {selectedNode.type === "input" && (
                      <div>
                        <Label htmlFor="prompt">Prompt</Label>
                        <Textarea
                          id="prompt"
                          value={selectedNode.config.prompt || ""}
                          onChange={(e) =>
                            updateNodeConfig(selectedNode.id, { ...selectedNode.config, prompt: e.target.value })
                          }
                          placeholder="Enter prompt template..."
                        />
                      </div>
                    )}

                    {selectedNode.type === "tool" && (
                      <>
                        <div>
                          <Label htmlFor="tool-name">Tool Name</Label>
                          <Input
                            id="tool-name"
                            value={selectedNode.config.toolName || ""}
                            onChange={(e) =>
                              updateNodeConfig(selectedNode.id, { ...selectedNode.config, toolName: e.target.value })
                            }
                            placeholder="e.g., web_search, calculator"
                          />
                        </div>
                        <div>
                          <Label htmlFor="tool-params">Parameters</Label>
                          <Textarea
                            id="tool-params"
                            value={selectedNode.config.params || ""}
                            onChange={(e) =>
                              updateNodeConfig(selectedNode.id, { ...selectedNode.config, params: e.target.value })
                            }
                            placeholder="JSON parameters..."
                          />
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 relative overflow-hidden">
          <div
            ref={canvasRef}
            className={`w-full h-full relative ${
              showGrid
                ? "bg-[radial-gradient(circle,_#e2e8f0_1px,_transparent_1px)] bg-[length:20px_20px]"
                : "bg-slate-50"
            }`}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedNode(null)
              }
            }}
          >
            {/* Render connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              {nodes.map((node) =>
                node.connections.map((targetId) => {
                  const targetNode = nodes.find((n) => n.id === targetId)
                  if (!targetNode) return null

                  const startX = node.x + 120
                  const startY = node.y + 40
                  const endX = targetNode.x
                  const endY = targetNode.y + 40

                  const midX = (startX + endX) / 2

                  return (
                    <path
                      key={`${node.id}-${targetId}`}
                      d={`M ${startX} ${startY} C ${midX} ${startY} ${midX} ${endY} ${endX} ${endY}`}
                      stroke="#3b82f6"
                      strokeWidth="2"
                      fill="none"
                      markerEnd="url(#arrowhead)"
                    />
                  )
                }),
              )}
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                </marker>
              </defs>
            </svg>

            {/* Render nodes */}
            {nodes.map((node) => {
              const Icon = getNodeIcon(node.type)
              const isSelected = selectedNode?.id === node.id

              return (
                <div
                  key={node.id}
                  className={`absolute cursor-pointer transition-all ${
                    isSelected ? "ring-2 ring-blue-500 ring-offset-2" : ""
                  }`}
                  style={{
                    left: node.x,
                    top: node.y,
                    zIndex: 2,
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedNode(node)
                  }}
                >
                  <Card className="w-32 hover:shadow-lg transition-shadow bg-white">
                    <CardContent className="p-3">
                      <div className="flex flex-col items-center gap-2 text-center">
                        <div
                          className={`w-8 h-8 rounded-lg ${getNodeColor(node.type)} flex items-center justify-center`}
                        >
                          <Icon className="h-4 w-4 text-white" />
                        </div>
                        <div className="text-sm font-medium truncate w-full">{node.name}</div>
                        <Badge variant="outline" className="text-xs">
                          {node.type}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}

            {/* Canvas Instructions */}
            {nodes.length === 3 && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg border shadow-lg max-w-md">
                  <h3 className="font-semibold text-slate-900 mb-2">Welcome to the Workflow Canvas</h3>
                  <p className="text-sm text-slate-600 mb-4">
                    Click on nodes from the left panel to add them to your workflow. Connect nodes by configuring their
                    connections in the node settings.
                  </p>
                  <Button size="sm" onClick={() => addNode("tool", 400, 300)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Your First Tool
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Output Panel */}
        <div className="w-80 bg-white border-l">
          <Tabs defaultValue="output" className="h-full flex flex-col">
            <div className="p-4 border-b">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="output">Output</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="output" className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Test Results</h4>
                  {isRunning ? (
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                      Running workflow...
                    </div>
                  ) : (
                    <div className="bg-slate-50 p-3 rounded-lg text-sm">
                      <div className="text-slate-600 mb-2">Click "Test Run" to execute your workflow</div>
                      <div className="text-xs text-slate-500">Results will appear here when you run the workflow</div>
                    </div>
                  )}
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Workflow Stats</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Nodes:</span>
                      <span className="font-medium">{nodes.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Connections:</span>
                      <span className="font-medium">
                        {nodes.reduce((acc, node) => acc + node.connections.length, 0)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Complexity:</span>
                      <Badge variant="outline" className="text-xs">
                        {nodes.length < 5 ? "Simple" : nodes.length < 10 ? "Medium" : "Complex"}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="code" className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Generated Code</h4>
                  <div className="bg-slate-900 text-slate-100 p-3 rounded-lg text-xs font-mono overflow-x-auto">
                    <pre>{`from langgraph import StateGraph
from typing import TypedDict

class WorkflowState(TypedDict):
    input: str
    output: str

def process_input(state):
    # Input processing logic
    return {"input": state["input"]}

def llm_process(state):
    # LLM processing logic
    return {"output": "Processed: " + state["input"]}

# Build workflow
workflow = StateGraph(WorkflowState)
workflow.add_node("input", process_input)
workflow.add_node("llm", llm_process)
workflow.add_edge("input", "llm")
workflow.set_entry_point("input")

app = workflow.compile()`}</pre>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Copy className="h-3 w-3 mr-2" />
                    Copy
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Download className="h-3 w-3 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
