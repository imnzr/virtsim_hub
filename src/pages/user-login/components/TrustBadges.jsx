import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustBadges = () => {
  const securityFeatures = [
    {
      icon: 'ShieldCheck',
      title: 'Multi-Factor Authentication',
      description: 'Perlindungan berlapis dengan SMS OTP dan authenticator app',
      status: 'active'
    },
    {
      icon: 'Eye',
      title: 'Login Activity Monitoring',
      description: 'Pantau aktivitas masuk dari perangkat dan lokasi berbeda',
      status: 'active'
    },
    {
      icon: 'Lock',
      title: 'Account Lockout Protection',
      description: 'Proteksi otomatis dari percobaan login yang mencurigakan',
      status: 'active'
    },
    {
      icon: 'Bell',
      title: 'Security Alerts',
      description: 'Notifikasi real-time untuk aktivitas keamanan penting',
      status: 'active'
    }
  ];

  const certifications = [
    { name: 'SSL/TLS', icon: 'Globe' },
    { name: 'ISO 27001', icon: 'Award' },
    { name: 'SOC 2', icon: 'Shield' }
  ];

  return (
    <div className="space-y-6">
      {/* Main Security Card */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6 border border-primary/20">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="ShieldCheck" size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Login Aman & Terpercaya</h3>
            <p className="text-sm text-muted-foreground">Keamanan tingkat enterprise untuk semua pengguna</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {securityFeatures?.slice(0, 2)?.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-card/70 rounded-lg">
              <Icon name={feature?.icon} size={18} className="text-success" />
              <div className="flex-1">
                <p className="font-medium text-foreground text-sm">{feature?.title}</p>
                <p className="text-xs text-muted-foreground">{feature?.description}</p>
              </div>
              <div className="w-2 h-2 bg-success rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Security Features */}
      <div className="bg-card rounded-lg p-6 border border-border">
        <h4 className="font-semibold text-foreground mb-3">Fitur Keamanan Tambahan</h4>
        <div className="space-y-3">
          {securityFeatures?.slice(2)?.map((feature, index) => (
            <div key={index + 2} className="flex items-center space-x-3">
              <Icon name={feature?.icon} size={16} className="text-accent" />
              <div>
                <p className="font-medium text-sm text-foreground">{feature?.title}</p>
                <p className="text-xs text-muted-foreground">{feature?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-card rounded-lg p-6 border border-border">
        <h4 className="font-semibold text-foreground mb-3">Sertifikasi Keamanan</h4>
        <div className="flex justify-between items-center">
          {certifications?.map((cert, index) => (
            <div key={index} className="text-center">
              <div className="w-10 h-10 bg-muted/30 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Icon name={cert?.icon} size={18} className="text-muted-foreground" />
              </div>
              <p className="text-xs font-medium text-foreground">{cert?.name}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground text-center mt-3">
          Memenuhi standar keamanan internasional dan regulasi Indonesia
        </p>
      </div>
    </div>
  );
};

export default TrustBadges;