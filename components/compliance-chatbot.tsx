"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export default function ComplianceChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hello! I'm the ComplianceGuard AI assistant. I can help you understand our contractor license and insurance monitoring services. How can I assist you today?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const getResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    if (message.includes("services") || message.includes("what") || message.includes("features")) {
      return "ComplianceGuard offers comprehensive contractor license and insurance monitoring services:\n\n• Automatic license status monitoring\n• Insurance status updates\n• Email and SMS alerts\n• Detailed reports\n• QuickBooks integration\n• Centralized dashboard"
    }

    if (message.includes("monitoring") || message.includes("how") || message.includes("work")) {
      return "Our intelligent monitoring system works as follows:\n\n1. Automatic connection to government license databases\n2. Periodic checks of license and insurance status\n3. Alerts sent before expiration dates\n4. Automatic status updates\n5. Detailed monthly reports"
    }

    if (
      message.includes("pricing") ||
      message.includes("cost") ||
      message.includes("price") ||
      message.includes("plans")
    ) {
      return "Flexible pricing plans:\n\n📋 Basic Plan: $29/month\n• Up to 50 contractors\n• License monitoring\n• Basic alerts\n\n🚀 Professional Plan: $59/month\n• Up to 200 contractors\n• Comprehensive monitoring\n• QuickBooks integration\n• Detailed reports\n\n💼 Enterprise Plan: $99/month\n• Unlimited contractors\n• All features included\n• Priority support"
    }

    if (
      message.includes("start") ||
      message.includes("sign up") ||
      message.includes("begin") ||
      message.includes("get started")
    ) {
      return "Getting started is quick and easy:\n\n1. Create a free account\n2. Add contractor information\n3. Connect licenses and insurance\n4. Activate automatic monitoring\n\n14-day free trial with no credit card required!"
    }

    if (message.includes("integration") || message.includes("quickbooks")) {
      return "QuickBooks integration provides:\n\n• Automatic contractor data synchronization\n• Compliance status updates in invoices\n• Comprehensive financial reports\n• Compliance cost tracking\n• Notifications within accounting system"
    }

    if (message.includes("alerts") || message.includes("notifications") || message.includes("reminders")) {
      return "Smart alert system:\n\n📧 Email notifications\n📱 Instant SMS messages\n⏰ Advance alerts (30, 15, 7 days)\n🔔 In-app notifications\n📊 Weekly reports\n\nYou can customize alerts based on your needs!"
    }

    return "Thank you for your question! ComplianceGuard is a comprehensive contractor compliance monitoring system. I can help you learn more about:\n\n• Our services and features\n• How the system works\n• Pricing plans\n• Getting started\n• Integration with other systems\n\nWhat would you like to know specifically?"
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: getResponse(input),
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const quickQuestions = [
    "What are ComplianceGuard's services?",
    "How does license monitoring work?",
    "What are the pricing plans?",
    "How can I get started?",
  ]

  const handleQuickQuestion = (question: string) => {
    setInput(question)
    handleSubmit({ preventDefault: () => {} } as React.FormEvent)
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 group relative"
        >
          <MessageCircle className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground transition-transform duration-300 group-hover:scale-110" />
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>
        </Button>
        {/* Enhanced tooltip */}
        <div className="absolute -top-14 right-0 bg-card border border-border rounded-lg px-3 py-2 shadow-xl animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-sm text-foreground whitespace-nowrap font-medium">Ask me anything!</p>
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      <Card
        className={`w-[calc(100vw-2rem)] max-w-sm md:w-96 shadow-2xl border-border transition-all duration-500 transform ${
          isMinimized ? "h-16" : "h-[85vh] max-h-[500px] md:h-[500px]"
        } ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
      >
        <CardHeader className="pb-3 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-t-lg border-b border-primary/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 bg-primary-foreground/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Bot className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <CardTitle className="text-sm font-semibold">ComplianceGuard Assistant</CardTitle>
                <div className="flex items-center space-x-1">
                  <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse shadow-sm"></div>
                  <span className="text-xs opacity-90 font-medium">Online now</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="h-8 w-8 p-0 hover:bg-primary-foreground/20 text-primary-foreground transition-all duration-200 hover:scale-110"
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0 hover:bg-primary-foreground/20 text-primary-foreground transition-all duration-200 hover:scale-110"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <>
            <CardContent className="flex-1 overflow-hidden p-0 bg-gradient-to-b from-background to-muted/20">
              <div className="h-full overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start space-x-3 animate-fade-in ${
                      message.role === "user" ? "flex-row-reverse space-x-reverse" : ""
                    }`}
                  >
                    <div
                      className={`h-7 w-7 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm transition-all duration-200 hover:scale-110 ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted border border-border text-muted-foreground"
                      }`}
                    >
                      {message.role === "user" ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}
                    </div>
                    <div
                      className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm transition-all duration-200 hover:shadow-md ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground ml-auto rounded-br-md"
                          : "bg-card border border-border text-foreground rounded-bl-md"
                      }`}
                    >
                      <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
                      <span className="text-xs opacity-70 mt-1 block">
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </span>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex items-start space-x-3 animate-fade-in">
                    <div className="h-7 w-7 bg-muted border border-border rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="h-3 w-3 text-muted-foreground" />
                    </div>
                    <div className="bg-card border border-border p-3 rounded-2xl rounded-bl-md shadow-sm">
                      <div className="flex space-x-1">
                        <div className="h-2 w-2 bg-primary rounded-full animate-bounce"></div>
                        <div
                          className="h-2 w-2 bg-primary rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="h-2 w-2 bg-primary rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {messages.length <= 1 && (
                <div className="px-4 pb-2 border-t border-border/50 bg-muted/30">
                  <p className="text-xs text-muted-foreground mb-3 font-medium">Quick questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickQuestions.map((question, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 text-xs py-1.5 px-3 rounded-full hover:scale-105 hover:shadow-sm"
                        onClick={() => handleQuickQuestion(question)}
                      >
                        {question}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>

            <div className="p-4 border-t border-border bg-card/50 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Type your question here..."
                  className="flex-1 px-4 py-2.5 text-sm border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder:text-muted-foreground transition-all duration-200 hover:border-primary/50"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  size="sm"
                  disabled={isLoading || !input.trim()}
                  className="px-4 py-2.5 bg-primary hover:bg-primary/90 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-2 text-center">Powered by ComplianceGuard AI</p>
            </div>
          </>
        )}
      </Card>
    </div>
  )
}
