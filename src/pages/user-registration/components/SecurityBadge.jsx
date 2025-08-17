import React from 'react';
import Icon from '../../../components/AppIcon';

const SecurityBadge = () => {
  const certifications = [
    {
      name: 'ISO 27001',
      description: 'Standar Keamanan Informasi',
      icon: 'Shield'
    },
    {
      name: 'SSL Certificate',
      description: 'Enkripsi End-to-End',
      icon: 'Lock'
    },
    {
      name: 'GDPR Compliant',
      description: 'Perlindungan Data Personal',
      icon: 'UserCheck'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6 border border-primary/20">
      <div className="flex items-center space-x-2 mb-4">
        <Icon name="ShieldCheck" size={24} className="text-primary" />
        <div>
          <h3 className="text-lg font-semibold text-foreground">Keamanan Terjamin</h3>
          <p className="text-sm text-muted-foreground">Sesuai regulasi Indonesia & internasional</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {certifications?.map((cert, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 bg-card/50 rounded-lg">
            <Icon name={cert?.icon} size={18} className="text-primary" />
            <div>
              <p className="font-medium text-foreground text-sm">{cert?.name}</p>
              <p className="text-xs text-muted-foreground">{cert?.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Data Protection Notice */}
      <div className="mt-4 p-3 bg-success/10 rounded-lg border border-success/20">
        <div className="flex items-start space-x-2">
          <Icon name="Info" size={16} className="text-success mt-0.5" />
          <div>
            <p className="text-sm text-foreground font-medium">Perlindungan Data</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Kami mematuhi UU No. 27 Tahun 2022 tentang Perlindungan Data Pribadi (PDP) 
              dan tidak akan membagikan data Anda kepada pihak ketiga tanpa persetujuan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityBadge;