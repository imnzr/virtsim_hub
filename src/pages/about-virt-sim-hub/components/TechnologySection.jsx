import React from 'react';
import Icon from '../../../components/AppIcon';

const TechnologySection = () => {
  const techFeatures = [
    {
      icon: 'Cpu',
      title: 'Intelligent Curation System',
      description: 'Algoritma machine learning yang menganalisis dan memilih penyedia virtual SIM terbaik berdasarkan kebutuhan spesifik pengguna.',
      benefits: ['Real-time provider matching', 'Quality score analysis', 'Performance optimization']
    },
    {
      icon: 'TrendingUp',
      title: 'Dynamic Pricing Engine',
      description: 'Sistem pricing intelligence yang memberikan harga kompetitif melalui analisis pasar real-time dan negosiasi otomatis.',
      benefits: ['Market price monitoring', 'Automated negotiations', 'Cost optimization']
    },
    {
      icon: 'Zap',
      title: 'Automated Procurement',
      description: 'Proses pengadaan virtual SIM yang sepenuhnya otomatis dari pemesanan hingga aktivasi dalam hitungan detik.',
      benefits: ['Instant activation', 'Zero manual intervention', 'Error-free processing']
    },
    {
      icon: 'Shield',
      title: 'Security & Compliance',
      description: 'Infrastruktur keamanan tingkat enterprise dengan enkripsi end-to-end dan compliance terhadap regulasi Indonesia.',
      benefits: ['ISO 27001 certified', 'Data encryption', 'Regulatory compliance']
    }
  ];

  const integrations = [
    { name: '5sim.net', logo: 'Globe', status: 'Active' },
    { name: 'SMS-Activate', logo: 'MessageSquare', status: 'Active' },
    { name: 'GetSMSCode', logo: 'Smartphone', status: 'Active' },
    { name: 'SMS-Man', logo: 'Users', status: 'Coming Soon' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Cpu" size={16} />
            <span>Advanced Technology Stack</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Teknologi Cerdas untuk Optimasi Layanan
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Platform kami dibangun dengan teknologi terdepan untuk memberikan pengalaman virtual SIM yang seamless, 
            aman, dan cost-effective melalui otomasi cerdas dan integrasi API yang robust.
          </p>
        </div>

        {/* Technology Features */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {techFeatures?.map((feature, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-soft transition-shadow duration-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={feature?.icon} size={24} color="white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature?.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{feature?.description}</p>
                  <div className="space-y-2">
                    {feature?.benefits?.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Icon name="CheckCircle" size={14} className="text-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Overview */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">System Architecture</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} className="text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">User Interface Layer</h4>
              <p className="text-sm text-muted-foreground">
                React-based responsive interface dengan real-time updates dan intuitive user experience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Cpu" size={24} className="text-secondary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Processing Engine</h4>
              <p className="text-sm text-muted-foreground">
                Microservices architecture dengan automated workflows dan intelligent routing system.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Database" size={24} className="text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Data & Integration</h4>
              <p className="text-sm text-muted-foreground">
                Secure database dengan real-time API integrations dan comprehensive analytics.
              </p>
            </div>
          </div>
        </div>

        {/* Provider Integrations */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Trusted Provider Integrations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations?.map((integration, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-soft transition-shadow duration-200">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={integration?.logo} size={20} color="white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{integration?.name}</h4>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  integration?.status === 'Active' ?'bg-accent/10 text-accent' :'bg-warning/10 text-warning'
                }`}>
                  {integration?.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;