import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-24 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Zap" size={16} />
                <span>Trusted Bridge in Virtual Telecommunications</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Connecting Indonesia to the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Global Digital World
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                VirtSIM Hub adalah platform marketplace virtual SIM terdepan yang menghubungkan konsumen dan bisnis Indonesia dengan penyedia layanan virtual SIM global melalui teknologi otomatis dan harga transparan.
              </p>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                alt="VirtSIM Hub Team Working"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-elevated">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Shield" size={20} color="white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Trusted Platform</div>
                  <div className="text-sm text-muted-foreground">ISO 27001 Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;