import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustSection = () => {
  const certifications = [
    {
      icon: 'Shield',
      title: 'ISO 27001:2013',
      description: 'Information Security Management System',
      status: 'Certified',
      date: '2024'
    },
    {
      icon: 'Building',
      title: 'PT. VirtSIM Indonesia',
      description: 'Registered Indonesian Business Entity',
      status: 'Active',
      date: '2023'
    },
    {
      icon: 'FileCheck',
      title: 'KOMINFO Compliance',
      description: 'Indonesian Telecommunications Regulation',
      status: 'Compliant',
      date: '2024'
    },
    {
      icon: 'CreditCard',
      title: 'PCI DSS Level 1',
      description: 'Payment Card Industry Data Security',
      status: 'Certified',
      date: '2024'
    }
  ];

  const securityFeatures = [
    {
      icon: 'Lock',
      title: 'End-to-End Encryption',
      description: 'Semua data dan komunikasi dienkripsi menggunakan standar AES-256 untuk keamanan maksimal.'
    },
    {
      icon: 'Eye',
      title: 'Privacy Protection',
      description: 'Kebijakan privasi yang ketat sesuai dengan GDPR dan regulasi perlindungan data Indonesia.'
    },
    {
      icon: 'Server',
      title: 'Secure Infrastructure',
      description: 'Server hosting di data center tier-3 dengan redundancy dan monitoring 24/7.'
    },
    {
      icon: 'UserCheck',
      title: 'Identity Verification',
      description: 'Sistem verifikasi identitas multi-layer untuk mencegah fraud dan penyalahgunaan.'
    }
  ];

  const trustMetrics = [
    { label: 'Uptime Guarantee', value: '99.9%', icon: 'Activity' },
    { label: 'Data Centers', value: '3', icon: 'Server' },
    { label: 'Security Audits/Year', value: '4', icon: 'Shield' },
    { label: 'Compliance Standards', value: '8+', icon: 'FileCheck' }
  ];

  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Shield" size={16} />
            <span>Trust & Security</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Keamanan dan Kepercayaan Terjamin
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            VirtSIM Hub berkomitmen menjaga kepercayaan Anda melalui sertifikasi internasional, 
            compliance regulasi Indonesia, dan standar keamanan tingkat enterprise.
          </p>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustMetrics?.map((metric, index) => (
            <div key={index} className="text-center bg-background border border-border rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={metric?.icon} size={20} color="white" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{metric?.value}</div>
              <div className="text-sm text-muted-foreground">{metric?.label}</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Sertifikasi dan Compliance
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert, index) => (
              <div key={index} className="bg-background border border-border rounded-xl p-6 text-center hover:shadow-soft transition-shadow duration-200">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={cert?.icon} size={24} color="white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{cert?.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{cert?.description}</p>
                <div className="flex items-center justify-center space-x-2">
                  <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-medium">
                    {cert?.status}
                  </span>
                  <span className="text-xs text-muted-foreground">{cert?.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Features */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Fitur Keamanan Enterprise
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {securityFeatures?.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={feature?.icon} size={18} color="white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{feature?.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Security Team */}
        <div className="mt-16 text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
            <Icon name="Shield" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-4">
              Security & Compliance Inquiries
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Untuk pertanyaan terkait keamanan, compliance, atau audit, hubungi tim security kami yang berpengalaman.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>security@virtsimhub.id</span>
              </button>
              <button className="border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-muted transition-colors duration-200 flex items-center justify-center space-x-2">
                <Icon name="FileText" size={16} />
                <span>Download Security Whitepaper</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;