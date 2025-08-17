import React from 'react';
import Icon from '../../../components/AppIcon';

const MissionSection = () => {
  const values = [
    {
      icon: 'Target',
      title: 'Transparansi',
      description: 'Kami berkomitmen memberikan informasi harga dan layanan yang jelas dan transparan kepada semua pengguna.'
    },
    {
      icon: 'Shield',
      title: 'Keandalan',
      description: 'Sistem otomatis kami memastikan layanan virtual SIM tersedia 24/7 dengan tingkat keberhasilan tinggi.'
    },
    {
      icon: 'Zap',
      title: 'Inovasi',
      description: 'Terus mengembangkan teknologi untuk memberikan pengalaman terbaik dalam pengadaan virtual SIM.'
    },
    {
      icon: 'Users',
      title: 'Fokus Pelanggan',
      description: 'Mengutamakan kepuasan pelanggan dengan dukungan teknis dan layanan pelanggan yang responsif.'
    }
  ];

  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Mission Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Misi Kami: Menjembatani Ekosistem Telekomunikasi Virtual
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                VirtSIM Hub didirikan dengan visi untuk menjadi jembatan terpercaya dalam ekosistem telekomunikasi virtual. Kami bukan penyedia langsung, melainkan kurator cerdas yang mengoptimalkan layanan virtual SIM untuk kemudahan akses global.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="CheckCircle" size={16} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Otomasi Cerdas</h3>
                  <p className="text-muted-foreground">
                    Sistem pengadaan otomatis yang menghubungkan pengguna dengan penyedia virtual SIM terbaik secara real-time.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="TrendingUp" size={16} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Harga Dinamis</h3>
                  <p className="text-muted-foreground">
                    Algoritma pricing intelligence yang memberikan harga terbaik berdasarkan kondisi pasar real-time.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="Globe" size={16} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Konektivitas Global</h3>
                  <p className="text-muted-foreground">
                    Akses ke jaringan virtual SIM global dengan fokus khusus pada kebutuhan pasar Indonesia.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values?.map((value, index) => (
              <div key={index} className="bg-background border border-border rounded-xl p-6 hover:shadow-soft transition-shadow duration-200">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                  <Icon name={value?.icon} size={24} color="white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value?.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;