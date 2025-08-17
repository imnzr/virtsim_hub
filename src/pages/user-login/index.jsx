import React from 'react';
import Header from '../../components/ui/Header';
import LoginForm from './components/LoginForm';
import TrustBadges from './components/TrustBadges';
import RecentActivity from './components/RecentActivity';

const UserLogin = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Masuk ke VirtSIM Hub
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Akses dashboard Anda untuk mengelola layanan SIM virtual 
                dan memonitor penggunaan secara real-time.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              {/* Login Form */}
              <div className="order-2 lg:order-1">
                <LoginForm />
              </div>
              
              {/* Trust & Security Info */}
              <div className="order-1 lg:order-2 space-y-6">
                <TrustBadges />
                <RecentActivity />
                
                {/* Quick Access Features */}
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Akses Cepat Setelah Login
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-2xl">📱</span>
                      </div>
                      <p className="font-medium text-sm">SIM Virtual</p>
                      <p className="text-xs text-muted-foreground">Kelola & Aktifkan</p>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-2xl">💳</span>
                      </div>
                      <p className="font-medium text-sm">Billing</p>
                      <p className="text-xs text-muted-foreground">Riwayat & Tagihan</p>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-2xl">📊</span>
                      </div>
                      <p className="font-medium text-sm">Analytics</p>
                      <p className="text-xs text-muted-foreground">Usage & Reports</p>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-2xl">🔧</span>
                      </div>
                      <p className="font-medium text-sm">API</p>
                      <p className="text-xs text-muted-foreground">Integration</p>
                    </div>
                  </div>
                </div>

                {/* Help & Support */}
                <div className="bg-gradient-to-r from-secondary/5 to-accent/5 rounded-lg p-6 border border-secondary/20">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Butuh Bantuan?
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Tim support kami siap membantu 24/7 melalui berbagai channel
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-3 py-1 bg-card border border-border rounded-md text-sm hover:bg-muted transition-colors">
                      Live Chat
                    </button>
                    <button className="px-3 py-1 bg-card border border-border rounded-md text-sm hover:bg-muted transition-colors">
                      WhatsApp
                    </button>
                    <button className="px-3 py-1 bg-card border border-border rounded-md text-sm hover:bg-muted transition-colors">
                      Email Support
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserLogin;