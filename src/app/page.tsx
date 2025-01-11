"use client";

import { IconRocket, IconShield, IconServer, IconGauge, IconClock, IconChevronRight, IconBrandTwitter, IconBrandGithub, IconBrandTelegram, IconBrandDiscord } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [showJumpTop, setShowJumpTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      setShowJumpTop(scrolledToBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToNetworks = () => {
    const networksSection = document.getElementById('networks');
    if (networksSection) {
      networksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative">
      {/* Hero Section */}
      <section 
        id="hero" 
        className="min-h-screen flex flex-col items-center justify-center relative"
        aria-label="Introduction"
      >
        <div className="animate-fade-in text-center">
          <div className="flex flex-col items-center justify-center mb-20">
            <div className="relative mb-8">
              <h1 className="flex items-baseline" aria-label="MegaNode" data-priority="high">
                <span className="mega-text hover-glow">mega</span>
                <span className="node-text hover-glow">node</span>
              </h1>
              <div className="absolute -right-12 top-4 w-24 h-24 animate-spin-slow">
                <div className="absolute inset-0 rounded-full border-2 border-sky-500/20" />
                <div className="absolute inset-0 rounded-full border-t-2 border-sky-500" />
              </div>
            </div>
            <div className="space-y-6">
              <p className="hero-subtitle max-w-4xl">
                Empowering the Future of Blockchain
              </p>
              <p className="text-xl text-sky-900/70 dark:text-sky-100/70 max-w-2xl mx-auto">
                Secure, reliable, and high-performance validation services for next-generation blockchain networks
              </p>
            </div>
          </div>

          <div className="flex gap-8 justify-center mb-20">
            <a 
              href="#services" 
              className="cta-button hover-lift focus-outline"
              aria-label="Learn about our services"
            >
              Explore Services
            </a>
            <button 
              onClick={scrollToNetworks} 
              className="cta-button hover-lift focus-outline"
              aria-label="View our supported networks"
            >
              View Networks
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <StatCard 
              icon={<IconRocket aria-hidden="true" />}
              value="50+"
              label="Active Nodes"
            />
            <StatCard 
              icon={<IconGauge aria-hidden="true" />}
              value="99.9%"
              label="Uptime"
            />
            <StatCard 
              icon={<IconServer aria-hidden="true" />}
              value="10+"
              label="Networks"
            />
            <StatCard 
              icon={<IconClock aria-hidden="true" />}
              value="5+ Years"
              label="Experience"
            />
          </div>
        </div>
      </section>

      {/* Experience & Services Section */}
      <section 
        className="py-20" 
        id="services"
        aria-label="Services and Experience"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-sky-600 dark:text-sky-400 text-center mb-12">Experience</h2>
          
          {/* Experience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="glass-card p-8 flex flex-col items-center text-center hover-lift">
              <IconShield className="service-icon mb-4" stroke={1.5} aria-hidden="true" />
              <h3 className="text-xl font-semibold text-sky-950 dark:text-sky-100 mb-3">Security</h3>
              <p className="text-sky-950/80 dark:text-sky-100/80 text-sm">Advanced security protocols and continuous monitoring for blockchain networks.</p>
            </div>

            <div className="glass-card p-8 flex flex-col items-center text-center hover-lift">
              <IconServer className="service-icon mb-4" stroke={1.5} aria-hidden="true" />
              <h3 className="text-xl font-semibold text-sky-950 dark:text-sky-100 mb-3">Infrastructure</h3>
              <p className="text-sky-950/80 dark:text-sky-100/80 text-sm">Enterprise-grade hardware setup with optimized configurations.</p>
            </div>

            <div className="glass-card p-8 flex flex-col items-center text-center hover-lift">
              <IconGauge className="service-icon mb-4" stroke={1.5} aria-hidden="true" />
              <h3 className="text-xl font-semibold text-sky-950 dark:text-sky-100 mb-3">Performance</h3>
              <p className="text-sky-950/80 dark:text-sky-100/80 text-sm">Maintaining high uptime with continuous performance optimization.</p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Validator Services */}
            <div className="glass-card p-10 hover-lift">
              <h3 className="text-2xl font-semibold text-sky-950 dark:text-sky-100 mb-8">Node Operation</h3>
              <ul className="space-y-6" role="list">
                <ServiceItem
                  title="Node Setup"
                  description="Professional installation and optimization"
                />
                <ServiceItem
                  title="Network Monitoring"
                  description="24/7 monitoring and alert systems"
                />
                <ServiceItem
                  title="Security"
                  description="Advanced security measures and audits"
                />
                <ServiceItem
                  title="Performance"
                  description="Continuous optimization for efficiency"
                />
              </ul>
            </div>

            {/* Technical Support */}
            <div className="glass-card p-10 hover-lift">
              <h3 className="text-2xl font-semibold text-sky-950 dark:text-sky-100 mb-8">Support</h3>
              <ul className="space-y-6" role="list">
                <ServiceItem
                  title="Hardware Setup"
                  description="Enterprise-grade infrastructure setup"
                />
                <ServiceItem
                  title="Network Analysis"
                  description="Performance analysis and optimization"
                />
                <ServiceItem
                  title="Priority Support"
                  description="Dedicated technical assistance"
                />
                <ServiceItem
                  title="Reporting"
                  description="Regular status and performance reports"
                />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Networks Section */}
      <section 
        id="networks" 
        className="py-32 relative"
        aria-label="Supported Networks"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-sky-600 dark:text-sky-400 text-center mb-12">Networks</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Airchains', image: '/networks/optimized/airchains.webp', desc: 'Decentralized cloud infrastructure' },
              { name: 'Allora', image: '/networks/optimized/allora.webp', desc: 'Decentralized AI network' },
              { name: 'Dymension', image: '/networks/optimized/dymension.webp', desc: 'Modular blockchain platform' },
              { name: 'Empeiria', image: '/networks/optimized/empeiria.webp', desc: 'Gaming blockchain network' },
              { name: 'Initia', image: '/networks/optimized/initia.webp', desc: 'Decentralized gaming platform' },
              { name: 'Lava', image: '/networks/optimized/lava.webp', desc: 'Decentralized RPC network' },
              { name: 'OG Network', image: '/networks/optimized/og.webp', desc: 'Layer 1 blockchain platform' },
              { name: 'Pell', image: '/networks/optimized/pell.webp', desc: 'Decentralized finance network' },
              { name: 'Story', image: '/networks/optimized/story.webp', desc: 'Decentralized content platform' }
            ].map((network, index) => (
              <div 
                key={network.name} 
                className="glass-card p-6 flex flex-col items-center justify-center text-center animate-fade-in hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 flex items-center justify-center mb-2">
                  <Image 
                    src={network.image} 
                    alt={`${network.name} logo`}
                    width={64}
                    height={64}
                    className="network-logo object-contain"
                    loading={index > 5 ? "lazy" : "eager"}
                    quality={85}
                    priority={index <= 5}
                  />
                </div>
                <div className="flex items-center justify-center mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1" aria-hidden="true" />
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Active</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-sky-950 dark:text-sky-100">{network.name}</h3>
                <p className="text-sky-950/80 dark:text-sky-100/80 text-sm">{network.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" role="contentinfo">
        <div className="footer-content">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 mb-5">
              <span className="mega-text text-2xl hover-glow">mega</span>
              <span className="node-text text-2xl hover-glow">node</span>
            </div>
            <div className="flex gap-6 mb-4">
              <SocialLink href="https://twitter.com/meganode" icon={<IconBrandTwitter />} label="Twitter" />
              <SocialLink href="https://github.com/meganode" icon={<IconBrandGithub />} label="GitHub" />
              <SocialLink href="https://t.me/meganode" icon={<IconBrandTelegram />} label="Telegram" />
              <SocialLink href="https://discord.gg/meganode" icon={<IconBrandDiscord />} label="Discord" />
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-sky-200/10 pt-4 flex flex-col md:flex-row justify-between items-center gap-2 w-full">
            <div className="text-sky-900/50 dark:text-sky-100/50 text-xs">
              © 2024 MegaNode
            </div>
            <a 
              href="mailto:contact@meganode.org" 
              className="text-sky-900/50 dark:text-sky-100/50 hover:text-sky-600 dark:hover:text-sky-400 transition-colors text-xs focus-outline"
            >
              contact@meganode.org
            </a>
          </div>
        </div>
      </footer>

      {showJumpTop && (
        <button 
          onClick={scrollToTop} 
          className="jump-to-top focus-outline"
          aria-label="Scroll to top"
        >
          <IconChevronRight aria-hidden="true" />
        </button>
      )}
    </main>
  );
}

function StatCard({ icon, value, label }: { icon: React.ReactNode, value: string, label: string }) {
  return (
    <div className="stat-card hover-lift" role="article">
      <div className="flex flex-col items-center">
        <div className="stat-icon" aria-hidden="true">{icon}</div>
        <div className="stat-value mt-4">{value}</div>
        <div className="stat-label">{label}</div>
      </div>
    </div>
  );
}

function ServiceItem({ title, description }: { title: string, description: string }) {
  return (
    <li className="flex items-start gap-4">
      <div className="service-bullet" aria-hidden="true" />
      <div>
        <h4 className="text-lg font-semibold text-sky-950 dark:text-sky-100 mb-1">{title}</h4>
        <p className="text-sky-950/80 dark:text-sky-100/80">{description}</p>
      </div>
    </li>
  );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a 
      href={href}
      className="social-icon hover-lift focus-outline"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}
