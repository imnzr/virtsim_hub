import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustIndicators = () => {
  const trustItems = [
    {
      icon: 'Shield',
      title: 'Keamanan Data',
      description: 'Data Anda dilindungi dengan enkripsi SSL 256-bit dan disimpan sesuai standar ISO 27001',
      color: 'text-success'
    },
    {
      icon: 'Award',
      title: 'Terpercaya',
      description: 'Telah melayani 50,000+ pelanggan dengan rating kepuasan 4.8/5',
      color: 'text-warning'
    },
    {
      icon: 'Clock',
      title: 'Aktivasi Cepat',
      description: 'SIM virtual aktif dalam 5 menit setelah pembayaran berhasil',
      color: 'text-primary'
    }
  ];

  return (
    <div className="bg-card rounded-lg p-6 border border-border">
      <div className="flex items-center space-x-2 mb-4">
        <Icon name="CheckCircle" size={20} className="text-success" />
        <h3 className="text-lg font-semibold text-foreground">Dipercaya Ribuan Pengguna</h3>
      </div>
      
      <div className="space-y-4">
        {trustItems?.map((item, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className={`${item?.color} mt-1`}>
              <Icon name={item?.icon} size={18} />
            </div>
            <div>
              <h4 className="font-medium text-foreground">{item?.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item?.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Customer Reviews */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-foreground">Rating Pelanggan</span>
          <div className="flex items-center space-x-1">
            {[...Array(5)]?.map((_, i) => (
              <Icon key={i} name="Star" size={14} className="text-warning fill-current" />
            ))}
            <span className="text-sm text-muted-foreground ml-1">4.8/5</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          "Proses registrasi mudah, aktivasi cepat, dan customer service sangat responsif" - Budi S.
        </p>
      </div>
    </div>
  );
};

export default TrustIndicators;