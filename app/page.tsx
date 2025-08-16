import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, Clock, AlertTriangle, FileText, Smartphone, DollarSign, Users } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6 md:h-8 md:w-8 text-primary" />
            <span className="text-lg md:text-2xl font-bold text-foreground">ComplianceGuard</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
              Benefits
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              Testimonials
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
          </nav>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-sm md:text-base px-3 py-2 md:px-4 md:py-2">
            Get Started Free
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 md:mb-6 bg-primary/10 text-primary border-primary/20 text-xs md:text-sm">
            Trusted by 2,500+ Home Service Businesses
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
            Never Lose Another Contract to
            <span className="text-primary"> Expired Licenses</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto">
            Intelligent monitoring of contractor licenses and insurance through a centralized dashboard. Automatically
            track compliance, get instant alerts, and avoid costly fines with our affordable monthly subscription.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
            >
              Start 14-Day Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg bg-transparent"
            >
              Watch Demo
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Setup in 5 Minutes</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Cancel Anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need for Compliance Management
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools to monitor, track, and manage contractor compliance automatically
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Intelligent License Monitoring</CardTitle>
                <CardDescription>
                  Automatically track license status across all contractors with real-time updates and expiration alerts
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Document Management</CardTitle>
                <CardDescription>
                  Secure upload and storage of insurance certificates, licenses, and compliance documents
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Smart Alerts & Notifications</CardTitle>
                <CardDescription>
                  Get instant email and SMS alerts 30, 60, and 90 days before any license or insurance expires
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Automated Renewals</CardTitle>
                <CardDescription>
                  On-demand renewal service that handles the paperwork and processes for you
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>QuickBooks Integration</CardTitle>
                <CardDescription>
                  Seamlessly sync compliance reports and contractor data with your existing accounting system
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Mobile Dashboard</CardTitle>
                <CardDescription>
                  Access your compliance dashboard anywhere with our mobile-optimized interface
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
                Protect Your Business from Costly Compliance Failures
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                Don't let expired licenses cost you contracts or expose you to fines. ComplianceGuard ensures you're
                always ahead of compliance requirements.
              </p>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <DollarSign className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Avoid Lost Revenue</h3>
                    <p className="text-muted-foreground">
                      Prevent contract cancellations and project delays due to compliance issues
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Reduce Legal Risk</h3>
                    <p className="text-muted-foreground">
                      Stay compliant with local regulations and avoid costly fines and penalties
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Save Time & Effort</h3>
                    <p className="text-muted-foreground">
                      Automate compliance tracking and eliminate manual spreadsheet management
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Scale Your Business</h3>
                    <p className="text-muted-foreground">
                      Confidently work with more contractors without increasing compliance overhead
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-card to-muted/50 rounded-xl p-4 md:p-8 shadow-2xl border border-border">
                <div className="grid grid-cols-1 gap-4 md:gap-6">
                  {/* Live Status Cards */}
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center justify-between p-3 md:p-4 bg-background rounded-lg border border-border">
                      <div className="flex items-center space-x-2 md:space-x-3 min-w-0 flex-1">
                        <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-foreground text-sm md:text-base truncate">ABC Roofing LLC</p>
                          <p className="text-xs md:text-sm text-muted-foreground">License expires in 45 days</p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800 border-green-200 text-xs flex-shrink-0 ml-2">
                        Active
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 md:p-4 bg-background rounded-lg border border-border">
                      <div className="flex items-center space-x-2 md:space-x-3 min-w-0 flex-1">
                        <div className="h-3 w-3 bg-yellow-500 rounded-full animate-pulse flex-shrink-0"></div>
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-foreground text-sm md:text-base truncate">
                            Elite HVAC Services
                          </p>
                          <p className="text-xs md:text-sm text-muted-foreground">Insurance expires in 15 days</p>
                        </div>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 text-xs flex-shrink-0 ml-2">
                        Warning
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 md:p-4 bg-background rounded-lg border border-border">
                      <div className="flex items-center space-x-2 md:space-x-3 min-w-0 flex-1">
                        <div className="h-3 w-3 bg-red-500 rounded-full animate-pulse flex-shrink-0"></div>
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-foreground text-sm md:text-base truncate">
                            Premier Plumbing
                          </p>
                          <p className="text-xs md:text-sm text-muted-foreground">License expired 3 days ago</p>
                        </div>
                      </div>
                      <Badge className="bg-red-100 text-red-800 border-red-200 text-xs flex-shrink-0 ml-2">
                        Expired
                      </Badge>
                    </div>
                  </div>

                  {/* Quick Stats Dashboard */}
                  <div className="space-y-3 md:space-y-4">
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      <div className="p-3 md:p-4 bg-background rounded-lg border border-border text-center">
                        <div className="text-xl md:text-2xl font-bold text-primary">127</div>
                        <div className="text-xs md:text-sm text-muted-foreground">Active Contractors</div>
                      </div>
                      <div className="p-3 md:p-4 bg-background rounded-lg border border-border text-center">
                        <div className="text-xl md:text-2xl font-bold text-green-600">98%</div>
                        <div className="text-xs md:text-sm text-muted-foreground">Compliance Rate</div>
                      </div>
                    </div>

                    <div className="p-3 md:p-4 bg-background rounded-lg border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs md:text-sm font-medium text-foreground">Upcoming Renewals</span>
                        <span className="text-xs md:text-sm text-muted-foreground">Next 30 days</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs md:text-sm">
                          <span className="text-muted-foreground">Licenses</span>
                          <span className="font-medium text-foreground">8</span>
                        </div>
                        <div className="flex justify-between text-xs md:text-sm">
                          <span className="text-muted-foreground">Insurance</span>
                          <span className="font-medium text-foreground">12</span>
                        </div>
                        <div className="flex justify-between text-xs md:text-sm">
                          <span className="text-muted-foreground">Certifications</span>
                          <span className="font-medium text-foreground">5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2 md:gap-3 mt-4 md:mt-6 pt-4 md:pt-6 border-t border-border">
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-xs md:text-sm">
                    <AlertTriangle className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                    Send Alerts
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs md:text-sm bg-transparent">
                    <FileText className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                    Generate Report
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs md:text-sm bg-transparent">
                    <Clock className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                    Schedule Renewals
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Trusted by Home Service Leaders</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              See how ComplianceGuard has transformed compliance management for businesses like yours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-4 w-4 bg-accent rounded-full"></div>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "ComplianceGuard saved us from losing a $50K contract. The automated alerts caught an expired license
                  we completely missed."
                </p>
                <div>
                  <p className="font-semibold text-foreground">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Operations Manager, Premier Roofing</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-4 w-4 bg-accent rounded-full"></div>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "We've eliminated compliance headaches completely. The QuickBooks integration makes reporting
                  seamless."
                </p>
                <div>
                  <p className="font-semibold text-foreground">Mike Rodriguez</p>
                  <p className="text-sm text-muted-foreground">Owner, Rodriguez HVAC Services</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-4 w-4 bg-accent rounded-full"></div>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The time savings alone pays for itself. We can focus on growing our business instead of chasing
                  paperwork."
                </p>
                <div>
                  <p className="font-semibold text-foreground">Lisa Chen</p>
                  <p className="text-sm text-muted-foreground">Project Manager, Elite Construction</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Choose the plan that fits your business size and compliance needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-center">Starter</CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold text-foreground">$29</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <CardDescription className="text-center">Perfect for small contractors</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Up to 5 contractors</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>License monitoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Email alerts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Basic reporting</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-transparent" variant="outline">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary shadow-lg relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-center">Professional</CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold text-foreground">$79</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <CardDescription className="text-center">For growing businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Up to 25 contractors</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Full compliance monitoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>SMS + Email alerts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>QuickBooks integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Renewal assistance</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90">Start Free Trial</Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-center">Enterprise</CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold text-foreground">$199</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <CardDescription className="text-center">For large organizations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Unlimited contractors</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Dedicated support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Full renewal service</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-transparent" variant="outline">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to Eliminate Compliance Headaches?</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of home service businesses that trust ComplianceGuard to protect their operations and
            revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
            >
              Start Your Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-6 md:px-8 py-3 md:py-4 text-base md:text-lg bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
          <p className="text-xs md:text-sm mt-4 opacity-75">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 bg-card border-t border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                <span className="text-lg md:text-xl font-bold text-foreground">ComplianceGuard</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Protecting home service businesses through intelligent compliance monitoring.
              </p>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-6 md:mt-8 pt-6 md:pt-8 text-center text-xs md:text-sm text-muted-foreground">
            <p>&copy; 2025 ComplianceGuard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
