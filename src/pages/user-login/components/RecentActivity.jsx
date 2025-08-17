import React from 'react';
import Icon from '../../../components/AppIcon';

const RecentActivity = () => {
  // Mock recent login activities
  const recentLogins = [
    {
      device: 'Chrome on Windows',
      location: 'Jakarta, Indonesia',
      time: '2 jam yang lalu',
      status: 'success',
      isCurrent: true
    },
    {
      device: 'Safari on iPhone',
      location: 'Surabaya, Indonesia', 
      time: '1 hari yang lalu',
      status: 'success',
      isCurrent: false
    },
    {
      device: 'Firefox on Linux',
      location: 'Bandung, Indonesia',
      time: '3 hari yang lalu',
      status: 'success',
      isCurrent: false
    }
  ];

  const getDeviceIcon = (device) => {
    if (device?.includes('iPhone') || device?.includes('iOS')) return 'Smartphone';
    if (device?.includes('Chrome')) return 'Chrome';
    if (device?.includes('Firefox')) return 'Firefox';
    if (device?.includes('Safari')) return 'Globe';
    return 'Monitor';
  };

  const getLocationFlag = (location) => {
    if (location?.includes('Indonesia')) return '🇮🇩';
    return '🌍';
  };

  return (
    <div className="bg-card rounded-lg p-6 border border-border">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Icon name="Activity" size={20} className="text-foreground" />
          <h3 className="text-lg font-semibold text-foreground">Aktivitas Login Terkini</h3>
        </div>
        <button className="text-sm text-primary hover:underline">
          Lihat Semua
        </button>
      </div>

      <div className="space-y-3">
        {recentLogins?.map((login, index) => (
          <div 
            key={index} 
            className={`flex items-start space-x-3 p-3 rounded-lg transition-colors ${
              login?.isCurrent ? 'bg-primary/5 border border-primary/20' : 'bg-muted/30'
            }`}
          >
            <div className="flex-shrink-0">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                login?.isCurrent ? 'bg-primary/10' : 'bg-muted/50'
              }`}>
                <Icon 
                  name={getDeviceIcon(login?.device)} 
                  size={16} 
                  className={login?.isCurrent ? 'text-primary' : 'text-muted-foreground'} 
                />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <p className="text-sm font-medium text-foreground truncate">
                  {login?.device}
                </p>
                {login?.isCurrent && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-success/10 text-success border border-success/20">
                    Saat ini
                  </span>
                )}
              </div>
              
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <span>{getLocationFlag(login?.location)}</span>
                <span>{login?.location}</span>
                <span>•</span>
                <span>{login?.time}</span>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className={`w-2 h-2 rounded-full ${
                login?.status === 'success' ? 'bg-success' : 'bg-destructive'
              }`}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Security Notice */}
      <div className="mt-4 p-3 bg-warning/10 rounded-lg border border-warning/20">
        <div className="flex items-start space-x-2">
          <Icon name="AlertTriangle" size={16} className="text-warning mt-0.5" />
          <div>
            <p className="text-sm text-foreground font-medium">Keamanan Akun</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Jika Anda melihat aktivitas yang tidak dikenal, segera hubungi support atau 
              ganti password Anda.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-4 flex gap-2">
        <button className="flex-1 px-3 py-2 text-xs bg-muted/50 hover:bg-muted rounded-lg text-foreground font-medium transition-colors">
          Logout Semua Perangkat
        </button>
        <button className="flex-1 px-3 py-2 text-xs bg-muted/50 hover:bg-muted rounded-lg text-foreground font-medium transition-colors">
          Ubah Password
        </button>
      </div>
    </div>
  );
};

export default RecentActivity;